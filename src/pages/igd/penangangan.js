import React, { useState, useEffect } from "react";
import { API_URL } from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Triase from "./triase/triase";
import AsasmenAwal from "./asasmenawal";
import Sidebar from "../templates/sidebar";
import Header from "../templates/header";
import Form_igd from "../../component/form_igd/form_igd";

const Penangangan = (props) => {
  // mengambil link sebelumnya
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  // const navigate = useNavigate();
  const { id } = useParams();
  const [pasienigdbyid, setPasienIgdById] = useState({});

  const [isTriaseShown, setIsTriaseShown] = useState(true);
  const [isTriaseSelected, setIsTriaseSelected] = useState(true);

  const [isAsasmenAwalShown, setisAsasmenAwalShown] = useState(false);
  const [isAsasmenAwalSelected, setIsAsasmenAwalSelected] = useState(false);

  function fetchPasienData(id) {
    axios
      .get(`${API_URL}/igd/pasien/${id}`)
      .then((response) => {
        setPasienIgdById(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchPasienData(id);
  }, [id]);

  const handleTriase = () => {
    setIsTriaseShown(true);
    setIsTriaseSelected(true);
    setisAsasmenAwalShown(false);
    setIsAsasmenAwalSelected(false);
  };

  const handleAsasmenAwal = () => {
    setisAsasmenAwalShown(true);
    setIsAsasmenAwalSelected(true);
    setIsTriaseShown(false);
    setIsTriaseSelected(false);
  };

  return (
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
                className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
              >
                CHACKOUT
              </button>
            </div>

            <div className="container border border-state-300  bg-white p-5">
              <div className="container border border-black  mr-5 p-2 text-left">
                <tr>
                  <td>No RM Pasien</td>
                  <td className="px-2">:</td>
                  <td>{pasienigdbyid.pasien_rm?.no_rm}</td>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td className="px-2">:</td>
                  <td>{pasienigdbyid.pasien_rm?.nama_lengkap}</td>
                </tr>
                <tr>
                  <td>Tanggal Kunjungan</td>
                  <td className="px-2">:</td>
                  <td>{pasienigdbyid.tgl_masuk}</td>
                </tr>
                <tr>
                  <td>Jam Kunjungan</td>
                  <td className="px-2">:</td>
                  <td>{pasienigdbyid.jam_masuk}</td>
                </tr>
                <tr>
                  <td>Asal</td>
                  <td className="px-2">:</td>
                  <td>{pasienigdbyid.pasien_rm?.alamat_pasien_provinsi}</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td className="px-2">:</td>
                  <td>{pasienigdbyid.pasien_rm?.alamat_pasien_detail}</td>
                </tr>
                <tr>
                  <td>HP</td>
                  <td className="px-2">:</td>
                  <td>{pasienigdbyid.pasien_rm?.kontak_pasien}</td>
                </tr>
                <tr>
                  <td>Agama</td>
                  <td className="px-2">:</td>
                  <td>{pasienigdbyid.pasien_rm?.agama}</td>
                </tr>
              </div>
            </div>

            <div className="flex my-4">
              <button
                onClick={handleTriase}
                className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                  isTriaseSelected ? "opacity-75" : ""
                }`}
                type="button"
              >
                TRIASE
              </button>

              <button
                onClick={handleAsasmenAwal}
                className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                  isAsasmenAwalSelected ? "opacity-75" : ""
                }`}
                type="button"
              >
                ASASMEN AWAL
              </button>
              <button
                className="ml-1 py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
              >
                ASASMEN PERAWAT
              </button>
              <button
                className="ml-1 py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
              >
                TIDAKAN
              </button>
              <button
                className="ml-1 py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
              >
                DPJP
              </button>
              <button
                className="ml-1 py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
              >
                OBAT
              </button>
              <button
                className="ml-1 py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
              >
                KONSUL SPESIALIS
              </button>
            </div>

            <div class="container mx-auto overflow-x-hidden ">
              <div className="container">
                {/* {isTriaseShown && <Triase id={pasienigdbyid.id} />} */}
                {/* form triase diganti sementara untuk percobaan */}
                {isTriaseShown && <Form_igd id={pasienigdbyid.id} />}
                {isAsasmenAwalShown && <AsasmenAwal id={pasienigdbyid.id} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penangangan;
