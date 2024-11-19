import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const auger = localFont({
  src: [
    {
      path: "./fonts/AugerMonoRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AugerMonoBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const testimonia = localFont({
  src: "./fonts/Testimonia.woff2",
  variable: "--font-testimonia",
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
        className={` ${auger.className} ${testimonia.variable} bg-neutral-300 text-neutral-900 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
