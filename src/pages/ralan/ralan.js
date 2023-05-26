import React from "react";
import Sidebar from "../templates/sidebar";
import Header from "../templates/header";
import MenuRalan from "./component/MenuRalan";
import DaftarPasien from "./pasien/DaftarPasien";

const Ralan = () => {
  return (
    <div class="h-full">
      <div class="flex">
        <div class="flex-none">
          <Sidebar />
        </div>
        <div class="flex-auto bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
          <Header />
          <div class="container mx-auto 2xl:w-screen pb-10">
            <MenuRalan />
            <DaftarPasien />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ralan;
