import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "HomeVisor – Your Home, Managed",
  description:
    "The 24/7 Home Manager for every homeowner. A unified Home Operating System that turns ownership from reactive and stressful into predictable and managed.",
  keywords: [
    "home management",
    "home maintenance",
    "property management",
    "homeowner",
    "contractor coordination",
    "HomeVisor",
  ],
  authors: [{ name: "HomeVisor" }],
  openGraph: {
    title: "HomeVisor – Your Home, Managed",
    description:
      "The 24/7 Home Manager for every homeowner. A unified Home Operating System that turns ownership from reactive and stressful into predictable and managed.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeVisor – Your Home, Managed",
    description:
      "The 24/7 Home Manager for every homeowner. A unified Home Operating System that turns ownership from reactive and stressful into predictable and managed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} font-sans antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff_0,_#ebe9ff_38%,_#dad7ff_100%)] text-foreground">
          {/* Ambient blobs */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#B1A6FF]/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-40 h-80 w-80 rounded-full bg-[#FFB3D1]/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#9DECF9]/40 blur-3xl" />

          {/* Scrim to keep content legible */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff_0,_#ffffff_18%,_transparent_55%)]" />

          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}

