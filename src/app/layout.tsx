import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HydroDrive USA | Eco-Friendly Vehicle Rentals in Orange County",
  description:
    "Rent hydrogen fuel cell, electric, hybrid, and fuel-efficient gas vehicles in Irvine & Orange County. Lower-emission driving starting at $20/day. Book on Turo today.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
