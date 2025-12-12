import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDesktop } from "@/features/common/components/navbar-desktop";
import { ThemeProvider } from "@/features/common/components/theme-provider";
import Footer from "@/features/common/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meghanath S Shetty | Frontend Developer",
  description:
    "Frontend Engineer crafting clean, scalable, and high-performance web interfaces. Open to opportunities and collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/ms-bg-white.png" rel="icon" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background dark:bg-background`}
      >
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/leader-line/1.0.7/leader-line.min.js"
          strategy="afterInteractive"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="min-h-[30vh] w-full absolute top-0 z-0 gradient-layer rotate-300 translate-x-[-30vw]" /> */}
          <NavbarDesktop />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
