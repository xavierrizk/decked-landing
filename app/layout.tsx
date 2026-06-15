import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decked — Rate the Live Music That Moves You",
  description:
    "Discover, rate, and share live music experiences with a community of music lovers. Concerts, festivals, DJ sets, live bands, and raves — all in one place.",
  keywords:
    "live music ratings, concert reviews, festival reviews, DJ sets, live bands, raves, concerts, gig reviews",
  openGraph: {
    title: "Decked — Rate the Live Music That Moves You",
    description:
      "Discover, rate, and share live music experiences — concerts, festivals, DJ sets, and more.",
    url: "https://decked.app",
    siteName: "Decked",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decked",
    description:
      "Discover, rate, and share live music experiences with a community of music lovers.",
  },
};

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Decked",
          url: "https://decked.app",
          description:
            "Discover, rate, and share live music experiences with a community of music lovers.",
        }),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://decked.app" />
        <JsonLd />
      </head>
      <body
        className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
