import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../templates/sidebar";
import Header from "../../templates/header";
import Form_igd from "../../../component/form_igd/form_igd";
import FormDefaultRanap from "./FormDefaultRanap";

const PenangananRanap = () => {
  // mengambil link sebelumnya
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { id } = useParams();

  const [pasienRanapById, setPasienRanapById] = useState([]);

  function fetchPasienRanapById(id) {
    axios
      .get(`${API_URL}/ranap/pasien/${id}`)
      .then((response) => {
        setPasienRanapById(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchPasienRanapById(id);
  }, [id]);

  function handleCheckout() {
    axios
      .patch(`${API_URL}/igd/pasien/status/${id}`, {
        status: "selesai",
      })
      .then((response) => {
        window.location.href = "/igd";
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <div class="h-full">
        <div class="flex">
          <div class="flex-none">
            <Sidebar />
          </div>

          <div class="flex-auto  bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
            <Header />

            <div class="container mx-auto px-8 py-auto">
              <div className="flex justify-between my-3">
                <button
                  className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                  type="button"
                  onClick={handleBack}
                >
                  KEMBALI
                </button>
                <button
                  onClick={handleCheckout}
                  className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                  type="button"
                >
                  CHACKOUT
                </button>
              </div>

              <div className="container border border-state-300  bg-white p-2">
                <div className="container border text-sm border-black  mr-5 p-2 text-left">
                  <div className="flex">
                    <div className="container">
                      <tr>
                        <td>No RM Pasien</td>
                        <td className="px-2">:</td>
                        <td>{pasienRanapById.pasien_rm?.no_rm}</td>
                      </tr>
                      <tr>
                        <td>Nama</td>
                        <td className="px-2">:</td>
                        <td>{pasienRanapById.pasien_rm?.nama_lengkap}</td>
                      </tr>

                      <tr>
                        <td>Asal</td>
                        <td className="px-2">:</td>
                        <td>
                          {pasienRanapById.pasien_rm?.alamat_pasien_provinsi}
                        </td>
                      </tr>
                      <tr>
                        <td>Alamat</td>
                        <td className="px-2">:</td>
                        <td>
                          {pasienRanapById.pasien_rm?.alamat_pasien_detail}
                        </td>
                      </tr>
                      <tr>
                        <td>HP</td>
                        <td className="px-2">:</td>
                        <td>{pasienRanapById.pasien_rm?.kontak_pasien}</td>
                      </tr>
                      <tr>
                        <td>Agama</td>
                        <td className="px-2">:</td>
                        <td>{pasienRanapById.pasien_rm?.agama}</td>
                      </tr>
                    </div>
                    <div className="container">
                      <tr>
                        <td>Tanggal Masuk</td>
                        <td className="px-2">:</td>
                        <td>{pasienRanapById.tanggal_masuk}</td>
                      </tr>
                      <tr>
                        <td>No Kamar</td>
                        <td className="px-2">:</td>
                        <td>{pasienRanapById.no_kamar}</td>
                      </tr>
                      <tr>
                        <td>Dokter</td>
                        <td className="px-2">:</td>
                        <td>{pasienRanapById.dokter}</td>
                      </tr>
                      <tr>
                        <td>Perawat</td>
                        <td className="px-2">:</td>
                        <td>{pasienRanapById.perawat}</td>
                      </tr>
                    </div>
                    <div className="container">
                      <p hidden>.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container mx-auto overflow-x-hidden  ">
                <div className="container">
                  <FormDefaultRanap id={pasienRanapById.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenangananRanap;
