import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MenuRalan = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-between my-3 mx-8 ">
      <button
        className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
        type="button"
        onClick={handleBack}
      >
        KEMBALI
      </button>
      <div className="flex">
        <Link to={"/farmasi/penjualan"}>
          <button
            className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
            type="button"
          >
            PASIEN
          </button>
        </Link>
        <Link to={"/farmasi/resep"}>
          <button
            className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
            type="button"
          >
            POLI
          </button>
        </Link>
        <Link to={"/farmasi/obat/stok"}>
          <button
            className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
            type="button"
          >
            REPORT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuRalan;
