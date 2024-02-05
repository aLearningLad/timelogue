import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata: Metadata = {
  title: "Timelogue",
  description:
    "A simplistic cataloguing app for Timepiece enthusiasts and horologues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  );
}
