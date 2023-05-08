import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../templates/sidebar";
import Header from "../../templates/header";
import RiwayatRalanPasien from "./ralan/RiwayatRalanPasien";
import RiwayatRanapPasien from "./ranap/RiwayatRanapPasien";
import RiwayatIgdPasien from "./igd/RiwayatIgdPasien";
import RiwayatPemeriksaanLabPasien from "./laboratorium/RiwayatPemeriksaanLabPasien";
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
  const [isRiwayatIgdPasien, setIsRiwayatIgdPasien] = useState(true);
  const [isRiwayatIgdPasienActive, setIsRiwayatIgdPasienActive] =
    useState(true);
  const [isRiwayatRalanPasien, setIsRiwayatRalanPasien] = useState(false);
  const [isRiwayatRalanPasienActive, setIsRiwayatRalanPasienActive] =
    useState(false);
  const [isRiwayatPemeriksaanLabPasien, setIsRiwayatPemeriksaanLabPasien] =
    useState(false);
  const [
    isRiwayatPemeriksaanLabPasienActive,
    setIsRiwayatPemeriksaanLabPasienActive,
  ] = useState(false);
  const [isRiwayatRanapPasien, setIsRiwayatRanapPasien] = useState(false);
  const [isRiwayatRanapPasienActive, setIsRiwayatRanapPasienActive] =
    useState(false);

  function getDetailDataPasien(id) {
    axios
      .get(`${API_URL}/rm/${id}`)
      .then((response) => {
        setDetailDataPasien(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getDetailDataPasien(id);
  }, [id]);

  function handleRiwayatRanapPasien() {
    setIsRiwayatRanapPasien(true);
    setIsRiwayatRanapPasienActive(true);
    setIsRiwayatIgdPasien(false);
    setIsRiwayatIgdPasienActive(false);
    setIsRiwayatPemeriksaanLabPasien(false);
    setIsRiwayatPemeriksaanLabPasienActive(false);
    setIsRiwayatRalanPasien(false);
    setIsRiwayatRalanPasienActive(false);
  }

  function handleRiwayatRalanPasien() {
    setIsRiwayatRalanPasien(true);
    setIsRiwayatRalanPasienActive(true);
    setIsRiwayatRanapPasien(false);
    setIsRiwayatRanapPasienActive(false);
    setIsRiwayatIgdPasien(false);
    setIsRiwayatIgdPasienActive(false);
    setIsRiwayatPemeriksaanLabPasien(false);
    setIsRiwayatPemeriksaanLabPasienActive(false);
  }

  function handleRiwayatIgdPasien() {
    setIsRiwayatIgdPasien(true);
    setIsRiwayatIgdPasienActive(true);
    setIsRiwayatRanapPasien(false);
    setIsRiwayatRanapPasienActive(false);
    setIsRiwayatPemeriksaanLabPasien(false);
    setIsRiwayatPemeriksaanLabPasienActive(false);
    setIsRiwayatRalanPasien(false);
    setIsRiwayatRalanPasienActive(false);
  }

  function handleRiwayatPemeriksaanLabPasien() {
    setIsRiwayatPemeriksaanLabPasien(true);
    setIsRiwayatPemeriksaanLabPasienActive(true);
    setIsRiwayatRanapPasien(false);
    setIsRiwayatRanapPasienActive(false);
    setIsRiwayatIgdPasien(false);
    setIsRiwayatIgdPasienActive(false);
    setIsRiwayatRalanPasien(false);
    setIsRiwayatRalanPasienActive(false);
  }
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
                      onClick={handleRiwayatIgdPasien}
                      className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                        isRiwayatIgdPasienActive ? "opacity-75" : ""
                      }`}
                      type="button"
                    >
                      IGD
                    </button>
                    <button
                      onClick={handleRiwayatRanapPasien}
                      className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                        isRiwayatRanapPasienActive ? "opacity-75" : ""
                      }`}
                      type="button"
                    >
                      RANAP
                    </button>
                    <button
                      onClick={handleRiwayatRalanPasien}
                      className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                        isRiwayatRalanPasienActive ? "opacity-75" : ""
                      }`}
                      type="button"
                    >
                      RALAN
                    </button>
                    <button
                      onClick={handleRiwayatPemeriksaanLabPasien}
                      className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                        isRiwayatPemeriksaanLabPasienActive ? "opacity-75" : ""
                      }`}
                      type="button"
                    >
                      LABORATORIUM
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="container w-1/4">
                  <div className="text-left px-1 bg-emerald300 font-semibold">
                    Detail Biodata Pasien
                  </div>
                  <div className="container border border-state-300  bg-white">
                    <div className="container">
                      <div className="p-2 text-left text:xs">
                        <tr>
                          <td>No Rekam Medis</td>
                          <td>:</td>
                          <td>{detailDataPasien.no_rm}</td>
                        </tr>
                        <tr>
                          <td>Nama Pasien</td>
                          <td>:</td>
                          <td>{detailDataPasien.nama_lengkap}</td>
                        </tr>
                        <tr>
                          <td>Identitas</td>
                          <td>:</td>
                          <td>
                            {detailDataPasien.kitas}/{detailDataPasien.no_kitas}
                          </td>
                        </tr>
                        <tr>
                          <td>TTL</td>
                          <td>:</td>
                          <td>
                            {detailDataPasien.tempat_lahir}/
                            {detailDataPasien.tanggal_lahir}
                          </td>
                        </tr>
                        <tr>
                          <td>Kelamin</td>
                          <td>:</td>
                          <td>{detailDataPasien.kelamin}</td>
                        </tr>
                        <tr>
                          <td>Kontak Pasien</td>
                          <td>:</td>
                          <td>{detailDataPasien.kontak_pasien}</td>
                        </tr>
                        <tr>
                          <td>Golongan Darah</td>
                          <td>:</td>
                          <td>{detailDataPasien.golongan_darah}</td>
                        </tr>
                        <tr>
                          <td>Agama</td>
                          <td>:</td>
                          <td>{detailDataPasien.agama}</td>
                        </tr>
                        <tr>
                          <td>Status Perkawinan</td>
                          <td>:</td>
                          <td>{detailDataPasien.status_kawin}</td>
                        </tr>
                        <tr>
                          <td>Pekerjaan</td>
                          <td>:</td>
                          <td>{detailDataPasien.pekerjaan}</td>
                        </tr>
                        <tr>
                          <td className="font-bold">Alamat Pasien</td>
                        </tr>
                        <tr>
                          <td>Alamat</td>
                          <td>:</td>
                          <td>{detailDataPasien.alamat_pasien_detail}</td>
                        </tr>
                        <tr>
                          <td>Provinsi</td>
                          <td>:</td>
                          <td>{detailDataPasien.alamat_pasien_provinsi}</td>
                        </tr>
                        <tr>
                          <td>Kab/Kota</td>
                          <td>:</td>
                          <td>{detailDataPasien.alamat_pasien_kota}</td>
                        </tr>
                        <tr>
                          <td>Kecamatan</td>
                          <td>:</td>
                          <td>{detailDataPasien.alamat_pasien_kec}</td>
                        </tr>
                        <tr>
                          <td>Desa</td>
                          <td>:</td>
                          <td>{detailDataPasien.alamat_pasien_desa}</td>
                        </tr>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container w-3/4">
                  {isRiwayatRalanPasien && <RiwayatRalanPasien />}
                  {isRiwayatIgdPasien && (
                    <RiwayatIgdPasien id={detailDataPasien.id} />
                  )}
                  {isRiwayatPemeriksaanLabPasien && (
                    <RiwayatPemeriksaanLabPasien />
                  )}
                  {isRiwayatRanapPasien && <RiwayatRanapPasien />}
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
