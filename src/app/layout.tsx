import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import Footer from "@/components/footer";
import { ThemeProvider } from "@/lib/providers/theme-provider";
// import NavBar from "@/components/navbar/navbar";
import { NavigationMenuWithNub } from "@/components/navbar/navigation-menu";
import { NavBar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Vercel Clone",
  description:
    "A clone of the Vercel website built with Next.js, TypeScript, Tailwind CSS, shadcn/ui and Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <NavBar />
            {/* <NavigationMenuWithNub /> */}
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
