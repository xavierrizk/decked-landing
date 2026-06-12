import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decked — Rate the Sets That Decked You",
  description:
    "Discover, rate, and share your favorite DJ sets with a community of ravers. Follow verified DJs, leave reviews, and find your next obsession.",
  keywords:
    "DJ sets, rave ratings, electronic music, DJ reviews, techno, house music",
  openGraph: {
    title: "Decked — Rate the Sets That Decked You",
    description: "Discover, rate, and share your favorite DJ sets.",
    url: "https://decked.app",
    siteName: "Decked",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decked",
    description:
      "Discover, rate, and share your favorite DJ sets with a community of ravers.",
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
            "Discover, rate, and share your favorite DJ sets with a community of ravers.",
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
