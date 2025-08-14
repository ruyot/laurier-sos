import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Laurier SOS - Students Offering Support",
  description: "Review sessions that get you exam-ready. Supporting Laurier students since 2004.",
  keywords: ["Laurier", "SOS", "exam review", "tutoring", "student support", "Wilfrid Laurier University"],
  openGraph: {
    title: "Laurier SOS - Students Offering Support",
    description: "Review sessions that get you exam-ready. Supporting Laurier students since 2004.",
    type: "website",
    url: "https://lauriersos.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laurier SOS - Students Offering Support",
    description: "Review sessions that get you exam-ready. Supporting Laurier students since 2004.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
