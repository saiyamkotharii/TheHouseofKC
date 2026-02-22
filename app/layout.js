export const metadata = {
  title: 'TheHouseofKC | Premium Men\'s Jewelry by Santosh Kumar Choraria | Bangalore',
  description: 'TheHouseofKC - A tribute to Santosh Kumar Choraria\'s lifelong passion for jewelry craftsmanship. Premium handcrafted jewelry for men in Bangalore, India. From gemstones to finished art, quality built on substance.',
  keywords: 'TheHouseofKC, Santosh Kumar Choraria, men\'s jewelry Bangalore, premium jewelry India, handcrafted jewelry, custom jewelry Bangalore, luxury jewelry for men, silver jewelry India, bespoke jewelry, Bangalore jeweler',
  authors: [{ name: 'TheHouseofKC' }],
  creator: 'TheHouseofKC',
  publisher: 'TheHouseofKC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'TheHouseofKC | Premium Men\'s Jewelry by Santosh Kumar Choraria',
    description: 'Honoring the artistic legacy of Santosh Kumar Choraria. Premium handcrafted jewelry for the modern man in Bangalore, India.',
    url: 'https://thehouseofkc.com',
    siteName: 'TheHouseofKC',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://thehouseofkc.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TheHouseofKC Jewelry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheHouseofKC | Premium Men\'s Jewelry',
    description: 'Handcrafted premium jewelry for men. A legacy of Santosh Kumar Choraria.',
    images: ['https://thehouseofkc.com/og-image.jpg'],
  },
  verification: {
    google: 'omSIrPqdHp1CGbHv8_XBySboV3uvMVMlK1cr-Xbryzw',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://thehouseofkc.com" />
      </head>
      <body className="bg-white text-black">{children}</body>
    </html>
  )
}