import React from "react";

import ranapLogo from "../../images/ranap.png";
import formLogo from "../../images/form.png";
import rekamMedisLogo from "../../images/rekammedis.png";
import ralanLogo from "../../images/ralan.png";
import igdLogo from "../../images/igd.png";
import menuLogo from "../../images/menu.png";
import apotekLogo from "../../images/apotek.png";
import addUserLogo from "../../images/adduser.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div class="container h-screen   p-1 space-y-2 w-16 dark:bg-gray-900 dark:text-gray-100 sticky top-0">
        {/* <!-- Logo --> */}
        <div class="mt-2 mb-5 ml-2 items-center justify-center">
          <img src={menuLogo} width="38px" alt="Logo" className="text-center" />
        </div>

        <div className=" flex flex-col items-center space-y-2">
          <div className="flex flex-col items-center justify-center">
            <Link to={"/pasien"} rel="noopener noreferrer" href="#">
              <img src={rekamMedisLogo} width="38" className="mx-auto" />
              <p className="text-xs text-center">PASIEN</p>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to={"/igd"} rel="noopener noreferrer" href="#">
              <img src={igdLogo} width="33" className="mx-auto" />
              <p className="text-xs text-center">IGD</p>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to={"/ralan"} rel="noopener noreferrer">
              <img src={ralanLogo} width="33" className="mx-auto" />
              <p className="text-xs text-center">RALAN</p>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to={"/ranap"} rel="noopener noreferrer">
              <img src={ranapLogo} width="33" className="mx-auto" />
              <p className="text-xs text-center">RANAP</p>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to={"/farmasi/penjualan"} rel="noopener noreferrer">
              <img src={apotekLogo} width="33" className="mx-auto" />
              <p className="text-xs text-center">FARMASI</p>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to={"/form"} rel="noopener noreferrer" href="#">
              <img src={formLogo} width="38" className="mx-auto" />
              <p className="text-xs text-center">FORM</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link to={"/user"} rel="noopener noreferrer" href="#">
            <img src={addUserLogo} width="35" className="mx-auto" />
            <p className="text-xs text-center">USER</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
