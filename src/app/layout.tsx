import "@/styles/globals.css"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { archivo } from "@/lib/fonts"
import type React from "react"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  title: {
    template: "%s | Movie App",
    default: "Movie App",
  },
  description: "Watch your favorite movies and review them.",
  metadataBase: new URL(defaultUrl),
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${archivo.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
