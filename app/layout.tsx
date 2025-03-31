import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/BG";
import { Nav } from "@/components/Nav";
import { SocialDock } from "@/components/SocialDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parth's Portfolio",
  description: "created by Parth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Background layer */}
        <div className="fixed inset-0 z-0">
          <Background />
        </div>
        
        {/* Content layer */}
        <div className="relative z-10 min-h-screen">
          {/* Navigation */}
          <div className="fixed top-0 left-0 right-0 z-50">
            <Nav />
          </div>
          {/* Social Dock */}
          <div className=" bottom-0 left-0 right-0 z-50">
            <SocialDock />
          </div>
          
          {/* Main content */}
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
