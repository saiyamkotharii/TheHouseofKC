export const metadata = {
  metadataBase: new URL('https://thehouseofkc.com'),

  title: {
    default:
      'TheHouseofKC – Bespoke Heirloom Jewelry by Santosh Kumar Choraria | Bangalore',
    template: '%s | TheHouseofKC',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  description:
    'TheHouseofKC is a tribute to Santosh Kumar Choraria’s lifelong passion for jewelry craftsmanship. Exclusive, tailor-made heirloom jewelry crafted for those who build, preserve, and pass on lasting legacies. Premium handcrafted men’s jewelry in Bangalore, India.',

  keywords: [
    'TheHouseofKC',
    'Santosh Kumar Choraria',
    'heirloom jewelry India',
    'bespoke jewelry Bangalore',
    'men’s jewelry Bangalore',
    'premium jewelry India',
    'handcrafted jewelry',
    'custom jewelry Bangalore',
    'luxury jewelry for men',
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

  openGraph: {
    title:
      'TheHouseofKC – Bespoke Heirloom Jewelry by Santosh Kumar Choraria',
    description:
      'Exclusive tailor-made heirloom jewelry by TheHouseofKC, honoring Santosh Kumar Choraria’s legacy. Crafted for those who build, preserve, and pass on timeless legacies.',
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
    title: 'TheHouseofKC – Bespoke Heirloom Jewelry',
    description:
      'Exclusive heirloom jewelry crafted to preserve legacy and identity. TheHouseofKC by Santosh Kumar Choraria.',
    images: ['https://thehouseofkc.com/og-image.jpg'],
  },

  verification: {
    google: 'omSIrPqdHp1CGbHv8_XBySboV3uvMVMlK1cr-Xbryzw',
  },

  alternates: {
    canonical: 'https://thehouseofkc.com',
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