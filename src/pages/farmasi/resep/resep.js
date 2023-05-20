import React, { useState, useEffect } from "react";
import Sidebar from "../../templates/sidebar";
import Header from "../../templates/header";
import { useNavigate } from "react-router-dom";
import Modal from "../../../component/Modal";
import { API_URL } from "../../../config";
import axios from "axios";
import MenuFarmasi from "../component/MenuFarmasi";

const Resep = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  // pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState();

  // menyimpan data obat untuk di looping
  const [resepObat, setResepObat] = useState({});

  // search
  const [searchQueryResepObat, setSearchQueryResepObat] = useState("");
  // const [filterResepObat, setFilterResepObat] = useState("antrian");

  // modal delete
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // penyimpanan sementara id delete
  const [deleteUserId, setDeleteUserId] = useState();

  // modal tambah data
  const [isOpen, setIsOpen] = useState(false);

  // modal detail resep
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // form data obat
  const [formResepObat, setFormResepObat] = useState({});

  // edit form data obat
  const [editFormResepObat, setEditFormResepObat] = useState({});

  //menangkap data detail resep
  const [detailResep, setDetailResep] = useState({});

  //modal edit
  const [isEditOpen, setIsEditOpen] = useState(false);

  // menyimpan sementara data resep by id
  const [dataById, setDataById] = useState({});

  // menyimpan id obat untuk di parse ke handleEditSubmitResepObat
  const [idObat, setIdObat] = useState();

  //all pasien ranap
  useEffect(() => {
    const fetchResepObat = async () => {
      try {
        if (searchQueryResepObat !== "") {
          const response = await axios.get(
            `${API_URL}/farmasi/resep/obat?search=${searchQueryResepObat}&page=1&limit=${limit}`
          );
          setResepObat(response.data.data);
          setTotalPages(response.data.totalPages);
        } else {
          const response = await axios.get(
            `${API_URL}/farmasi/resep/obat?search=${searchQueryResepObat}&page=${page}&limit=${limit}`
          );
          setResepObat(response.data.data);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchResepObat();
  }, [searchQueryResepObat, page, resepObat, limit]);

  // show select nama obat dari database obat
  const [namaObat, setNamaObat] = useState();
  const fetchNamaObat = async () => {
    try {
      const response = await axios.get(`${API_URL}/farmasi/obat/nama`);
      setNamaObat(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNamaObat();
  }, [namaObat]);

  const handleCloseModal = () => {
    setIsDeleteOpen(false);
    setIsOpen(false);
    setIsEditOpen(false);
    setIsDetailOpen(false);
  };

  const handleSearchResepObatChange = (event) => {
    const data = event.target.value;
    setSearchQueryResepObat(data);
  };

  // delete
  const handleShowModalDelete = (id) => {
    setIsDeleteOpen(true);
    setDeleteUserId(id);
  };

  const handleConfirmDelete = () => {
    handleDeleteResepObat(deleteUserId);
    setIsDeleteOpen(false);
    setDeleteUserId(null);
  };

  const handleDeleteResepObat = async (PasienId) => {
    try {
      await axios.delete(`${API_URL}/farmasi/obat/resep/${PasienId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to delete data.");
    }
  };

  const handleFormResepObatChange = (event) => {
    setFormResepObat({
      ...formResepObat,
      [event.target.name]: event.target.value,
    });
    const { name, value } = event.target;
    setDataById((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitResepObat = async (event) => {
    event.preventDefault();
    try {
      const dataNewObat = {
        ...formResepObat,
        status_resep: "antrian",
        id_obat: 4,
        id_pasien_rm: 4,
        id_dokter: 1,
      };

      const sendData = await axios.post(
        `${API_URL}/farmasi/obat/resep`,
        dataNewObat
      );
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditSubmitResepObat = async (event) => {
    event.preventDefault();
    try {
      const dataNewObatEdit = {
        ...dataById,
      };
      const sendData = await axios.patch(
        `${API_URL}/farmasi/obat/resep/${idObat}`,
        dataNewObatEdit
      );
      setIsEditOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditResepObat = (idObatParse) => {
    setIsEditOpen(true);
    setIdObat(idObatParse);
    fetchResepObatById(idObatParse);
  };

  const handleDetailResepObat = (idObatParse) => {
    setIsDetailOpen(true);
    fetchResepObatById(idObatParse);
  };

  const fetchResepObatById = async (idObatParse) => {
    try {
      const response = await axios.get(
        `${API_URL}/farmasi/resep/obat/${idObatParse}`
      );
      if (response.data.obat_data && response.data.obat_data.nama_obat) {
        setDataById(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusResep = async (id, status) => {
    try {
      const dataSend = {
        status_resep: status,
      };
      const sendData = await axios.patch(
        `${API_URL}/farmasi/obat/resep/${id}`,
        dataSend
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="h-full overflow-x-hidden">
      <div class="flex">
        <div class="flex-none">
          <Sidebar />
        </div>
        <div class="flex-auto bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
          <Header />
          <MenuFarmasi />

          <div class="container mx-auto 2xl:w-screen px-8 pb-10">
            <div className="container border border-state-300 bg-white p-2 mt-5 ">
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setSearchQueryResepObat("")}
                  className="py-0.2 text-sm  px-1 mr-1 bg-white border text-black border-black  hover:bg-emerald300"
                  type="button"
                >
                  ALL RESEP
                </button>
                <button
                  onClick={() => setSearchQueryResepObat("antrian")}
                  className="py-0.2 text-sm  px-1 mr-1 bg-white border text-black border-black  hover:bg-emerald300"
                  type="button"
                >
                  ANTRIAN
                </button>
                <button
                  onClick={() => setSearchQueryResepObat("sedang pengerjaan")}
                  className="py-0.2 text-sm  px-1 mr-1 bg-white border text-black border-black  hover:bg-emerald300"
                  type="button"
                >
                  SEDANG PENGERJAAN
                </button>
                <button
                  onClick={() => setSearchQueryResepObat("selesai")}
                  className="py-0.2 text-sm  px-1 mr-1 bg-white border text-black border-black  hover:bg-emerald300"
                  type="button"
                >
                  SELESAI
                </button>
              </div>
              <div className="search text-left flex">
                <div className="search text-left flex ">
                  <form>
                    <input
                      onChange={handleSearchResepObatChange}
                      value={searchQueryResepObat}
                      className="border border-black pl-0.5 py-0.4  "
                      type="text"
                      placeholder="Cari data obat..."
                    />
                  </form>
                </div>

                <div className="container mx-auto w-full flex justify-end ">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="py-0.2 mr-4 text-sm  px-1 bg-white border text-black border-black  hover:bg-emerald300"
                    type="button"
                  >
                    TAMBAH DATA
                  </button>
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
                  Resep Obat
                </div>
                <div className="overflow-y-auto overflow-x-auto max-h-[48vh]">
                  <table class="table-auto w-full">
                    <thead className="sticky top-0 ">
                      <tr>
                        <th class=" py-3 px-6 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No
                        </th>
                        <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nama Obat
                        </th>
                        <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dosis
                        </th>
                        <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jumlah
                        </th>
                        <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nama Pasien
                        </th>
                        <th class=" py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nama Dokter
                        </th>
                        <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tgl Resep
                        </th>
                        <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Aksi
                        </th>
                        <th class=" py-3 px-6 bg-gray-50 text-left text-xs fonst-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y  divide-gray-200 ">
                      {resepObat.length > 0 ? (
                        resepObat.map((item, index) => (
                          <tr key={item.id}>
                            <td className="py-0.3  px-6 whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="py-0.3  px-6 whitespace-nowrap">
                              {item.obat_data.nama_obat}
                            </td>
                            <td className="py-0.3  px-6 whitespace-nowrap">
                              {item.dosis}
                            </td>
                            <td className="py-0.3  px-6 whitespace-nowrap">
                              {item.jumlah}
                            </td>
                            <td className="py-0.3  px-6 whitespace-nowrap">
                              {item.pasien_rm.nama_lengkap}
                            </td>
                            <td className="py-0.3  px-6 whitespace-nowrap">
                              {item.dokter.nama_dokter}
                            </td>
                            <td className="py-0.3  px-6 whitespace-nowrap">
                              {item.tanggal_resep}
                            </td>
                            <td
                              className={`py-0.3  whitespace-nowrap ${
                                item.status_resep === "antrian"
                                  ? "text-red-500"
                                  : item.status_resep === "selesai"
                                  ? "text-emerald"
                                  : "text-yellow-600"
                              }`}
                            >
                              {item.status_resep}
                            </td>

                            <td class=" py-0.3  whitespace-nowrap text-right">
                              {item.status_resep === "antrian" ? (
                                <button
                                  onClick={() =>
                                    handleStatusResep(
                                      item.id,
                                      "sedang pengerjaan"
                                    )
                                  }
                                  className="ml-1 py-0.1 px-1 mr-1 my-0.2 bg-emerald text-white  hover:opacity-75"
                                  type="button"
                                >
                                  Tangani
                                </button>
                              ) : (
                                <button
                                  onClick={() =>
                                    handleStatusResep(item.id, "selesai")
                                  }
                                  className={
                                    item.status_resep === "selesai"
                                      ? `hidden`
                                      : `ml-1 py-0.1 px-1 mr-1 my-0.2 bg-emerald text-white  hover:opacity-75`
                                  }
                                  type="button"
                                >
                                  Selesai
                                </button>
                              )}

                              <button
                                onClick={() => handleDetailResepObat(item.id)}
                                className="ml-1 py-0.1 px-1 mr-1 my-0.2 bg-emerald text-white  hover:opacity-75"
                                type="button"
                              >
                                Detail
                              </button>
                              <button
                                onClick={() => handleEditResepObat(item.id)}
                                className="ml-1 py-0.1 px-1 mr-1 my-0.2 bg-emerald text-white  hover:opacity-75"
                                type="button"
                              >
                                Edit
                              </button>

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
                            {searchQueryResepObat
                              ? "No results found"
                              : "Data tidak tersedia"}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* modal delete resep obat */}
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

          {/* modal tambah data resep */}
          <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <div class="bg-white fixed rounded-lg w-11/12 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
              <div class="flex justify-between px-4 py-2">
                <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
                  Tambah Resep
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

              <form onSubmit={handleSubmitResepObat}>
                <div class="bg-gray-50 p-6">
                  <div class="flex flex-col md:flex-row">
                    <div class="w-full  px-4 mb-4 md:mb-0">
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Nama Obat
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="id_obat"
                          type="number"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Jumlah
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="jumlah"
                          type="text"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Dosis
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="dosis"
                          type="text"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Nama Pasien
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="id_pasien_rm"
                          type="number"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Nama Dokter
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="id_dokter"
                          type="number"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                    </div>
                    <div class="w-full  px-4 mb-4 md:mb-0">
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Frekuensi Pemberian
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="frekuensi"
                          type="text"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Durasi Obat
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="durasi_obat"
                          type="text"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Tanggal Resep
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="tanggal_resep"
                          type="date"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Instruksi Penggunaan
                        </label>
                        <textarea
                          class="w-full px-4 text-sm py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                          rows="3"
                          name="instruksi_penggunaan"
                          onChange={handleFormResepObatChange}
                        ></textarea>
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

          {/* modal edit data obat */}
          <Modal isOpen={isEditOpen} onClose={handleCloseModal}>
            <div class="bg-white fixed rounded-lg w-11/12 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
              <div class="flex justify-between px-4 py-2">
                <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
                  Edit Data Obat
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

              <form onSubmit={handleEditSubmitResepObat}>
                <div class="bg-gray-50 p-6">
                  <div class="flex flex-col md:flex-row">
                    <div class="w-full  px-4 mb-4 md:mb-0">
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Nama Obat
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="id_obat"
                          value={dataById.id_obat}
                          type="number"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Jumlah
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="jumlah"
                          value={dataById.jumlah}
                          type="text"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Dosis
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="dosis"
                          value={dataById.dosis}
                          type="text"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Nama Pasien
                        </label>
                        <input
                          value={dataById.nama_lengkap}
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="id_pasien_rm"
                          type="number"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Nama Dokter
                        </label>
                        <input
                          value={dataById.nama_dokter}
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="id_dokter"
                          type="number"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                    </div>
                    <div class="w-full  px-4 mb-4 md:mb-0">
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Frekuensi Pemberian
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="frekuensi"
                          value={dataById.frekuensi}
                          type="text"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Durasi Obat
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="durasi_obat"
                          value={dataById.durasi_obat}
                          type="text"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Tanggal Resep
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="tanggal_resep"
                          value={dataById.tanggal_resep}
                          type="date"
                          onChange={handleFormResepObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Instruksi Penggunaan
                        </label>
                        <textarea
                          class="w-full px-4 text-sm py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                          rows="3"
                          value={dataById.instruksi_penggunaan}
                          name="instruksi_penggunaan"
                          onChange={handleFormResepObatChange}
                        ></textarea>
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

          {/* modal detail resep obat */}
          {isDetailOpen && (
            <Modal isOpen={isDetailOpen} onClose={handleCloseModal}>
              <div class="bg-gray-100 fixed rounded-lg w-11/12 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
                <div class="flex justify-between px-4 py-2">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
                    Detail Resep Obat
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

                <div class="bg-white p-6">
                  <div class="flex flex-col md:flex-row">
                    <div class="w-full px-4 mb-5 md:mb-0">
                      <table className="table-auto border-collapse ">
                        <tbody className="text-left">
                          <tr>
                            <td>Nama Obat</td>
                            <td className="px-2">:</td>
                            <td>{dataById?.obat_data?.nama_obat}</td>
                          </tr>
                          <tr>
                            <td>Dosis</td>
                            <td className="px-2">:</td>
                            <td>{dataById?.dosis}</td>
                          </tr>
                          <tr>
                            <td>Frekuensi Pemberian</td>
                            <td className="px-2">:</td>
                            <td>{dataById?.frekuensi}</td>
                          </tr>
                          <tr>
                            <td>Jumlah Obat</td>
                            <td className="px-2">:</td>
                            <td>{dataById?.jumlah}</td>
                          </tr>
                          <tr>
                            <td>Durasi Obat</td>
                            <td className="px-2">:</td>
                            <td>{dataById?.durasi_obat}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="w-full bg-white  px-4 mb-4 md:mb-0">
                      <table className="table-auto border-collapse ">
                        <tbody className="text-left">
                          <tr>
                            <td>Instruksi Penggunaan</td>
                            <td className="px-2">:</td>
                            <td>{dataById?.instruksi_penggunaan}</td>
                          </tr>
                          <tr>
                            <td>Tanggal Resep</td>
                            <td className="px-2">:</td>
                            <td>{dataById?.tanggal_resep}</td>
                          </tr>
                          <tr>
                            <td>Nama Dokter</td>
                            <td className="px-2">:</td>
                            <td>{dataById?.dokter?.nama_dokter}</td>
                          </tr>
                          <tr>
                            <td>Nama Pasien</td>
                            <td className="px-2">:</td>
                            <td>{dataById?.pasien_rm?.nama_lengkap}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resep;
