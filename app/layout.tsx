import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portafolio Profesional | Desarrollador Fullstack Sr.",
  description:
    "Desarrollador Fullstack Sr. con 14 años de experiencia en múltiples tecnologías y proyectos enterprise.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
