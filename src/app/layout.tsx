import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clash = localFont({
  src: "./fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Crossroads",
  description: "Crossroads - A choice based AI intigrated game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${clash.className} bg-neutral-300 text-neutral-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
