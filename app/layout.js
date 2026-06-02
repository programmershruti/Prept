import { DM_Sans, Lora } from "next/font/google";
import { ClerkProvider} from '@clerk/nextjs'

import { ThemeProvider } from "@/components/theme-provider";
import { dark } from '@clerk/ui/themes'
import Header from "@/components/header";
import "./globals.css";


const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata = {
  title: "interview",
  description: "Discover an amazing interview experience",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      theme: dark,
    }}>
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${lora.variable} ${dmSans.variable} font-sans`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <Header/>
      <main className="min-h-screen">{children}</main>
      <footer className="relative z-10 border-t border-white/7 py-12  mx-auto px-6 flex flex-wrap items-center justify-center text-stone-400">
              Made by Shruti
            </footer>
      </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
