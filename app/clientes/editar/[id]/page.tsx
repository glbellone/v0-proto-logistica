"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, X } from "lucide-react"

interface Contacto {
  nombre: string
  email: string
  telefono: string
}

export default function EditarCliente() {
  const router = useRouter()
  const params = useParams()
  const id = params.id

  const [formData, setFormData] = useState({
    razonSocial: "",
    direccion: "",
    cuitRuit: "",
    tipoEmpresa: "",
  })

  const [contactos, setContactos] = useState<Contacto[]>([])
  const [nuevoContacto, setNuevoContacto] = useState<Contacto>({
    nombre: "",
    email: "",
    telefono: "",
  })
  const [mostrarFormContacto, setMostrarFormContacto] = useState(false)

  useEffect(() => {
    // Aquí iría la lógica para cargar los datos del cliente
    // Simulamos datos de ejemplo
    setFormData({
      razonSocial: "Empresa A S.A.",
      direccion: "Av. Corrientes 1234, CABA",
      cuitRuit: "30-12345678-9",
      tipoEmpresa: "sa",
    })

    setContactos([
      {
        nombre: "Juan Pérez",
        email: "juan@empresaa.com",
        telefono: "11-1234-5678",
      },
    ])
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNuevoContacto((prev) => ({ ...prev, [name]: value }))
  }

  const agregarContacto = () => {
    if (nuevoContacto.nombre && nuevoContacto.email) {
      setContactos([...contactos, nuevoContacto])
      setNuevoContacto({ nombre: "", email: "", telefono: "" })
      setMostrarFormContacto(false)
    }
  }

  const eliminarContacto = (index: number) => {
    setContactos(contactos.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para actualizar el cliente
    console.log("Cliente actualizado:", { ...formData, contactos })
    router.push("/clientes")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">EDITAR CLIENTE</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="font-medium">Razón social</label>
          <Input
            name="razonSocial"
            value={formData.razonSocial}
            onChange={handleChange}
            placeholder="Ingresar razón social"
            className="bg-gray-200 border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Dirección</label>
          <Input
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Ingresar dirección"
            className="bg-gray-200 border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">CUIT/RUIT</label>
          <Input
            name="cuitRuit"
            value={formData.cuitRuit}
            onChange={handleChange}
            placeholder="Ingresar CUIT/RUIT"
            className="bg-gray-200 border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Tipo de empresa</label>
          <Select value={formData.tipoEmpresa} onValueChange={(value) => handleSelectChange(value, "tipoEmpresa")}>
            <SelectTrigger className="bg-gray-200 border-none">
              <SelectValue placeholder="Seleccionar tipo de empresa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sa">Sociedad Anónima</SelectItem>
              <SelectItem value="srl">S.R.L.</SelectItem>
              <SelectItem value="autonomo">Autónomo</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="font-medium">Agregar contacto</label>
            {!mostrarFormContacto && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={() => setMostrarFormContacto(true)}
              >
                <Plus size={16} /> Nuevo contacto
              </Button>
            )}
          </div>

          {/* Lista de contactos */}
          <div className="space-y-2">
            {contactos.map((contacto, index) => (
              <Card key={index} className="bg-gray-100">
                <CardContent className="p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{contacto.nombre}</p>
                    <p className="text-sm text-gray-600">
                      {contacto.email} | {contacto.telefono}
                    </p>
                  </div>
                  <Button type="button" variant="ghost" size="sm" onClick={() => eliminarContacto(index)}>
                    <X size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formulario para agregar contacto */}
          {mostrarFormContacto && (
            <Card className="bg-gray-200 border-none">
              <CardContent className="p-4 space-y-3">
                <div>
                  <label className="text-sm font-medium">Nombre</label>
                  <Input
                    name="nombre"
                    value={nuevoContacto.nombre}
                    onChange={handleContactoChange}
                    placeholder="Nombre del contacto"
                    className="bg-white mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Correo electrónico</label>
                  <Input
                    name="email"
                    type="email"
                    value={nuevoContacto.email}
                    onChange={handleContactoChange}
                    placeholder="Email del contacto"
                    className="bg-white mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Teléfono</label>
                  <Input
                    name="telefono"
                    value={nuevoContacto.telefono}
                    onChange={handleContactoChange}
                    placeholder="Teléfono del contacto"
                    className="bg-white mt-1"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <Button type="button" variant="outline" onClick={() => setMostrarFormContacto(false)}>
                    Cancelar
                  </Button>
                  <Button type="button" onClick={agregarContacto} className="bg-green-700 hover:bg-green-800">
                    Agregar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-6 rounded-full"
          >
            <span className="uppercase">Editar</span>
            <br />
            <span className="uppercase">Cliente</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
