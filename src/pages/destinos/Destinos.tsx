"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

interface Destino {
  id: number
  pais: string
  provincia: string
  localidad: string
  direccion: string
}

export default function Destinos() {
  const [destinos, setDestinos] = useState<Destino[]>([
    {
      id: 1,
      pais: "Argentina",
      provincia: "Buenos Aires",
      localidad: "La Plata",
      direccion: "Calle 7 1234",
    },
    {
      id: 2,
      pais: "Chile",
      provincia: "Santiago",
      localidad: "Providencia",
      direccion: "Av. Providencia 1234",
    },
  ])

  const handleDelete = (id: number) => {
    setDestinos(destinos.filter((destino) => destino.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Destinos</h1>
        <Link to="/destinos/nuevo">
          <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md">Crear Destino</button>
        </Link>
      </div>

      <div className="bg-gray-200 rounded-lg p-6">
        {destinos.map((destino) => (
          <div key={destino.id} className="bg-white rounded-md p-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">
                  {destino.pais}, {destino.provincia}
                </p>
                <p className="text-gray-600">
                  {destino.localidad}, {destino.direccion}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 text-sm rounded-md"
                  onClick={() => handleDelete(destino.id)}
                >
                  Borrar
                </button>
                <Link to={`/destinos/editar/${destino.id}`}>
                  <button className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 text-sm rounded-md">
                    Editar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
