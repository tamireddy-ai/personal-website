import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tamir Eddy | Electrical Engineering Student",
  description:
    "Electrical and Electronics Engineering student specializing in control systems, hardware and system reliability. Experience in IT, networks and QA.",
    openGraph: {
      title: "Tamir Eddy Portfolio",
      description:
        "Hardware, systems and QA focused engineering student with real field experience.",
        url: "https://tamir-eddy.vercel.app",
      siteName: "Tamir Eddy Portfolio",
      images: [
        {
          url: "/image.png",
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
