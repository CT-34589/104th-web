import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "104th Battalion Milsim",
  description: "Star Wars Military Simulation Community with over 1800+ members across Xbox, PlayStation, and PC",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        href: "/images/logo.png",
      },
    ],
    apple: [
      {
        url: "/images/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/images/logo.png",
      },
    ],
  },
  openGraph: {
    title: "104th Battalion Milsim",
    description: "Star Wars Military Simulation Community with over 1800+ members across Xbox, PlayStation, and PC",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "104th Battalion Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "104th Battalion Milsim",
    description: "Star Wars Military Simulation Community with over 1800+ members across Xbox, PlayStation, and PC",
    images: ["/images/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
