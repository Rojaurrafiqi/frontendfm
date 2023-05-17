import "./App.css";
import Rekammedis from "./pages/rekammedis/Rekammedis.js";
import Igd from "./pages/igd/Igd.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PenanganganIgd from "./pages/igd/penangangan";
import Form from "./pages/form/form";
import DetailDataRekamMedisPasien from "./pages/rekammedis/detail/DetailDataRekamMedisPasien";
import Ranap from "./pages/ranap/ranap";
import Ralan from "./pages/ralan/ralan";
import PenangananRanap from "./pages/ranap/penanganan/PenangananRanap";
import Kamar from "./pages/ranap/kamar/kamar";
import Jadwal from "./pages/ranap/jadwal/jadwal";
import Report from "./pages/ranap/report/report";
import Penjualan from "./pages/farmasi/penjualan/penjualan";
import Resep from "./pages/farmasi/resep/resep";
import Gudang from "./pages/farmasi/gudang/gudang";
import ReportFarmasi from "./pages/farmasi/report/report";
import DataObat from "./pages/farmasi/gudang/DataObat";
import StokObat from "./pages/farmasi/gudang/StokObat";

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
          <Route path="/igd/pasien/tangani/:id" element={<PenanganganIgd />} />
          <Route path="/form" element={<Form />} />
          <Route path="/ralan" element={<Ralan />} />
          {/* ranap */}
          <Route path="/ranap" element={<Ranap />} />
          <Route
            path="/ranap/pasien/penanganan/:id"
            element={<PenangananRanap />}
          />
          <Route path="/ranap/kamar" element={<Kamar />} />
          <Route path="/ranap/jadwal" element={<Jadwal />} />
          <Route path="/ranap/report" element={<Report />} />

          {/* farmasi */}
          <Route path="/farmasi/penjualan" element={<Penjualan />} />
          <Route path="/farmasi/resep" element={<Resep />} />
          <Route path="/farmasi/obat/data" element={<DataObat />} />
          <Route path="/farmasi/obat/stok" element={<StokObat />} />
          <Route path="/farmasi/report" element={<ReportFarmasi />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
