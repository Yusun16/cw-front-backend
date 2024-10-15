import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navegacion from "./plantilla/Navegacion";
import ListadoOrden from "./Orden Servicio/ListadoOrden";
import AgregarOrden from "./Orden Servicio/AgregarOrden";
import BuscarOrden from "./Orden Servicio/BuscarOrden";


function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
      <Route exact path="/" element={<ListadoOrden />} />
      <Route exact path="/AgregarOrden" element={<AgregarOrden />} />
      <Route exact path="/BuscarOrden" element={<BuscarOrden />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
