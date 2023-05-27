import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MenuUsers = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [isRegisterUser, setIsRegisterUser] = useState(true);

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
        <button
          onClick={() => setIsRegisterUser(true)}
          className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
          type="button"
        >
          TAMBAH USERS
        </button>
      </div>
    </div>
  );
};

export default MenuUsers;
