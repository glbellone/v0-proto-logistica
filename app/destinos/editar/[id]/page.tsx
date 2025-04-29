"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function EditarDestino() {
  const router = useRouter()
  const params = useParams()
  const id = params.id

  const [formData, setFormData] = useState({
    pais: "",
    provincia: "",
    localidad: "",
    direccion: "",
  })

  useEffect(() => {
    // Aquí iría la lógica para cargar los datos del destino
    // Simulamos datos de ejemplo
    setFormData({
      pais: "Argentina",
      provincia: "Buenos Aires",
      localidad: "La Plata",
      direccion: "Calle 7 1234",
    })
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para actualizar el destino
    console.log("Destino actualizado:", formData)
    router.push("/destinos")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">EDITAR DESTINO</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="font-medium">País destino</label>
          <Input
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            placeholder="Ingresar país de destino de mercadería"
            className="bg-gray-200 border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Provincia destino</label>
          <Input
            name="provincia"
            value={formData.provincia}
            onChange={handleChange}
            placeholder="Ingresar provincia de destino de mercadería"
            className="bg-gray-200 border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Localidad destino</label>
          <Input
            name="localidad"
            value={formData.localidad}
            onChange={handleChange}
            placeholder="Ingresar localidad de destino de mercadería"
            className="bg-gray-200 border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Dirección destino</label>
          <Input
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Ingresar dirección de destino de mercadería"
            className="bg-gray-200 border-none"
          />
        </div>

        <div className="flex justify-center mt-8">
          <Button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-6 rounded-full"
          >
            <span className="uppercase">Editar</span>
            <br />
            <span className="uppercase">Destino</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
