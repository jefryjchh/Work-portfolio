import type { Metadata } from "next";
import "./globals.css";
import BarHeader from "./components/menu/barheader";
import { Inter } from "next/font/google";
import AOSProvider from "./components/animationAOS/aosProvider";
import Footer from "./components/footer/footer";

/* Fuente Inter */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100","200","300","400","500","600","700","800","900"],
  display: "swap",  
});

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio de Jeffry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-[#000000] overflow-x-hidden min-h-screen flex flex-col`} suppressHydrationWarning
      >
        <main className="flex-1 overflow-hidden">
          <BarHeader/>
          <AOSProvider>
            {children}
          </AOSProvider>
        </main>
        <Footer/>       
      </body>    
    </html>
  );
}
