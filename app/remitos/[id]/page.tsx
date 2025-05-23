"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

type EstadoRemito =
  | "Autorizado"
  | "En preparación"
  | "En carga"
  | "En camino"
  | "Entregado"
  | "No entregado"
  | "Retenido"

interface Mercaderia {
  id: number
  descripcion: string
  cantidad: number
  preparada: boolean
}

interface DatosRemito {
  numero: string
  cliente: string
  destino: string
  fecha: string
  peso: string
  volumen: string
  valor: string
  observaciones: string
}

export default function DetalleRemito() {
  const router = useRouter()
  const params = useParams()
  const id = params.id

  const [estado, setEstado] = useState<EstadoRemito>("Autorizado")
  const [estadoAnterior, setEstadoAnterior] = useState<EstadoRemito | null>(null)
  const [mercaderias, setMercaderias] = useState<Mercaderia[]>([])
  const [datosRemito, setDatosRemito] = useState<DatosRemito | null>(null)
  const [razonNoEntrega, setRazonNoEntrega] = useState("")
  const [dialogNoEntregaAbierto, setDialogNoEntregaAbierto] = useState(false)

  useEffect(() => {
    // Simulamos la carga de datos del remito
    setDatosRemito({
      numero: "213123",
      cliente: "Cliente A",
      destino: "Buenos Aires, Argentina",
      fecha: "15/04/2023",
      peso: "1500 kg",
      volumen: "3.5 m³",
      valor: "$25,000",
      observaciones: "Entrega urgente",
    })

    // Simulamos la carga de mercaderías
    setMercaderias([
      { id: 1, descripcion: "Caja de herramientas", cantidad: 5, preparada: false },
      { id: 2, descripcion: "Repuestos de motor", cantidad: 10, preparada: false },
      { id: 3, descripcion: "Materiales de construcción", cantidad: 20, preparada: false },
      { id: 4, descripcion: "Equipos electrónicos", cantidad: 8, preparada: false },
      { id: 5, descripcion: "Muebles de oficina", cantidad: 3, preparada: false },
    ])
  }, [id])

  const handlePreparar = () => {
    setEstado("En preparación")
  }

  const handleTerminarPreparacion = () => {
    setEstado("En carga")
  }

  const handleAsignarViaje = () => {
    setEstado("En camino")
  }

  const handleEntregado = () => {
    setEstado("Entregado")
  }

  const handleNoEntregado = () => {
    setDialogNoEntregaAbierto(true)
  }

  const confirmarNoEntregado = () => {
    setEstado("No entregado")
    setDialogNoEntregaAbierto(false)
  }

  const handleRetener = () => {
    setEstadoAnterior(estado)
    setEstado("Retenido")
  }

  const handleLiberar = () => {
    if (estadoAnterior) {
      setEstado(estadoAnterior)
      setEstadoAnterior(null)
    }
  }

  const toggleMercaderiaPreparada = (id: number) => {
    setMercaderias(mercaderias.map((item) => (item.id === id ? { ...item, preparada: !item.preparada } : item)))
  }

  const todasMercaderiasPreparadas = () => {
    return mercaderias.every((item) => item.preparada)
  }

  const renderBotonPrincipal = () => {
    switch (estado) {
      case "Autorizado":
        return (
          <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 rounded-md" onClick={handlePreparar}>
            PREPARAR
          </Button>
        )
      case "En preparación":
        return (
          <Button
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 rounded-md"
            onClick={handleTerminarPreparacion}
            disabled={!todasMercaderiasPreparadas()}
          >
            TERMINAR PREPA
          </Button>
        )
      case "En carga":
        return (
          <Button
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 rounded-md"
            onClick={handleAsignarViaje}
          >
            ASIGNAR VIAJE
          </Button>
        )
      case "En camino":
        return (
          <div className="flex gap-4">
            <Button
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 rounded-md"
              onClick={handleEntregado}
            >
              ENTREGADO
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-md" onClick={handleNoEntregado}>
              NO ENTREGADO
            </Button>
          </div>
        )
      case "Retenido":
        return (
          <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 rounded-md" onClick={handleLiberar}>
            LIBERAR
          </Button>
        )
      default:
        return null
    }
  }

  const renderBotonRetener = () => {
    if (estado !== "Retenido" && estado !== "Entregado" && estado !== "No entregado") {
      return (
        <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-2 rounded-md" onClick={handleRetener}>
          RETENER
        </Button>
      )
    }
    return null
  }

  if (!datosRemito) {
    return <div>Cargando...</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Remito N° {datosRemito.numero}</h1>
        <div className="px-4 py-2 bg-green-700 text-white rounded-md">{estado}</div>
      </div>

      {/* Sección superior - Datos del remito */}
      <div className="bg-gray-200 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="bg-white rounded-md p-3 mb-3">
              <p className="font-medium">Cliente: {datosRemito.cliente}</p>
            </div>
            <div className="bg-white rounded-md p-3 mb-3">
              <p className="font-medium">Destino: {datosRemito.destino}</p>
            </div>
            <div className="bg-white rounded-md p-3 mb-3">
              <p className="font-medium">Fecha: {datosRemito.fecha}</p>
            </div>
            <div className="bg-white rounded-md p-3 mb-3">
              <p className="font-medium">Peso: {datosRemito.peso}</p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-md p-3 mb-3">
              <p className="font-medium">Volumen: {datosRemito.volumen}</p>
            </div>
            <div className="bg-white rounded-md p-3 mb-3">
              <p className="font-medium">Valor: {datosRemito.valor}</p>
            </div>
            <div className="bg-white rounded-md p-3 h-[100px] overflow-auto">
              <p className="font-medium">Observaciones: {datosRemito.observaciones}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">{estado === "Autorizado" && renderBotonPrincipal()}</div>
      </div>

      {/* Sección inferior - Mercadería */}
      <div className="bg-gray-200 rounded-lg p-6">
        {mercaderias.map((item) => (
          <div key={item.id} className="bg-white rounded-md p-4 mb-3 flex justify-between items-center">
            <div>
              <p className="font-medium">{item.descripcion}</p>
              <p className="text-gray-600">Cantidad: {item.cantidad}</p>
            </div>
            {estado === "En preparación" && (
              <div className="flex items-center">
                <Checkbox
                  id={`mercaderia-${item.id}`}
                  checked={item.preparada}
                  onCheckedChange={() => toggleMercaderiaPreparada(item.id)}
                  className="mr-2 h-5 w-5"
                />
                <label htmlFor={`mercaderia-${item.id}`} className="text-sm font-medium">
                  Preparada
                </label>
              </div>
            )}
          </div>
        ))}

        <div className="flex justify-center mt-6 gap-4">
          {estado !== "Autorizado" && renderBotonPrincipal()}
          {renderBotonRetener()}
        </div>
      </div>

      {/* Dialog para No Entregado */}
      <Dialog open={dialogNoEntregaAbierto} onOpenChange={setDialogNoEntregaAbierto}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Razón de no entrega</DialogTitle>
          </DialogHeader>
          <Textarea
            value={razonNoEntrega}
            onChange={(e) => setRazonNoEntrega(e.target.value)}
            placeholder="Ingrese la razón por la que no se pudo entregar el remito"
            className="min-h-[100px]"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogNoEntregaAbierto(false)}>
              Cancelar
            </Button>
            <Button
              className="bg-green-700 hover:bg-green-800"
              onClick={confirmarNoEntregado}
              disabled={!razonNoEntrega.trim()}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
