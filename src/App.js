import "./App.css";
import Rekammedis from "./pages/rekammedis/Rekammedis.js";
import Igd from "./pages/igd/Igd.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Penangangan from "./pages/igd/penangangan";
import Form from "./pages/form/form";
import DetailDataRekamMedisPasien from "./pages/rekammedis/detail/DetailDataRekamMedisPasien";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Rekammedis />} />
          <Route path="/pasien" element={<Rekammedis />} />
          <Route
            path="/pasien/detail/:id"
            element={<DetailDataRekamMedisPasien />}
          />
          <Route path="/igd" element={<Igd />} />
          <Route path="/igd/pasien/tangani/:id" element={<Penangangan />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
