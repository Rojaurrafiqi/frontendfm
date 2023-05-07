import React, { useState } from "react";
import handleForm from "../../component/form_default/handleForm";
import axios from "axios";
import { API_URL } from "../../config";

const PageForm = () => {
  const [successIGD, setSuccessIGD] = useState(false);
  const [successRanap, setSuccessRanap] = useState(false);
  const [successRalan, setSuccessRalan] = useState(false);
  const [isButtonSendFormOpen, setIsButtonSendFormOpen] = useState(false);
  const [result, setResult] = useState(null);

  const handleClick = (event) => {
    // tangkap value dari ul
    const value = event.currentTarget.getAttribute("value");
    // kirim value ke component handle form
    setResult(handleForm(value));
  };

  function toggleDropdownSendForm() {
    setIsButtonSendFormOpen(!isButtonSendFormOpen);
  }

  const handleSentFormIGD = (resultValue) => {
    // menangkap result value
    const value = resultValue.type.name;

    // mengirim data ke BA setdefault form IGD
    axios
      .patch(`${API_URL}/form/default/igd`, {
        nama_form: value,
      })
      .then((response) => {
        setSuccessIGD(true);
        setTimeout(() => {
          setSuccessIGD(false);
        }, 1000);
        setIsButtonSendFormOpen(!isButtonSendFormOpen);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSentFormRanap = (resultValue) => {
    // menangkap result value
    const value = resultValue.type.name;

    // mengirim data ke BA setdefault form Ranap
    axios
      .patch(`${API_URL}/form/default/ranap`, {
        nama_form: value,
      })
      .then((response) => {
        setSuccessRanap(true);
        setTimeout(() => {
          setSuccessRanap(false);
        }, 1000);
        setIsButtonSendFormOpen(!isButtonSendFormOpen);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSentFormRalan = (resultValue) => {
    // menangkap result value
    const value = resultValue.type.name;

    // mengirim data ke BA setdefault form Ralan
    axios
      .patch(`${API_URL}/form/default/ralan`, {
        nama_form: value,
      })
      .then((response) => {
        setSuccessRalan(true);
        setTimeout(() => {
          setSuccessRalan(false);
        }, 1000);
        setIsButtonSendFormOpen(!isButtonSendFormOpen);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="flex justify-between px-4">
        <div className="container w-auto">
          {successIGD && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 px-2 py-1">
              <p className="font-bold">Success! sent to IGD</p>
            </div>
          )}
          {successRanap && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 px-2 py-1">
              <p className="font-bold">Success! sent to Rawat Inap</p>
            </div>
          )}
          {successRalan && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 px-2 py-1">
              <p className="font-bold">Success! sent to Rawat Jalan</p>
            </div>
          )}
        </div>
        <div className="relative inline-block">
          <button
            onClick={toggleDropdownSendForm}
            className="py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75"
            type="button"
          >
            SEND FORM
          </button>

          {/* Dropdown menu */}
          {isButtonSendFormOpen && (
            <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg text-left bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  onClick={() => handleSentFormIGD(result)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  IGD
                </a>
                <a
                  onClick={() => handleSentFormRanap(result)}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  RANAP
                </a>
                <a
                  onClick={() => handleSentFormRalan(result)}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  RALAN
                </a>
              </div>
            </div>
          )}
        </div>
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
                <button onClick={handleClick} value="RencanaPemulanganPasien">
                  Rencana Pemulangan Pasien
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container bg-white m-4 w-3/4">
          {result == null ? (
            <p className="text-left font-semibold text-red-500 px-4 py-4">
              Silahkan pilih form terlebih dahulu
            </p>
          ) : (
            result && result
          )}
        </div>
      </div>
    </div>
  );
};

export default PageForm;
