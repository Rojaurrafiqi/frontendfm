import React from "react";
import Pasien from "../pendaftaran/pasien";
import Sidebar from "../templates/sidebar";
import Header from "../templates/header";
import Tandavital from "../igd/triase/component/tandavital";

const Rekammedis = () => {
  return (
    <div class="h-full">
      <div class="flex ...">
        <div class="flex-none">
          <Sidebar />
        </div>

        <div class="flex-auto bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
          <Header />
          <div class="container mx-auto 2xl:w-screen px-8 py-4">
            <Pasien />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rekammedis;
