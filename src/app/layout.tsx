import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        <title>Reflective – Pathway to Productivity</title>

        {/* Primary Meta Tags */}
        <meta name="title" content="Reflective – Pathway to Productivity" />
        <meta
          name="description"
          content="Celebrate the joy of accomplishment with Reflective — an app designed to track your progress, motivate your effort, and celebrate your success."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reflective.imsanchit.xyz/" />
        <meta
          property="og:title"
          content="Reflective – Pathway to Productivity"
        />
        <meta
          property="og:description"
          content="Celebrate the joy of accomplishment with Reflective — an app designed to track your progress, motivate your effort, and celebrate your success."
        />
        <meta
          property="og:image"
          content="https://reflective.imsanchit.xyz/og-banner.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://reflective.imsanchit.xyz/"
        />
        <meta
          property="twitter:title"
          content="Reflective – Pathway to Productivity"
        />
        <meta
          property="twitter:description"
          content="Celebrate the joy of accomplishment with Reflective — an app designed to track your progress, motivate your effort, and celebrate your success."
        />
        <meta
          property="twitter:image"
          content="https://reflective.imsanchit.xyz/og-banner.png"
        />
      </head>
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
