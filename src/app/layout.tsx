import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mrbana.vercel.app"),
  title: "Emiliano Bana · IT & Web Developer",
  description: "Portfolio di Emiliano Bana, studente di Informatica e IT & Web Developer. Progetti, sistemi, reti e sviluppo web.",
  alternates: {
    canonical: "/",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Emiliano Bana · IT & Web Developer",
    description: "Progetti web, sistemi e reti. Portfolio personale di Emiliano Bana, studente di Informatica all'Università degli Studi del Molise.",
    url: "https://mrbana.vercel.app",
    siteName: "Emiliano Bana Portfolio",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emiliano Bana · IT & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emiliano Bana · IT & Web Developer",
    description: "Progetti web, sistemi e reti. Portfolio personale di Emiliano Bana.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
