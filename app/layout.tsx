import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomeVisor - Your Home, Managed",
  description: "The 24/7 Home Manager for Every Homeowner. A unified Home Operating System that turns ownership from reactive and stressful into predictable and managed.",
  keywords: ["home management", "home maintenance", "property management", "homeowner", "contractor coordination"],
  authors: [{ name: "HomeVisor" }],
  openGraph: {
    title: "HomeVisor - Your Home, Managed",
    description: "The 24/7 Home Manager for Every Homeowner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeVisor - Your Home, Managed",
    description: "The 24/7 Home Manager for Every Homeowner",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

