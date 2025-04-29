"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Contacto {
  nombre: string
  email: string
  telefono: string
}

interface Cliente {
  id: number
  razonSocial: string
  direccion: string
  cuitRuit: string
  tipoEmpresa: string
  contactos: Contacto[]
}

export default function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([
    {
      id: 1,
      razonSocial: "Empresa A S.A.",
      direccion: "Av. Corrientes 1234, CABA",
      cuitRuit: "30-12345678-9",
      tipoEmpresa: "Sociedad Anónima",
      contactos: [
        {
          nombre: "Juan Pérez",
          email: "juan@empresaa.com",
          telefono: "11-1234-5678",
        },
      ],
    },
    {
      id: 2,
      razonSocial: "Distribuidora B S.R.L.",
      direccion: "Calle 7 890, La Plata",
      cuitRuit: "30-98765432-1",
      tipoEmpresa: "S.R.L.",
      contactos: [
        {
          nombre: "María González",
          email: "maria@distribuidorab.com",
          telefono: "221-456-7890",
        },
        {
          nombre: "Carlos Rodríguez",
          email: "carlos@distribuidorab.com",
          telefono: "221-567-8901",
        },
      ],
    },
  ])

  const handleDelete = (id: number) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Clientes</h1>
        <Link href="/clientes/nuevo">
          <Button className="bg-green-700 hover:bg-green-800">Crear Cliente</Button>
        </Link>
      </div>

      <div className="bg-gray-200 rounded-lg p-6">
        {clientes.map((cliente) => (
          <div key={cliente.id} className="bg-white rounded-md p-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{cliente.razonSocial}</p>
                <p className="text-gray-600">
                  CUIT/RUIT: {cliente.cuitRuit} | Tipo: {cliente.tipoEmpresa}
                </p>
                <p className="text-gray-600">Dirección: {cliente.direccion}</p>
                <div className="mt-2">
                  <p className="text-sm font-medium">Contactos ({cliente.contactos.length}):</p>
                  {cliente.contactos.map((contacto, index) => (
                    <p key={index} className="text-sm text-gray-600">
                      {contacto.nombre} - {contacto.email} - {contacto.telefono}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="destructive"
                  size="sm"
                  className="bg-green-700 hover:bg-green-800 text-white"
                  onClick={() => handleDelete(cliente.id)}
                >
                  Borrar
                </Button>
                <Link href={`/clientes/editar/${cliente.id}`}>
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
