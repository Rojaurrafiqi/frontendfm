import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../templates/sidebar";
import Header from "../../templates/header";
import axios from "axios";
import { API_URL } from "../../../config";

const DetailDataRekamMedisPasien = () => {
  // mengambil link sebelumnya
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { id } = useParams();

  const [detailDataPasien, setDetailDataPasien] = useState({});

  function getDetailDataPasien(id) {
    axios
      .get(`${API_URL}/rm/${id}`)
      .then((response) => {
        console.log(response);
        setDetailDataPasien(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getDetailDataPasien(id);
  }, [id]);

  return (
    <div>
      <div class="h-full">
        <div class="flex ...">
          <div class="flex-none">
            <Sidebar />
          </div>

          <div class="flex-auto bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
            <Header />
            <div class="container mx-auto 2xl:w-screen px-8 py-4">
              <div className="flex justify-between my-3">
                <button
                  className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                  type="button"
                  onClick={handleBack}
                >
                  KEMBALI
                </button>
                <div className="table-button">
                  <div className="flex">
                    <button
                      className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                      type="button"
                    >
                      IGD
                    </button>
                    <button
                      className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                      type="button"
                    >
                      RANAP
                    </button>
                    <button
                      className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                      type="button"
                    >
                      RALAN
                    </button>
                    <button
                      className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                      type="button"
                    >
                      LABORATORIUM
                    </button>
                    {/* <button
                      onClick={handlePageForm}
                      className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                        isPageFormActive ? "opacity-75" : ""
                      }`}
                      type="button"
                    >
                      Form
                    </button>
                    <button
                      onClick={handleTableIGD}
                      className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                        isPageTableIGDActive ? "opacity-75" : ""
                      }`}
                      type="button"
                    >
                      Table Default IGD
                    </button>
                    <button
                      onClick={handleTableRanap}
                      className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                        isPageTableRanapActive ? "opacity-75" : ""
                      }`}
                      type="button"
                    >
                      Table Default Ranap
                    </button>
                    <button
                      onClick={handleTableRalan}
                      className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                        isPageTableRalanActive ? "opacity-75" : ""
                      }`}
                      type="button"
                    >
                      Table Default Ralan
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="container w-1/4">
                  <div className="text-left px-1 bg-emerald300 font-semibold">
                    Detail Biodata Pasien
                  </div>
                  <div className="container border border-state-300  bg-white p-5">
                    <div className="container border border-black  mr-5 p-2 text-left">
                      <p>{detailDataPasien.nama_lengkap}</p>
                    </div>
                  </div>
                </div>
                <div className="container w-3/4">
                  <div className="text-left px-1 bg-emerald300 font-semibold">
                    Riyawat IGD Pasien
                  </div>
                  <div className="container border border-state-300  bg-white p-5">
                    {/* disini table */}
                    {/* disini bikin table untuk kolom no, tanggal masuk, tanggal keluar, jenis pembayaran, action detail dan delete */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDataRekamMedisPasien;
