import React, { useState } from "react";
import Sidebar from "../templates/sidebar";
import Header from "../templates/header";
import { useNavigate } from "react-router-dom";

const Ralan = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ralan;
