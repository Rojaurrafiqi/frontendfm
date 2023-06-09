import React, { useState, useEffect } from "react";
import Sidebar from "../../templates/sidebar";
import Header from "../../templates/header";
import { useNavigate } from "react-router-dom";
import Modal from "../../../component/Modal";
import { API_URL } from "../../../config";
import axios from "axios";
import closeIcon from "../../../images/close.png";
import { Link, Route, Routes } from "react-router-dom";
import MenuFarmasi from "../component/MenuFarmasi";

const DataObat = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  // pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState();

  // menyimpan data obat untuk di looping
  const [dataObat, setDataObat] = useState({});

  // search
  const [searchQueryDataObat, setsearchQueryDataObat] = useState("");

  // modal delete
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // penyimpanan sementara id delete
  const [deleteUserId, setDeleteUserId] = useState();

  // modal tambah data
  const [isOpen, setIsOpen] = useState(false);

  // form data obat
  const [formDataObat, setFormDataObat] = useState({});

  // edit form data obat
  const [editFormDataObat, setEditFormDataObat] = useState({});

  //all pasien ranap
  useEffect(() => {
    const fetchAllDataObat = async () => {
      try {
        if (searchQueryDataObat !== "") {
          const response = await axios.get(
            `${API_URL}/farmasi/obat?search=${searchQueryDataObat}&page=1&limit=${limit}`
          );
          setDataObat(response.data.data);
          setTotalPages(response.data.totalPages);
        } else {
          const response = await axios.get(
            `${API_URL}/farmasi/obat?search=${searchQueryDataObat}&page=${page}&limit=${limit}`
          );
          setDataObat(response.data.data);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllDataObat();
  }, [searchQueryDataObat, page, dataObat, limit]);

  const handleCloseModal = () => {
    setIsDeleteOpen(false);
    setIsOpen(false);
    setIsEditOpen(false);
  };

  const handleSearchDataObatChange = (event) => {
    const data = event.target.value;
    setsearchQueryDataObat(data);
  };

  // delete
  const handleShowModalDelete = (id) => {
    setIsDeleteOpen(true);
    setDeleteUserId(id);
  };
  const handleConfirmDelete = () => {
    handleDeleteDataObat(deleteUserId);
    setIsDeleteOpen(false);
    setDeleteUserId(null);
  };

  const handleDeleteDataObat = async (PasienId) => {
    try {
      await axios.delete(`${API_URL}/farmasi/obat/${PasienId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to delete data.");
    }
  };

  const handleFormDataObatChange = (event) => {
    setFormDataObat({
      ...formDataObat,
      [event.target.name]: event.target.value,
    });
    const { name, value } = event.target;
    setDataById((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitDataObat = async (event) => {
    event.preventDefault();
    try {
      const dataNewObat = {
        ...formDataObat,
      };
      const sendData = await axios.post(
        `${API_URL}/farmasi/obat/`,
        dataNewObat
      );
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditSubmitDataObat = async (event) => {
    event.preventDefault();
    try {
      const dataNewObatEdit = {
        ...dataById,
      };
      const sendData = await axios.patch(
        `${API_URL}/farmasi/obat/${idObat}`,
        dataNewObatEdit
      );
      setIsEditOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [dataById, setDataById] = useState({});
  const [idObat, setIdObat] = useState();

  const handleEditDataObat = (idObatParse) => {
    setIdObat(idObatParse);
    setIsEditOpen(true);
    fetchDataObatById(idObatParse);
  };

  const fetchDataObatById = async (idObatParse) => {
    try {
      const response = await axios.get(
        `${API_URL}/farmasi/obat/${idObatParse}`
      );
      setDataById(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="h-full">
      <div class="flex">
        <div class="flex-none">
          <Sidebar />
        </div>
        <div class="flex-auto bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
          <Header />
          <MenuFarmasi />

          <div class="container mx-auto 2xl:w-screen px-8 pb-10">
            <div className="container border border-state-300 bg-white p-2 mt-5 ">
              <div className="search text-left flex">
                <div className="search text-left flex ">
                  <form>
                    <input
                      onChange={handleSearchDataObatChange}
                      value={searchQueryDataObat}
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
                  Data Obat
                </div>
                <div className="overflow-y-auto max-h-[48vh]">
                  <table class="table-auto w-full">
                    <thead className="sticky top-0">
                      <tr>
                        <th class="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nama Obat
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Kategori
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dosis Obat
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Cara Penggunaan
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Aksi
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs fonst-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 ">
                      {dataObat.length > 0 ? (
                        dataObat.map((item, index) => (
                          <tr key={item.id}>
                            <td className="py-0.3 px-6 whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="py-0.3 px-6 whitespace-nowrap">
                              {item.nama_obat}
                            </td>
                            <td className="py-0.3 px-6 whitespace-nowrap">
                              {item.kategori_obat}
                            </td>

                            <td className="py-0.3 px-6 whitespace-nowrap">
                              {item.dosis_obat}
                            </td>
                            <td className="py-0.3 px-6 whitespace-nowrap">
                              {item.instruksi_penggunaan}
                            </td>

                            <td class=" py-0.3 whitespace-nowrap">
                              <Link to={`/ranap/pasien/penanganan/${item.id}`}>
                                <button
                                  className="ml-1 py-0.1 px-1 mr-1 my-0.2 bg-emerald text-white  hover:opacity-75"
                                  type="button"
                                >
                                  Detail
                                </button>
                              </Link>

                              <button
                                onClick={() => handleEditDataObat(item.id)}
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
                            {searchQueryDataObat
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

          {/* modal tambah data obat */}
          <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <div class="bg-white fixed rounded-lg w-11/12 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
              <div class="flex justify-between px-4 py-2">
                <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
                  Tambah Data Obat
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

              <form onSubmit={handleSubmitDataObat}>
                <div class="bg-gray-50 p-6">
                  <div class="flex flex-col md:flex-row">
                    <div class="w-full  px-4 mb-4 md:mb-0">
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Nama Obat
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="nama_obat"
                          type="text"
                          onChange={handleFormDataObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Kategori Obat
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="kategori_obat"
                          type="text"
                          onChange={handleFormDataObatChange}
                        />
                      </div>

                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Dosis Obat
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="dosis_obat"
                          type="text"
                          onChange={handleFormDataObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Efek Samping
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="efek_samping"
                          type="text"
                          onChange={handleFormDataObatChange}
                        />
                      </div>
                    </div>
                    <div class="w-full  px-4 mb-4 md:mb-0">
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Peringatan
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="peringatan"
                          type="text"
                          onChange={handleFormDataObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Instruksi Penggunaan
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="instruksi_penggunaan"
                          onChange={handleFormDataObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Deskripsi Obat
                        </label>
                        <textarea
                          class="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                          rows="4"
                          name="deskripsi_obat"
                          onChange={handleFormDataObatChange}
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

              <form onSubmit={handleEditSubmitDataObat}>
                <div class="bg-gray-50 p-6">
                  <div class="flex flex-col md:flex-row">
                    <div class="w-full  px-4 mb-4 md:mb-0">
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Nama Obat
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="nama_obat"
                          value={dataById.nama_obat}
                          type="text"
                          onChange={handleFormDataObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Kategori Obat
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={dataById.kategori_obat}
                          name="kategori_obat"
                          type="text"
                          onChange={handleFormDataObatChange}
                        />
                      </div>

                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Dosis Obat
                        </label>
                        <input
                          value={dataById.dosis_obat}
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="dosis_obat"
                          type="text"
                          onChange={handleFormDataObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Efek Samping
                        </label>
                        <input
                          value={dataById.efek_samping}
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="efek_samping"
                          type="text"
                          onChange={handleFormDataObatChange}
                        />
                      </div>
                    </div>
                    <div class="w-full  px-4 mb-4 md:mb-0">
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Peringatan
                        </label>
                        <input
                          value={dataById.peringatan}
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="peringatan"
                          type="text"
                          onChange={handleFormDataObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Instruksi Penggunaan
                        </label>
                        <input
                          value={dataById.instruksi_penggunaan}
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="instruksi_penggunaan"
                          onChange={handleFormDataObatChange}
                        />
                      </div>
                      <div className="field">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-1">
                          Deskripsi Obat
                        </label>
                        <textarea
                          class="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                          rows="4"
                          value={dataById.deskripsi_obat}
                          name="deskripsi_obat"
                          onChange={handleFormDataObatChange}
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
        </div>
      </div>
    </div>
  );
};

export default DataObat;
