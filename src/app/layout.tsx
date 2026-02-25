import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import config from "@/data/config.json";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.profileName}`,
    default: `${config.profileName} - ${config.role}`,
  },
  description: config.subHeadline,
  openGraph: {
    title: `${config.profileName} - ${config.role}`,
    description: config.subHeadline,
    url: 'https://portfolio.com', // Replace with actual URL later
    siteName: `${config.profileName} Portfolio`,
    images: [
      {
        url: config.profileImageUrl,
        width: 800,
        height: 600,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
