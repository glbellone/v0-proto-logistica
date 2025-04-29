"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EditarRemito() {
  const router = useRouter()
  const params = useParams()
  const id = params.id

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

  useEffect(() => {
    // Aquí iría la lógica para cargar los datos del remito
    // Simulamos datos de ejemplo
    setFormData({
      numero: "R-00123",
      cliente: "cliente1",
      destino: "destino1",
      peso: "1500",
      volumen: "3.5",
      valor: "25000",
      tipo: "categoria1",
      requisitos: "Manipular con cuidado",
      observaciones: "Entrega urgente",
      cantidadPallets: "4",
      cantidadBultos: "12",
      cantidadRacks: "2",
      cantidadBobinas: "0",
      cantidadTambores: "0",
    })
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para actualizar el remito
    console.log("Remito actualizado:", formData)
    router.push("/remitos")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Editar Remito</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="font-medium">Numero de remito</label>
          <Input
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            placeholder="Ingresar número de remito"
            className="bg-gray-200 border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Cliente</label>
          <div className="flex gap-2">
            <Select value={formData.cliente} onValueChange={(value) => handleSelectChange(value, "cliente")}>
              <SelectTrigger className="bg-gray-200 border-none flex-1">
                <SelectValue placeholder="Seleccionar cliente" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cliente1">Cliente 1</SelectItem>
                <SelectItem value="cliente2">Cliente 2</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-green-700 hover:bg-green-800">Crear</Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-medium">Destino</label>
          <div className="flex gap-2">
            <Select value={formData.destino} onValueChange={(value) => handleSelectChange(value, "destino")}>
              <SelectTrigger className="bg-gray-200 border-none flex-1">
                <SelectValue placeholder="Seleccionar destino" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="destino1">Destino 1</SelectItem>
                <SelectItem value="destino2">Destino 2</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-green-700 hover:bg-green-800">Crear</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Peso total</label>
            <Input
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              placeholder="Ingresar peso total en kilogramos"
              className="bg-gray-200 border-none"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Cantidad pallets</label>
            <Input
              name="cantidadPallets"
              value={formData.cantidadPallets}
              onChange={handleChange}
              placeholder="Ingresar cantidad de pallets"
              className="bg-gray-200 border-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Volumen en metros cúbicos</label>
            <Input
              name="volumen"
              value={formData.volumen}
              onChange={handleChange}
              placeholder="Ingresar volumen en metros cúbicos"
              className="bg-gray-200 border-none"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Cantidad bultos</label>
            <Input
              name="cantidadBultos"
              value={formData.cantidadBultos}
              onChange={handleChange}
              placeholder="Ingresar cantidad de bultos"
              className="bg-gray-200 border-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Valor declarado</label>
            <Input
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              placeholder="Ingresar valor declarado"
              className="bg-gray-200 border-none"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Cantidad racks</label>
            <Input
              name="cantidadRacks"
              value={formData.cantidadRacks}
              onChange={handleChange}
              placeholder="Ingresar cantidad de racks"
              className="bg-gray-200 border-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Tipo de mercadería</label>
            <Select value={formData.tipo} onValueChange={(value) => handleSelectChange(value, "tipo")}>
              <SelectTrigger className="bg-gray-200 border-none">
                <SelectValue placeholder="Seleccionar categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="categoria1">Categoría 1</SelectItem>
                <SelectItem value="categoria2">Categoría 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="font-medium">Cantidad bobinas</label>
            <Input
              name="cantidadBobinas"
              value={formData.cantidadBobinas}
              onChange={handleChange}
              placeholder="Ingresar cantidad de bobinas"
              className="bg-gray-200 border-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Requisitos de manipulación</label>
            <Input
              name="requisitos"
              value={formData.requisitos}
              onChange={handleChange}
              placeholder="Ingresar requisitos"
              className="bg-gray-200 border-none"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Cantidad tambores</label>
            <Input
              name="cantidadTambores"
              value={formData.cantidadTambores}
              onChange={handleChange}
              placeholder="Ingresar cantidad de bobinas"
              className="bg-gray-200 border-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-medium">Observaciones</label>
            <Textarea
              name="observaciones"
              value={formData.observaciones}
              onChange={handleChange}
              placeholder="Ingresar observaciones..."
              className="bg-gray-200 border-none h-24"
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label className="font-medium">Adjuntos</label>
            <div className="flex-grow flex items-end justify-end">
              <Button className="bg-green-700 hover:bg-green-800 mt-auto">Adjuntar archivos</Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-6 rounded-full"
          >
            <span className="uppercase">Editar</span>
            <br />
            <span className="uppercase">Remito</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
