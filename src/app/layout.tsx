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
        className={` ${auger.className} bg-amber-400 text-neutral-900 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
