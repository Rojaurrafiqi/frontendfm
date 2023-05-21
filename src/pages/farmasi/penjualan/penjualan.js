import React, { useState, useEffect } from "react";
import Sidebar from "../../templates/sidebar";
import Header from "../../templates/header";
import MenuFarmasi from "../component/MenuFarmasi";
import DataPenjualan from "./component/DataPenjualan";
import TambahPenjualan from "./component/TambahPenjualan";

const Penjualan = () => {
  const [pagePenjualan, setPagePenjualan] = useState(true);
  const [pagePenjualanSelected, setPagePenjualanSelected] = useState(true);
  const [pageTambahDataPenjualan, setPageTambahDataPenjualan] = useState(false);
  const [pageTambahDataPenjualanSelected, setPageTambahdataPenjualanSelected] =
    useState(false);

  const handlePagePenjualan = () => {
    setPagePenjualan(true);
    setPageTambahDataPenjualan(false);
    setPagePenjualanSelected(true);
    setPageTambahdataPenjualanSelected(false);
  };

  const handlePageTambahData = () => {
    setPageTambahDataPenjualan(true);
    setPagePenjualan(false);
    setPagePenjualanSelected(false);
    setPageTambahdataPenjualanSelected(true);
  };

  return (
    <div class="h-full">
      <div class="flex">
        <div class="flex-none">
          <Sidebar />
        </div>
        <div class="flex-auto bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
          <Header />
          <MenuFarmasi />

          <div class="container mx-auto 2xl:w-screen px-8 pb-10 ">
            <div className="container border border-state-300 p-2 mt-2 bg-white ">
              <div className="flex justify-end mb-4 ">
                <button
                  onClick={handlePagePenjualan}
                  className={`py-0.2 text-sm  px-1 mr-1   hover:bg-emerald300  ${
                    pagePenjualanSelected
                      ? `bg-emerald300 text-black `
                      : `bg-white border text-black `
                  }`}
                  type="button"
                >
                  DATA PENJUALAN
                </button>
                <button
                  onClick={handlePageTambahData}
                  className={`py-0.2 text-sm  px-1 mr-1   hover:bg-emerald300  ${
                    pageTambahDataPenjualanSelected
                      ? `bg-emerald300 text-black `
                      : `bg-white border text-black `
                  }`}
                  type="button"
                >
                  TAMBAH DATA
                </button>
              </div>

              <div>
                {pagePenjualan && <DataPenjualan />}
                {pageTambahDataPenjualan && <TambahPenjualan />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penjualan;
