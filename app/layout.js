export const metadata = {
  metadataBase: new URL('https://thehouseofkc.com'),

  title:
    'TheHouseofKC – Bespoke Heirloom Jewelry by Shree Santosh Kumar Ji Choraria | Bangalore',

  description:
    'Exclusive tailor-made heirloom jewelry by TheHouseofKC, honoring Shree Santosh Kumar Ji Choraria’s legacy. Crafted in Bangalore for those who build, preserve, and pass on lasting legacies.',

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  keywords: [
    'TheHouseofKC',
    'Santosh Kumar Choraria',
    'heirloom jewelry India',
    'bespoke jewelry Bangalore',
    'jewelry Bangalore',
    'premium jewelry India',
    'handcrafted jewelry',
    'custom jewelry Bangalore',
    'luxury jewelry',
    'Bangalore jeweler',
  ],

  authors: [{ name: 'TheHouseofKC' }],
  creator: 'TheHouseofKC',
  publisher: 'TheHouseofKC',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: 'https://thehouseofkc.com',
  },

  openGraph: {
    title:
      'TheHouseofKC – Bespoke Heirloom Jewelry by Shree Santosh Kumar Ji Choraria',
    description:
      'Exclusive tailor-made heirloom jewelry crafted in Bangalore, honoring Shree Santosh Kumar Ji Choraria’s legacy.',
    url: 'https://thehouseofkc.com',
    siteName: 'TheHouseofKC',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://thehouseofkc.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'TheHouseofKC Jewelry',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TheHouseofKC – Bespoke Heirloom Jewelry',
    description:
      'Exclusive heirloom jewelry crafted to preserve legacy and identity.',
    images: ['https://thehouseofkc.com/logo.png'],
  },

  verification: {
    google: 'omSIrPqdHp1CGbHv8_XBySboV3uvMVMlK1cr-Xbryzw',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}