import React, { useState, useEffect } from "react";
import Sidebar from "../../pages/templates/sidebar";
import Header from "../../pages/templates/header";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";
import Modal from "../../component/Modal";
import MenuUsers from "./component/MenuUsers";
import closeIcon from "../../images/close.png";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const { id } = useParams();

  const [dataUserById, setDataUserById] = useState({});
  const [dataDokterById, setDataDokterById] = useState({});
  const [isDokter, setIsDokter] = useState(false);
  const [jabatanCheck, setJabatanCheck] = useState("");

  // ambil data user by id
  const fetchDataUserById = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/${id}`);
      setDataUserById(response.data);
      setJabatanCheck(response.data.jabatan);
    } catch (error) {
      console.log(error);
    }
  };

  // ambil data dokter
  const fetchDataDokterById = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/detail/dokter/${id}`);
      setDataDokterById(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataUserById();
    fetchDataDokterById();
  }, []);

  useEffect(() => {
    handleCheckUserJabatan();
  }, [jabatanCheck]);

  const handleCheckUserJabatan = async () => {
    try {
      if (jabatanCheck === "dokter") {
        setIsDokter(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [formRegisterUser, setFormRegisterUser] = useState({});
  const [editFormRegisterUser, setEditformRegisterUser] = useState([]);

  // const handleFormRegisterChange = (event) => {
  //   setFormRegisterUser({
  //     ...formRegisterUser,
  //     [event.target.name]: event.target.value,
  //   });

  //   const { name, value } = event.target;
  //   setEditformRegisterUser((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmitRegisterUser = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const dataUser = {
  //       ...formRegisterUser,
  //       jabatan: selectFormJabatan,
  //       jenis_kelamin: selectFormStatus,
  //       status: selectFormStatus,
  //     };
  //     const sendData = await axios.post(`${API_URL}/users`, dataUser);
  //     setDataUsers({});
  //     setFormRegisterUser({});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div class="h-full">
      <div class="flex">
        <div class="flex-none">
          <Sidebar />
        </div>
        <div class="flex-auto bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
          <Header />
          <div className="flex justify-start my-3 mx-8 ">
            <button
              className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
              type="button"
              onClick={handleBack}
            >
              KEMBALI
            </button>
          </div>
          <div class="container flex space-x-3 mx-auto 2xl:w-screen px-8 pb-10">
            <div className="container border w-1/3 border-state-300 bg-white  mt-5 mb-4">
              <div class="overflow-x-auto  ">
                <div className="containerr bg-emerald300 text-left  pl-2 py-0.5">
                  Data Account
                </div>
                <div className="overflow-y-auto max-h-[48vh]">
                  <div className="text-left p-2">
                    <tr className="text-left p-2">
                      <td>Name</td>
                      <td>:</td>
                      <td>{dataUserById.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>{dataUserById.email}</td>
                    </tr>
                    <tr>
                      <td>Jabatan</td>
                      <td>:</td>
                      <td>{dataUserById.jabatan}</td>
                    </tr>
                  </div>
                </div>
              </div>
            </div>
            <div className="container border w-2/3 border-state-300 bg-white  mt-5 mb-4">
              <div class="overflow-x-auto ">
                <div className="container bg-emerald300 text-left pl-2  py-0.5">
                  Data Detail
                </div>
                <div className="overflow-y-auto max-h-[48vh]">
                  {isDokter && (
                    <div className="p-2 text-left">
                      {dataDokterById.length > 0 ? (
                        dataDokterById.map((item) => (
                          <>
                            <tr>
                              <td>Nama</td>
                              <td>:</td>
                              <td>{item.nama_dokter}</td>
                            </tr>
                            <tr>
                              <td>No HP</td>
                              <td>:</td>
                              <td>{item.nomor_hp}</td>
                            </tr>
                            <tr>
                              <td>Alamat</td>
                              <td>:</td>
                              <td>{item.alamat}</td>
                            </tr>
                            <tr>
                              <td>TTL</td>
                              <td>:</td>
                              <td>
                                {item.tempat_lahir} / {item.tanggal_lahir}
                              </td>
                            </tr>
                            <tr>
                              <td>Spesialis</td>
                              <td>:</td>
                              <td>{item.spesialis}</td>
                            </tr>
                            <tr>
                              <td>Sub Spesialis</td>
                              <td>:</td>
                              <td>{item.sub_spesialis}</td>
                            </tr>
                          </>
                        ))
                      ) : (
                        <p> render form pengisian data dokter</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
