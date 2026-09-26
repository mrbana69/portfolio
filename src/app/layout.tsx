import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emiliano Bana — IT & Web Developer",
  description: "Portfolio di Emiliano Bana, studente di Informatica e IT & Web Developer. Progetti, sistemi, reti e sviluppo web.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Emiliano Bana — IT & Web Developer",
    description: "Progetti web, sistemi e reti. Portfolio personale di Emiliano Bana, studente di Informatica all'Università degli Studi del Molise.",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary",
    title: "Emiliano Bana — IT & Web Developer",
    description: "Progetti web, sistemi e reti. Portfolio personale di Emiliano Bana.",
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