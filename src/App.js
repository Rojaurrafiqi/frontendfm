import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingAnimation from "./component/loading/LoadingAnimation";

// import "./App.css";
// import Rekammedis from "./pages/rekammedis/Rekammedis.js";
// import Igd from "./pages/igd/Igd.js";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PenanganganIgd from "./pages/igd/penangangan";
// import Form from "./pages/form/form";
// import DetailDataRekamMedisPasien from "./pages/rekammedis/detail/DetailDataRekamMedisPasien";
// import Ranap from "./pages/ranap/ranap";
// import Ralan from "./pages/ralan/ralan";
// import PenangananRanap from "./pages/ranap/penanganan/PenangananRanap";
// import Kamar from "./pages/ranap/kamar/kamar";
// import Jadwal from "./pages/ranap/jadwal/jadwal";
// import Report from "./pages/ranap/report/report";
// import Penjualan from "./pages/farmasi/penjualan/penjualan";
// import Resep from "./pages/farmasi/resep/resep";
// import Gudang from "./pages/farmasi/gudang/gudang";
// import ReportFarmasi from "./pages/farmasi/report/report";
// import DataObat from "./pages/farmasi/gudang/DataObat";
// import StokObat from "./pages/farmasi/gudang/StokObat";
// import User from "./pages/user/user";
// import UserDetail from "./pages/user/UserDetail";
// import JadwalPraktek from "./pages/ralan/jadwal/JadwalPraktek";

const Rekammedis = lazy(() => import("./pages/rekammedis/Rekammedis"));
const Igd = lazy(() => import("./pages/igd/Igd"));
const PenanganganIgd = lazy(() => import("./pages/igd/penangangan"));
const Form = lazy(() => import("./pages/form/form"));
const DetailDataRekamMedisPasien = lazy(() =>
  import("./pages/rekammedis/detail/DetailDataRekamMedisPasien")
);
const Ranap = lazy(() => import("./pages/ranap/ranap"));
const Ralan = lazy(() => import("./pages/ralan/ralan"));
const PenangananRanap = lazy(() =>
  import("./pages/ranap/penanganan/PenangananRanap")
);
const Kamar = lazy(() => import("./pages/ranap/kamar/kamar"));
const Jadwal = lazy(() => import("./pages/ranap/jadwal/jadwal"));
const Report = lazy(() => import("./pages/ranap/report/report"));
const Penjualan = lazy(() => import("./pages/farmasi/penjualan/penjualan"));
const Resep = lazy(() => import("./pages/farmasi/resep/resep"));
const DataObat = lazy(() => import("./pages/farmasi/gudang/DataObat"));
const StokObat = lazy(() => import("./pages/farmasi/gudang/StokObat"));
const ReportFarmasi = lazy(() => import("./pages/farmasi/report/report"));
const User = lazy(() => import("./pages/user/user"));
const UserDetail = lazy(() => import("./pages/user/UserDetail"));
const JadwalPraktek = lazy(() => import("./pages/ralan/jadwal/JadwalPraktek"));

function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Rekammedis />} />
    //       <Route path="/pasien" element={<Rekammedis />} />
    //       <Route
    //         path="/pasien/detail/:id"
    //         element={<DetailDataRekamMedisPasien />}
    //       />
    //       <Route path="/igd" element={<Igd />} />
    //       <Route path="/igd/pasien/tangani/:id" element={<PenanganganIgd />} />
    //       <Route path="/form" element={<Form />} />
    //       {/* ranap */}
    //       <Route path="/ranap" element={<Ranap />} />
    //       <Route
    //         path="/ranap/pasien/penanganan/:id"
    //         element={<PenangananRanap />}
    //       />
    //       <Route path="/ranap/kamar" element={<Kamar />} />
    //       <Route path="/ranap/jadwal" element={<Jadwal />} />
    //       <Route path="/ranap/report" element={<Report />} />

    //       {/* farmasi */}
    //       <Route path="/farmasi/penjualan" element={<Penjualan />} />
    //       <Route path="/farmasi/resep" element={<Resep />} />
    //       <Route path="/farmasi/obat/data" element={<DataObat />} />
    //       <Route path="/farmasi/obat/stok" element={<StokObat />} />
    //       <Route path="/farmasi/report" element={<ReportFarmasi />} />

    //       {/* user */}
    //       <Route path="/user" element={<User />} />
    //       <Route path="/user/detail/:id" element={<UserDetail />} />

    //       {/* ralan */}
    //       <Route path="/ralan" element={<Ralan />} />
    //       <Route path="/ralan/poli/jadwal" element={<JadwalPraktek />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<LoadingAnimation />}>
          <Routes>
            <Route path="/" element={<Rekammedis />} />
            <Route path="/pasien" element={<Rekammedis />} />
            <Route
              path="/pasien/detail/:id"
              element={<DetailDataRekamMedisPasien />}
            />
            <Route path="/igd" element={<Igd />} />
            <Route
              path="/igd/pasien/tangani/:id"
              element={<PenanganganIgd />}
            />
            <Route path="/form" element={<Form />} />
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

            {/* user */}
            <Route path="/user" element={<User />} />
            <Route path="/user/detail/:id" element={<UserDetail />} />

            {/* ralan */}
            <Route path="/ralan" element={<Ralan />} />
            <Route path="/ralan/poli/jadwal" element={<JadwalPraktek />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
