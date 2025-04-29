"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Plus, X } from "lucide-react"

interface Contacto {
  nombre: string
  email: string
  telefono: string
}

export default function EditarCliente() {
  const navigate = useNavigate()
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
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
    navigate("/clientes")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">EDITAR CLIENTE</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="font-medium">Razón social</label>
          <input
            name="razonSocial"
            value={formData.razonSocial}
            onChange={handleChange}
            placeholder="Ingresar razón social"
            className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Dirección</label>
          <input
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Ingresar dirección"
            className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">CUIT/RUIT</label>
          <input
            name="cuitRuit"
            value={formData.cuitRuit}
            onChange={handleChange}
            placeholder="Ingresar CUIT/RUIT"
            className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Tipo de empresa</label>
          <select
            name="tipoEmpresa"
            value={formData.tipoEmpresa}
            onChange={handleSelectChange}
            className="w-full px-3 py-2 rounded-md bg-gray-200 border-none"
          >
            <option value="" disabled>
              Seleccionar tipo de empresa
            </option>
            <option value="sa">Sociedad Anónima</option>
            <option value="srl">S.R.L.</option>
            <option value="autonomo">Autónomo</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="font-medium">Agregar contacto</label>
            {!mostrarFormContacto && (
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 rounded-md"
                onClick={() => setMostrarFormContacto(true)}
              >
                <Plus size={16} /> Nuevo contacto
              </button>
            )}
          </div>

          {/* Lista de contactos */}
          <div className="space-y-2">
            {contactos.map((contacto, index) => (
              <div key={index} className="bg-gray-100 rounded-lg border p-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">{contacto.nombre}</p>
                  <p className="text-sm text-gray-600">
                    {contacto.email} | {contacto.telefono}
                  </p>
                </div>
                <button type="button" className="p-1" onClick={() => eliminarContacto(index)}>
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Formulario para agregar contacto */}
          {mostrarFormContacto && (
            <div className="bg-gray-200 border-none rounded-lg p-4 space-y-3">
              <div>
                <label className="text-sm font-medium">Nombre</label>
                <input
                  name="nombre"
                  value={nuevoContacto.nombre}
                  onChange={handleContactoChange}
                  placeholder="Nombre del contacto"
                  className="w-full px-3 py-2 rounded-md bg-white mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Correo electrónico</label>
                <input
                  name="email"
                  type="email"
                  value={nuevoContacto.email}
                  onChange={handleContactoChange}
                  placeholder="Email del contacto"
                  className="w-full px-3 py-2 rounded-md bg-white mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Teléfono</label>
                <input
                  name="telefono"
                  value={nuevoContacto.telefono}
                  onChange={handleContactoChange}
                  placeholder="Teléfono del contacto"
                  className="w-full px-3 py-2 rounded-md bg-white mt-1"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  className="px-3 py-1 border border-gray-300 rounded-md"
                  onClick={() => setMostrarFormContacto(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded-md"
                  onClick={agregarContacto}
                >
                  Agregar
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-6 rounded-full"
          >
            <span className="uppercase">Editar</span>
            <br />
            <span className="uppercase">Cliente</span>
          </button>
        </div>
      </form>
    </div>
  )
}
