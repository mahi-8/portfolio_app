
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme_provider"



import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Maheera Rehman",
  description: "Python & Agentic AI Developer",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-[#030A14] to-[#0E1C32] text-foreground">
        {/* Theme Provider for Toggle Mode  */}
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {/* Main Wrapper */}
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#030A14] to-[#0E1C32]">
          {/* Page Content */}
          <main className="flex-1 w-full bg-gradient-to-br from-[#030A14] to-[#0E1C32]">
            {children}
          </main>

          {/* Footer */}
          <footer className="w-full p-4 border-t border-border text-center bg-gradient-to-br from-[#030A14] to-[#0E1C32]">
            <p className="text-sm text-gray-400">© 2025 My Portfolio. All rights reserved.</p>
          </footer>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

