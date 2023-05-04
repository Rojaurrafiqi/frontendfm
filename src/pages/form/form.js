import React, { useState } from "react";
import Sidebar from "../templates/sidebar";
import Header from "../templates/header";
import { useNavigate, useParams } from "react-router-dom";
import ResumeMedis from "../../form_library/resumeMedis";
import PengantarRawat from "../../form_library/pengantarRawat";
import SkriningDariLuarRs from "../../form_library/skriningDariLuarRs";
import ObservasiPasien from "../../form_library/observasiPasien";
import RekonsiliasiObat from "../../form_library/rekonsiliasiObat";
import PengkajianAwalMedisPasienRawatInap from "../../form_library/pengkajianAwalMedisPasienRawatInap";
import RencanaPemulanganPasien from "../../form_library/rencanaPemulanganPasien";
import handleForm from "../../component/form_default/handleForm";
import axios from "axios";
import { API_URL } from "../../config";
import { CSSTransition } from "react-transition-group";

const Form = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [result, setResult] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleClick = (event) => {
    // tangkap value dari ul
    const value = event.currentTarget.getAttribute("value");
    // kirim value ke component handle form
    setResult(handleForm(value));
  };

  const handleSentFormIGD = (resultValue) => {
    // menangkap result value
    const value = resultValue.type.name;

    // mengirim data ke BA setdefault form IGD
    axios
      .patch(`${API_URL}/form/default/igd`, {
        nama_form: value,
      })
      .then((response) => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div class="h-full">
      <div class="flex">
        <div class="flex-none">
          <Sidebar />
        </div>

        <div class="flex-auto bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
          <Header />

          <div className="flex justify-between my-3 mx-4">
            <button
              className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
              type="button"
              onClick={handleBack}
            >
              KEMBALI
            </button>
            <button
              onClick={() => handleSentFormIGD(result)}
              className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
              type="button"
            >
              SEND TO IGD
            </button>
          </div>

          <div className="container flex justify-end">
            {success && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 px-2 py-1 mx-4">
                <p className="font-bold">Success! sent to IGD</p>
              </div>
            )}
          </div>

          <div class="flex">
            <div className="container bg-white m-4 w-1/4">
              <div className="font-bold text-left px-2 py-2">All Form</div>
              <div className="text-left space-y-2">
                <ul className="px-2 pb-2 text-sm">
                  <li>
                    <button onClick={handleClick} value="ResumeMedis">
                      Resume Medis
                    </button>
                  </li>
                  <li>
                    <button onClick={handleClick} value="PengantarRawat">
                      Pengantar Rawat
                    </button>
                  </li>
                  <li>
                    <button onClick={handleClick} value="SkriningDariLuarRs">
                      Skrining Dari Luar RS
                    </button>
                  </li>
                  <li>
                    <button onClick={handleClick} value="ObservasiPasien">
                      Rekonsiliasi Obat
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleClick}
                      value="PengkajianAwalMedisPasienRawatInap"
                    >
                      Pengkajian Awal Medis Pasien Rawat Inap
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleClick}
                      value="RencanaPemulanganPasien"
                    >
                      Rencana Pemulangan Pasien
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container bg-white m-4 w-3/4">
              {/* <ResumeMedis /> */}
              {/* <PengantarRawat /> */}
              {/* <SkriningDariLuarRS /> */}
              {/* <ObservasiPasien /> */}
              {/* <RekonsiliasiObat /> */}
              {/* <PengkajianAwalMedisPasienRawatInap /> */}
              {/* <RencanaPemulanganPasien /> */}

              {result && result}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
