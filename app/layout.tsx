import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Põnnipatrull – Laste elektriautod ja ATV-d Eestis",
    template: "%s | Põnnipatrull",
  },
  description:
    "Eesti suurim laste elektriautode ja ATV-de pood. Kiire tarne, garantii ja varuosad. Mercedes, Lamborghini, Can-Am ja palju muud.",
  keywords: [
    "laste elektriauto",
    "laste ATV",
    "elektriauto lastele",
    "põnnipatrull",
    "laste sõiduk",
  ],
  openGraph: {
    siteName: "Põnnipatrull",
    locale: "et_EE",
    type: "website",
    images: [
      {
        url: "https://ponnipatrull.ee/wp-content/uploads/2023/04/337356841_546684910913308_1050654842654207095_n-484x600.png",
        width: 484,
        height: 600,
        alt: "Põnnipatrull",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
