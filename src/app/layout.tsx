import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Imane | Full Stack Developer",
    template: "%s | Imane Portfolio",
  },
  description:
    "Imane is a passionate Full Stack Developer specializing in modern web technologies and UI/UX design.",
  
  keywords: [
    "Imane Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "Portfolio Imane",
    "Web Developer",
    "UI UX Designer",
  ],

  authors: [{ name: "Imane" }],
  creator: "Imane",

  openGraph: {
    title: "Imane Portfolio",
    description:
      "Discover Imane's portfolio — Full Stack Developer building modern and high-performing web applications.",
    url: "https://imane-ellaouzi.vercel.app", 
    siteName: "Imane Portfolio",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Imane Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Imane Portfolio",
    description:
      "Full Stack Developer passionate about building modern web experiences.",
    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  appleWebApp: {
    title: "Imane Portfolio",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-black text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}