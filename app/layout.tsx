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
  title: {
    default: "SMS IT Solutions | Smart IT Services & Digital Solutions",
    template: "%s | SMS IT Solutions",
  },
  description:
    "SMS IT Solutions provides professional software development, cloud services, IT consulting, cybersecurity, and digital transformation solutions tailored for modern businesses.",
  keywords: [
    "SMS IT Solutions",
    "IT company Nepal",
    "software development",
    "cloud services",
    "cybersecurity",
    "IT consulting",
    "web development",
    "mobile app development",
  ],
  authors: [{ name: "SMS IT Solutions" }],
  creator: "SMS IT Solutions",
  metadataBase: new URL("https://www.smsitsolutions.com"), // change to your real domain
  openGraph: {
    title: "SMS IT Solutions | IT Services & Software Development",
    description:
      "Reliable and scalable IT solutions including software development, cloud, cybersecurity, and infrastructure services.",
    url: "https://www.smsitsolutions.com",
    siteName: "SMS IT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
