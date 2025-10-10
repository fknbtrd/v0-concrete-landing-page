import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Inter } from "next/font/google"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Arial", "sans-serif"],
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Arial", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Купить бетон в Каневской с доставкой | Цена от производителя | ЛидерБетон360",
  description:
    "✅ Производство и доставка бетона в ст. Каневской и по Каневскому району. Бетон всех марок, раствор, щебень, песок. Цены от производителя. Работаем 24/7.",
  keywords:
    "бетон каневская, бетонный завод каневская, купить бетон каневская, бетон с доставкой, бетон от производителя, товарный бетон, бетон М100, бетон М150, бетон М200, бетон М250, бетон М300, бетон М350, бетон для фундамента, марка бетона для фундамента, цена бетона с доставкой, заказать щебень, как рассчитать объем бетона, строительные растворы, тощий бетон, бетон для стяжки",
  authors: [{ name: "ЛидерБетон360" }],
  creator: "ЛидерБетон360",
  publisher: "ЛидерБетон360",
  robots: "index, follow",
  openGraph: {
    title: "Купить бетон в Каневской с доставкой | Цена от производителя | ЛидерБетон360",
    description:
      "✅ Производство и доставка бетона в ст. Каневской и по Каневскому району. Бетон всех марок, раствор, щебень, песок. Цены от производителя. Работаем 24/7.",
    url: "https://lider-beton.vercel.app",
    siteName: "ЛидерБетон360",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/concrete-plant.png",
        width: 1200,
        height: 630,
        alt: "Бетонный завод ЛидерБетон360 в Каневской",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Купить бетон в Каневской с доставкой | ЛидерБетон360",
    description: "✅ Производство и доставка бетона в ст. Каневской и по Каневскому району. Работаем 24/7.",
    images: ["/images/concrete-plant.png"],
  },
  alternates: {
    canonical: "https://lider-beton.vercel.app",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className={`font-sans ${inter.variable} ${montserrat.variable}`}>
        <noscript>
          <div
            style={{
              padding: "20px",
              backgroundColor: "#fef3c7",
              border: "2px solid #f59e0b",
              borderRadius: "8px",
              margin: "20px",
              textAlign: "center",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <h2 style={{ color: "#92400e", marginBottom: "10px" }}>JavaScript отключен</h2>
            <p style={{ color: "#78350f" }}>
              Для полноценной работы сайта необходимо включить JavaScript в настройках браузера.
            </p>
            <p style={{ color: "#78350f", marginTop: "10px" }}>
              Позвоните нам:{" "}
              <a href="tel:89183601010" style={{ color: "#1e40af", fontWeight: "bold" }}>
                8 (918) 360-10-10
              </a>
            </p>
          </div>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
