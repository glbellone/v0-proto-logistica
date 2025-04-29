"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function NuevoRemito() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    numero: "",
    cliente: "",
    destino: "",
    peso: "",
    volumen: "",
    valor: "",
    tipo: "",
    requisitos: "",
    observaciones: "",
    cantidadPallets: "",
    cantidadBultos: "",
    cantidadRacks: "",
    cantidadBobinas: "",
    cantidadTambores: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar el remito
    console.log("Remito creado:", formData)
    navigate("/remitos")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Nuevo Remito</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="font-medium">Numero de remito</label>
          <input
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            placeholder="Ingresar número de remito"
            className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Cliente</label>
          <div className="flex gap-2">
            <select
              name="cliente"
              value={formData.cliente}
              onChange={handleSelectChange}
              className="flex-1 px-3 py-2 rounded-md bg-gray-200 border-none"
            >
              <option value="" disabled>
                Seleccionar cliente
              </option>
              <option value="cliente1">Cliente 1</option>
              <option value="cliente2">Cliente 2</option>
            </select>
            <button type="button" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md">
              Crear
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-medium">Destino</label>
          <div className="flex gap-2">
            <select
              name="destino"
              value={formData.destino}
              onChange={handleSelectChange}
              className="flex-1 px-3 py-2 rounded-md bg-gray-200 border-none"
            >
              <option value="" disabled>
                Seleccionar destino
              </option>
              <option value="destino1">Destino 1</option>
              <option value="destino2">Destino 2</option>
            </select>
            <button type="button" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md">
              Crear
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Peso total</label>
            <input
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              placeholder="Ingresar peso total en kilogramos"
              className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Cantidad pallets</label>
            <input
              name="cantidadPallets"
              value={formData.cantidadPallets}
              onChange={handleChange}
              placeholder="Ingresar cantidad de pallets"
              className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Volumen en metros cúbicos</label>
            <input
              name="volumen"
              value={formData.volumen}
              onChange={handleChange}
              placeholder="Ingresar volumen en metros cúbicos"
              className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Cantidad bultos</label>
            <input
              name="cantidadBultos"
              value={formData.cantidadBultos}
              onChange={handleChange}
              placeholder="Ingresar cantidad de bultos"
              className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Valor declarado</label>
            <input
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              placeholder="Ingresar valor declarado"
              className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Cantidad racks</label>
            <input
              name="cantidadRacks"
              value={formData.cantidadRacks}
              onChange={handleChange}
              placeholder="Ingresar cantidad de racks"
              className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Tipo de mercadería</label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleSelectChange}
              className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
            >
              <option value="" disabled>
                Seleccionar categoría
              </option>
              <option value="categoria1">Categoría 1</option>
              <option value="categoria2">Categoría 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-medium">Cantidad bobinas</label>
            <input
              name="cantidadBobinas"
              value={formData.cantidadBobinas}
              onChange={handleChange}
              placeholder="Ingresar cantidad de bobinas"
              className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Requisitos de manipulación</label>
            <input
              name="requisitos"
              value={formData.requisitos}
              onChange={handleChange}
              placeholder="Ingresar requisitos"
              className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Cantidad tambores</label>
            <input
              name="cantidadTambores"
              value={formData.cantidadTambores}
              onChange={handleChange}
              placeholder="Ingresar cantidad de tambores"
              className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Observaciones</label>
            <textarea
              name="observaciones"
              value={formData.observaciones}
              onChange={handleChange}
              placeholder="Ingresar observaciones..."
              className="w-full px-3 py-2 rounded-md bg-gray-200 border-none h-24"
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label className="font-medium">Adjuntos</label>
            <div className="flex-grow flex items-end justify-end">
              <button type="button" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md mt-auto">
                Adjuntar archivos
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-6 rounded-full"
          >
            <span className="uppercase">Cargar</span>
            <br />
            <span className="uppercase">Remito</span>
          </button>
        </div>
      </form>
    </div>
  )
}
