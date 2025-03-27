import "./globals.css";
import { Header } from "@/components/customs/Header";
import { ReactScan } from "@/components/utils/ReactScan";
import { ThemeProvider } from "@/components/utils/ThemeProvider";
import { archivo } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { ReactNode } from "react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  title: {
    template: "%s | Movie App",
    default: "Movie App",
  },
  description: "Watch your favorite movies and review them.",
  metadataBase: new URL(defaultUrl),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <ReactScan />
      <body className={`${archivo.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
