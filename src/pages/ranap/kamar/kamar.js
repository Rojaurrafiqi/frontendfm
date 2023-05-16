// search kamar
// pagination kamar
// table kamar
// delete kamar

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../config";
import { Link } from "react-router-dom";
import Sidebar from "../../templates/sidebar";
import Header from "../../templates/header";
import { useNavigate } from "react-router-dom";
import Modal from "../../../component/Modal";

const Kamar = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [dataKamar, setDataKamar] = useState({});
  const [tipeKamar, setTipeKamar] = useState([]);
  const [filterData, setFilterData] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState();

  // modal delete
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  // penyimpanan sementara id delete
  const [deleteUserId, setDeleteUserId] = useState();

  // modal tambah data
  const [isOpen, setIsOpen] = useState(false);

  // form data kamar
  const [formDataKamar, setFormDataKamar] = useState({});
  // edit form data kamar
  const [editFormDataKamar, setEditFormDataKamar] = useState({});
  const [selectTipeData, setSelectTipeData] = useState();

  useEffect(() => {
    const fetchDataKamarRanap = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/ranap/kamar?filter=${filterData}&page=${page}&limit=${limit}`
        );
        setDataKamar(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataKamarRanap();
  }, [dataKamar, filterData, page, totalPages]);

  const fetchTipeKamarRanap = async () => {
    try {
      const tipeDataKamar = await axios.get(`${API_URL}/ranap/kamar/tipe`);
      setTipeKamar(tipeDataKamar.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTipeKamarRanap();
  }, [tipeKamar]);

  const handleDeleteUser = async (PasienId) => {
    try {
      await axios.delete(`${API_URL}/ranap/kamar/${PasienId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to delete user.");
    }
  };

  const handleFilter = (event) => {
    const selectedValue = event.target.value;
    setFilterData(selectedValue);
    setPage(1);
  };

  const handleCloseModal = () => {
    setIsDeleteOpen(false);
    setIsOpen(false);
  };

  const handleShowModalDelete = (id) => {
    setIsDeleteOpen(true);
    setDeleteUserId(id);
  };
  const handleConfirmDelete = () => {
    handleDeleteUser(deleteUserId);
    setIsDeleteOpen(false);
    setDeleteUserId(null);
  };

  const handleFormKamarChange = (event) => {
    setFormDataKamar({
      ...formDataKamar,
      [event.target.name]: event.target.value,
    });

    const { name, value } = event.target;
    setEditFormDataKamar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitDataKamar = async (event) => {
    event.preventDefault();
    try {
      const dataNewKamar = {
        ...formDataKamar,
        tipe_kamar: selectTipeData,
        status_kamar: "available",
      };
      const sendData = await axios.post(`${API_URL}/ranap/kamar`, dataNewKamar);
      setIsOpen(false);
      setDataKamar({});
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectTipeKamar = (event) => {
    const data = event.target.value;
    setSelectTipeData(data);
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
          <div className="flex my-3 mx-8 justify-end">
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
            >
              Tambah Data
            </button>
          </div>

          <div class="container mx-auto 2xl:w-screen px-8 pb-10 ">
            <div className="container border border-state-300 bg-white px-4  ">
              <div className="flex pt-2 ">
                <div className="flex">
                  <select
                    onChange={handleFilter}
                    className="block text-sm appearance-none  bg-white border border-gray-300 text-gray-700 py-1 px-2  rounded  focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">All Data</option>
                    <option value="available">Available</option>
                    <option value="occupied">Occupied</option>
                  </select>
                </div>
                <div className="container mx-auto w-full flex justify-end ">
                  <button
                    onClick={() => setPage((page) => page - 1)}
                    hidden={page === 1}
                    type="button"
                    class="bg-white text-state-400 rounded-l-md border border-black border-l  mr-1"
                  >
                    <div class="flex flex-row align-middle">
                      <svg
                        class="w-4 mr-1 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <p class="ml-0.5 mr-1 text-sm">Prev</p>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setPage((page) => page + 1);
                    }}
                    hidden={page === totalPages}
                    type="button"
                    class="bg-white text-state-400 border border-black rounded-r-md border-l "
                  >
                    <div class="flex flex-row align-middle">
                      <p class="mr-0.5 ml-0.5 text-sm">Next</p>
                      <svg
                        class="w-4 mr-1 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="overflow-x-auto mb-5 ">
                <div className="container bg-emerald300 text-left pl-2 mt-3 py-0.5">
                  Info Ketersediaan Kamar
                </div>
                <div className="overflow-y-auto max-h-[48vh]">
                  <table class="table-auto w-full">
                    <thead className="sticky top-0">
                      <tr>
                        <th class="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No Kamar
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No Bad
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tipe Kamar
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status Kamar
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Aksi
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs fonst-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 ">
                      {dataKamar.length > 0 ? (
                        dataKamar.map((item, index) => (
                          <tr key={item.id}>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {item.no_kamar}
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {item.no_bad}
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {item.tipe_kamar}
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {item.status_kamar}
                            </td>

                            <td class=" py-0.3 whitespace-nowrap">
                              {/* button booking automatis dari kamar dan langsung di redirect ke registrasi pasien di hide dulu, dibuka ketika ada permintaan dari rs, dan button ini sementara waktu blm aktif
                              <Link to={`/ranap/pasien/penanganan/${item.id}`}>
                                <button
                                  className="ml-1 py-0.1 px-1 mr-1 my-0.2 bg-emerald text-white  hover:opacity-75"
                                  type="button"
                                >
                                  Booking
                                </button>
                              </Link> */}
                              <button
                                onClick={() => handleShowModalDelete(item.id)}
                                className="ml-1 py-0.1 px-1 mr-1 my-0.2 bg-red-600 text-white  hover:opacity-75"
                                type="button"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colspan="7" className="bg-gray-200 w-full">
                            Data belum tersedia
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* modal tambah data kamar */}
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
              <div class="bg-white rounded-lg w-11/12 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
                <div class="flex justify-between px-4 py-2">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
                    Tambah Data Kamar
                  </h3>
                  <button
                    class="text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={handleCloseModal}
                  >
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmitDataKamar}>
                  <div class="bg-gray-50 p-6">
                    <div class="flex flex-col md:flex-row">
                      <div class="w-full  px-4 mb-4 md:mb-0">
                        <div className="field">
                          <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                            No Kamar
                          </label>
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="no_kamar"
                            type="text"
                            placeholder="No Kamar"
                            onChange={handleFormKamarChange}
                          />
                        </div>
                        <div className="field"></div>
                        <div className="field">
                          <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                            No Bad
                          </label>
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="no_bad"
                            type="text"
                            placeholder="No Bad"
                            onChange={handleFormKamarChange}
                          />
                        </div>
                        <div className="field">
                          <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                            Tipe Kamar
                          </label>
                          <select
                            onChange={handleSelectTipeKamar}
                            name="tipe_kamar"
                            className="block appearance-none border  w-full py-2 px-3 text-gray-700  rounded  focus:outline-none focus:bg-white focus:border-gray-500"
                          >
                            {tipeKamar.map((item) => (
                              <option value={item.tipe}>{item.tipe}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-100 p-4 flex justify-end">
                    <button
                      type="submit"
                      class="px-4 py-2 bg-emerald hover:opacity-75 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                      onclick="toggleModal()"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Modal>

            {/* modal delete pasien ranap */}
            <Modal isOpen={isDeleteOpen} onClose={handleCloseModal}>
              <div class="bg-white rounded-lg w-1/3 mt-10 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
                <div class="bg-gray-50 p-6">
                  <div class="flex flex-col md:flex-row">
                    <div class="w-full">
                      <h2 class="text-xl font-bold py-4 ">Are you sure?</h2>
                      <p class="text-sm text-gray-500 px-8">
                        Do you really want to delete this data? This process
                        cannot be undone
                      </p>
                      <div className="mt-4">
                        <button
                          onClick={handleConfirmDelete}
                          class="px-4 py-2 mr-2 bg-red-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setIsDeleteOpen(false)}
                          class="px-4 py-2 ml-2 bg-gray-100 text-state-700 border border-black rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 mr-2"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kamar;
