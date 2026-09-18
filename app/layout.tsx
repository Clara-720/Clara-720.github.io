import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mingjing Hou — Linguistic Data Science · NLP · Data Analysis",
  description:
    "Mingjing Hou is a Linguistic Data Science master's student in Bochum, combining NLP research, statistical analysis and digital marketing experience.",
  keywords: [
    "Mingjing Hou",
    "Linguistic Data Science",
    "NLP",
    "Natural Language Processing",
    "Data Analysis",
    "Bochum",
  ],
  authors: [{ name: "Mingjing Hou" }],
  openGraph: {
    title: "Mingjing Hou — Linguistic Data Science · NLP · Data Analysis",
    description:
      "Selected research, commercial experience and methods for language, data and decisions.",
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Mingjing Hou — Linguistic Data Science · NLP · Data Analysis",
    description:
      "Selected research, commercial experience and methods for language, data and decisions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
