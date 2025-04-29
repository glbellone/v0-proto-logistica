"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={`bg-green-700 min-h-screen flex flex-col items-center relative transition-all duration-300 ${collapsed ? "w-[60px]" : "w-[180px]"}`}
    >
      <Link href="/" className="block">
        <div
          className={`p-4 bg-white m-4 flex items-center justify-center ${collapsed ? "w-[40px] h-[40px]" : "w-[120px] h-[120px]"}`}
        >
          <div className="relative w-full h-full">
            <Image src="/logo.png" alt="Logística ACME" fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      </Link>

      <div className="flex flex-col gap-4 mt-8 w-full px-4">
        <Link href="/remitos">
          <button
            className={`w-full bg-black text-white py-2 rounded-md text-sm uppercase font-medium ${collapsed ? "px-0" : ""}`}
          >
            {collapsed ? <Menu className="mx-auto" size={18} /> : "Remitos"}
          </button>
        </Link>

        <Link href="/clientes">
          <button
            className={`w-full bg-black text-white py-2 rounded-md text-sm uppercase font-medium ${collapsed ? "px-0" : ""}`}
          >
            {collapsed ? <Menu className="mx-auto" size={18} /> : "Clientes"}
          </button>
        </Link>

        <Link href="/destinos">
          <button
            className={`w-full bg-black text-white py-2 rounded-md text-sm uppercase font-medium ${collapsed ? "px-0" : ""}`}
          >
            {collapsed ? <Menu className="mx-auto" size={18} /> : "Destinos"}
          </button>
        </Link>

        <Link href="/reportes">
          <button
            className={`w-full bg-black text-white py-2 rounded-md text-sm uppercase font-medium ${collapsed ? "px-0" : ""}`}
          >
            {collapsed ? <Menu className="mx-auto" size={18} /> : "Reportes"}
          </button>
        </Link>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-20 bg-white rounded-full border border-gray-200 shadow-md hover:bg-gray-100"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </Button>
    </div>
  )
}
