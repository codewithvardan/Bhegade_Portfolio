import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const display = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krishnarao Dhondiba Bhegade | Portfolio",
  description:
    "An educational portfolio on the life, public service, and educational legacy of Krishnarao Dhondiba Bhegade — Mavalbhushan and Shikshan Maharshi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
