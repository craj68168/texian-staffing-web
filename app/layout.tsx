import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Texian Staffing | Workforce Solutions for Texas Businesses",
  description:
    "Texian Staffing connects Texas businesses with flexible workforce solutions for warehouse, logistics, cleaning, construction support, light industrial and general labor needs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
