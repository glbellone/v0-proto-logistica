import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Remitos from "./pages/remitos/Remitos"
import NuevoRemito from "./pages/remitos/NuevoRemito"
import EditarRemito from "./pages/remitos/EditarRemito"
import Clientes from "./pages/clientes/Clientes"
import NuevoCliente from "./pages/clientes/NuevoCliente"
import EditarCliente from "./pages/clientes/EditarCliente"
import Destinos from "./pages/destinos/Destinos"
import NuevoDestino from "./pages/destinos/NuevoDestino"
import EditarDestino from "./pages/destinos/EditarDestino"
import Reportes from "./pages/reportes/Reportes"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="remitos">
          <Route index element={<Remitos />} />
          <Route path="nuevo" element={<NuevoRemito />} />
          <Route path="editar/:id" element={<EditarRemito />} />
        </Route>
        <Route path="clientes">
          <Route index element={<Clientes />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar/:id" element={<EditarCliente />} />
        </Route>
        <Route path="destinos">
          <Route index element={<Destinos />} />
          <Route path="nuevo" element={<NuevoDestino />} />
          <Route path="editar/:id" element={<EditarDestino />} />
        </Route>
        <Route path="reportes" element={<Reportes />} />
      </Route>
    </Routes>
  )
}

export default App
