import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "JUI & Co - Sustainable Fashion",
  description: "Discover our sage and moss green inspired clothing collection",
    generator: 'Anoop2005'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable}`}
    >
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
