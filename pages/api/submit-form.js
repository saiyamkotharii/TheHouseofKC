export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, timestamp } = req.body;

    // Send to Google Sheets
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL;

    if (!GOOGLE_SHEETS_URL) {
      console.error('Google Sheets URL not configured');
      return res.status(500).json({ message: 'Configuration error' });
    }

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message: message || 'No message provided',
        timestamp
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    return res.status(500).json({ message: 'Failed to submit form' });
  }
}
