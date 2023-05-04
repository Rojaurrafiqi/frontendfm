import React from "react";
import Sidebar from "../templates/sidebar";
import Header from "../templates/header";
import { useNavigate, useParams } from "react-router-dom";
import ResumeMedis from "../../form_library/resumeMedis";
import PengantarRawat from "../../form_library/pengantarRawat";
import SkriningDariLuarRS from "../../form_library/skriningDariLuarRS";
import ObservasiPasien from "../../form_library/observasiPasien";
import RekonsiliasiObat from "../../form_library/rekonsiliasiObat";
import PengkajianAwalMedisPasienRawatInap from "../../form_library/pengkajianAwalMedisPasienRawatInap";
import RencanaPemulanganPasien from "../../form_library/rencanaPemulanganPasien";

const Form = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
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
              className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
              type="button"
            >
              SEND TO IGD
            </button>
          </div>

          <div class="flex">
            <div className="container bg-white m-4 w-1/4">
              <div className="font-bold text-left px-2 py-2">from</div>
              <div className="text-left space-y-2">
                <ul className="px-2 pb-2">
                  <li>Form IGD</li>
                  <li>Form RALAN</li>
                  <li>Form RANAP</li>
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
              <RencanaPemulanganPasien />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
