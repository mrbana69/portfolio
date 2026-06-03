import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GsapProvider from "../components/GsapProvider";

const inter = Inter({ subsets: ["latin"], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: "Emiliano Bana | Digital Journey",
  description: "Dalla formazione alle esperienze sul campo: competenze tecniche, crescita personale, impatto reale. Portfolio di Emiliano Bana.",
  icons: {
    icon: "/favicon.ico", // Assicurati di mettere un file favicon.ico nella cartella public/
  },
  openGraph: {
    title: "Emiliano Bana | Digital Journey",
    description: "Sviluppo software, Cybersecurity e Hardware repair.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="bg-black">
      <body className={`${inter.className} antialiased selection:bg-accent selection:text-black`}>
        <GsapProvider>{children}</GsapProvider>
      </body>
    </html>
  );
}