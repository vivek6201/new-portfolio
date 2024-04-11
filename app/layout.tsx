import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Provider from "@/components/theme-provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vivek Kumar Gupta",
  description: "My personal portfolio to display my achievements and works.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen dark:bg-[#1F1717] bg-[#FCF5ED] font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
