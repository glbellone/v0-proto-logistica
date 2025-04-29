"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Remito {
  id: number
  numero: string
  cliente: string
  destino: string
  fecha: string
}

export default function Remitos() {
  const [remitos, setRemitos] = useState<Remito[]>([
    {
      id: 1,
      numero: "R-00123",
      cliente: "Cliente A",
      destino: "Buenos Aires, Argentina",
      fecha: "15/04/2023",
    },
    {
      id: 2,
      numero: "R-00124",
      cliente: "Cliente B",
      destino: "Santiago, Chile",
      fecha: "18/04/2023",
    },
  ])

  const handleDelete = (id: number) => {
    setRemitos(remitos.filter((remito) => remito.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Remitos</h1>
        <Link href="/remitos/nuevo">
          <Button className="bg-green-700 hover:bg-green-800">Crear Remito</Button>
        </Link>
      </div>

      <div className="bg-gray-200 rounded-lg p-6">
        {remitos.map((remito) => (
          <div key={remito.id} className="bg-white rounded-md p-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Remito: {remito.numero}</p>
                <p className="text-gray-600">
                  Cliente: {remito.cliente} | Destino: {remito.destino} | Fecha: {remito.fecha}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="destructive"
                  size="sm"
                  className="bg-green-700 hover:bg-green-800 text-white"
                  onClick={() => handleDelete(remito.id)}
                >
                  Borrar
                </Button>
                <Link href={`/remitos/editar/${remito.id}`}>
                  <Button variant="outline" size="sm" className="bg-green-700 hover:bg-green-800 text-white">
                    Editar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
