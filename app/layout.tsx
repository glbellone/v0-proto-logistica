import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Sidebar from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Logística ACME",
  description: "Movemos el mundo por ti",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6 bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
  )
}
