import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../config";
import { Link } from "react-router-dom";
import Sidebar from "../../templates/sidebar";
import Header from "../../templates/header";
import { useNavigate } from "react-router-dom";

const Jadwal = () => {
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
          <div className="flex justify-between my-3 mx-8">
            <button
              className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
              type="button"
              onClick={handleBack}
            >
              KEMBALI
            </button>
            <div className="flex">
              <Link to={"/ranap"}>
                <button
                  className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                  type="button"
                >
                  PASIEN
                </button>
              </Link>
              <Link to={"/ranap/kamar"}>
                <button
                  className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                  type="button"
                >
                  KAMAR
                </button>
              </Link>
              <Link to={"/ranap/jadwal"}>
                <button
                  className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                  type="button"
                >
                  JADWAL
                </button>
              </Link>
              <Link to={"/ranap/report"}>
                <button
                  className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                  type="button"
                >
                  REPORT
                </button>
              </Link>
            </div>
          </div>

          <div class="container mx-auto 2xl:w-screen px-8 pb-10 ">
            <div className="container bg-emerald300 text-left pl-2 mt-5 py-0.5">
              Jadwal
            </div>
            <div className="container border border-state-300 bg-white mb-4 ">
              <div class="overflow-x-auto mb-5 ">
                <div className="overflow-y-auto max-h-[48vh]">cc</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jadwal;
