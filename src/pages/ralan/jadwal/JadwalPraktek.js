// ambil table data dummy 10 mnt
// paste ke sini 5 mnt
// ambil api data poli, jadwal poli, dokter 30mnt
// ambil api post jadwal poli 10 mnt
// bikin edit data 15 mnt
// bikin hapus data 15 mnt
// total yang dibutuhkan untuk menyelesaikan ini adalah : 85 mnt atau 1 jam 15 mnt

// bikin pendaftaran pasien ralan 1 jam 45 mnt
// copas page ranap pada bagian daftar pasien and edit sesuai dengan kebutuhann ralan 15 mnt
// ambil api post ralan, api nama hari, nama poli, ambil poli jadwal dokter 40 mnt
// bikin fetch jadwal berdasarkan poli yang dipilih 30 mnt
// select dokter dari poli yang dipilih berdasarkan jadwal yang tersedia. 20 mnt

// total perkiraan jam untuk mengerjakan ini semua adalah 3 jam tanpa istirahat

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../config";
import { Link } from "react-router-dom";
import Sidebar from "../../templates/sidebar";
import Header from "../../templates/header";
import { useNavigate } from "react-router-dom";
import Modal from "../../../component/Modal";
import MenuRalan from "../component/MenuRalan";
import closeIcon from "../../../images/close.png";
import Select from "react-select";
import { fetchNamaDokter } from "../component/NamaDokter";

const JadwalPraktek = () => {
  // modal delete
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  // penyimpanan sementara id delete
  const [deleteUserId, setDeleteUserId] = useState();

  // pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState();

  // retrive all jadwal poli
  const [allJadwalPoliklinik, setAllJadwalPoliklinik] = useState([]);

  // kolom pencarian pasien ranap
  const [searchQueryJadwalPoliklinik, setSearchQueryJadwalPoliklinik] =
    useState("");
  const [selectPoliklinik, setSelectPoliklinik] = useState("");

  // data jabatan yang diambil dari database untuk select jabatan pada form pendaftaran user
  const [dataJabatan, setDataJabatan] = useState([]);
  // select form jabatan adalah jabatan yang dipilih pada select form jabatan
  const [selectFormJabatan, setSelectFormJabatan] = useState();

  const [isTambahJadwal, setIsTambahJadwal] = useState(false);

  //all Data Jadwal Poliklinik
  useEffect(() => {
    const fetchAllDataJadwalPoliklinik = async () => {
      try {
        if (searchQueryJadwalPoliklinik !== "") {
          const response = await axios.get(
            `${API_URL}/ralan/poliklinik/jadwal?search=${searchQueryJadwalPoliklinik}&poli=${selectPoliklinik}&page=1&limit=${limit}`
          );

          setAllJadwalPoliklinik(response.data.data);
          setTotalPages(response.data.totalPages);
        } else {
          const response = await axios.get(
            `${API_URL}/ralan/poliklinik/jadwal?search=${searchQueryJadwalPoliklinik}&poli=${selectPoliklinik}&page=${page}&limit=${limit}`
          );
          setAllJadwalPoliklinik(response.data.data);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllDataJadwalPoliklinik();
  }, [
    searchQueryJadwalPoliklinik,
    page,
    limit,
    selectPoliklinik,
    allJadwalPoliklinik,
  ]);

  const handleSearchJadwalPoliklinikChange = (event) => {
    setSearchQueryJadwalPoliklinik(event.target.value);
  };

  const handleFilterPoliklinik = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    setSelectPoliklinik(selectedValue);
    setPage(1);
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

  const handleCloseModal = () => {
    setIsDeleteOpen(false);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`${API_URL}/users/${userId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to delete user.");
    }
  };

  const [dataHari, setDataHari] = useState([]);
  const fetchHari = async () => {
    try {
      const response = await axios.get(`${API_URL}/hari/nama`);
      // console.log(response.data);
      const DataHariOptions = response.data.map((item) => ({
        value: item.id,
        label: item.list_nama_hari,
      }));
      setDataHari(DataHariOptions);
    } catch (error) {
      console.log(error);
    }
  };

  const [namaPoli, setNamaPoli] = useState([]);
  const [namaPoliOptions, setNamaPoliOptions] = useState([]);
  const fetchNamaPoliklinik = async () => {
    try {
      const response = await axios.get(`${API_URL}/ralan/poliklinik`);
      const dataOptionPoli = response.data.map((item) => ({
        value: item.id,
        label: item.nama_poliklinik,
      }));
      setNamaPoli(response.data);
      setNamaPoliOptions(dataOptionPoli);
    } catch (error) {
      console.log(error);
    }
  };

  const [namaDokter, setNamaDokter] = useState([]);
  const fetchDataNamaDokter = async () => {
    const data = await fetchNamaDokter();
    setNamaDokter(data);
  };

  useEffect(() => {
    fetchHari();
  }, []);

  useEffect(() => {
    const fetchAndSetData = async () => {
      await Promise.all([fetchNamaPoliklinik(), fetchDataNamaDokter()]);
    };

    fetchAndSetData();
  }, []);

  const [selectedPoli, setSelectedPoli] = useState(null);
  const handleFormSelectPoli = (event) => {
    setSelectedPoli(event.value);
  };

  const [selectedHari, setSelectedHari] = useState(null);
  const handleFormSelectHari = (event) => {
    setSelectedHari(event.value);
  };

  const [selectedDokter, setSelectedDokter] = useState(null);
  const handleFormSelectDokter = (event) => {
    setSelectedDokter(event.value);
  };

  const [formTambahJadwal, setFormTambahJadwal] = useState({});
  const [editFormTambahJadwal, setEditFormTambahJadwal] = useState([]);

  const handleFormTambahJadwalChange = (event) => {
    setFormTambahJadwal({
      ...formTambahJadwal,
      [event.target.name]: event.target.value,
    });

    const { name, value } = event.target;
    setEditFormTambahJadwal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   const handleSubmitRegisterUser = async (event) => {
  //     event.preventDefault();
  //     try {
  //       const dataUser = {
  //         ...formRegisterUser,
  //         jabatan: selectFormJabatan,
  //         jenis_kelamin: selectFormStatus,
  //         status: selectFormStatus,
  //       };
  //       const sendData = await axios.post(`${API_URL}/users`, dataUser);
  //       setDataUsers({});
  //       setFormRegisterUser({});
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  // console.log(namaDokter);

  return (
    <div class="h-full">
      <div class="flex">
        <div class="flex-none">
          <Sidebar />
        </div>
        <div class="flex-auto bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
          <Header />
          <MenuRalan />
          <div className="flex justify-end px-8  ">
            <button
              onClick={() => setIsTambahJadwal(!isTambahJadwal)}
              className="py-0.2 text-sm px-2 mr-1 bg-white border text-black border-black  hover:bg-emerald300"
              type="button"
            >
              TAMBAH JADWAL
            </button>
          </div>
          <div class="container flex mx-auto 2xl:w-screen px-8 pb-10">
            <div
              className={`container border border-state-300 bg-white p-5 mt-5 mb-4 ${
                isTambahJadwal ? "w-2/3" : ""
              }`}
            >
              <div className="search text-left flex">
                <div className="search text-left flex space-x-8">
                  <form>
                    <input
                      onChange={handleSearchJadwalPoliklinikChange}
                      value={searchQueryJadwalPoliklinik}
                      className="border border-black pl-0.5 py-0.4  "
                      type="text"
                      placeholder="cari dokter..."
                    />
                  </form>
                  <div className="container flex space-x-1">
                    <div className="flex space-x-1">
                      <label>Jabatan:</label>
                      <select
                        onChange={handleFilterPoliklinik}
                        className="block text-sm appearance-none  bg-white border border-gray-300 text-gray-700 py-0.5 px-2  focus:outline-none focus:bg-white focus:border-gray-500"
                      >
                        <option value="">semua</option>
                        {namaPoli.map((item) => (
                          <option value={item.id}>
                            {item.nama_poliklinik}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
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
                  Jadwal Poliklinik
                </div>
                <div className="overflow-y-auto max-h-[48vh]">
                  <table class="table-auto w-full">
                    <thead className="sticky top-0">
                      <tr>
                        <th class="px-3 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No
                        </th>
                        <th class="px-3 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Poli
                        </th>
                        <th class="px-3 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dokter
                        </th>
                        <th class="px-3 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Hari
                        </th>
                        <th class="px-3 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jam
                        </th>

                        <th class="px-3 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Aksi
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs fonst-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 ">
                      {allJadwalPoliklinik.length > 0 ? (
                        allJadwalPoliklinik.map((item, index) => (
                          <tr key={item.id}>
                            <td className="py-0.3 px-3 whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="py-0.3 px-3 whitespace-nowrap">
                              {item.poliklinik_data.nama_poliklinik}
                            </td>
                            <td className="py-0.3 px-3 whitespace-nowrap">
                              {item.dokter_data.nama_dokter}
                            </td>
                            <td className="py-0.3 px-3 whitespace-nowrap">
                              {item.hari.list_nama_hari}
                            </td>

                            <td className="py-0.3 px-3 whitespace-nowrap">
                              {item.jam}
                            </td>

                            <td class=" py-0.3 whitespace-nowrap">
                              <Link to={`/user/detail/${item.id}`}>
                                <button
                                  className="ml-1 py-0.1 px-1 mr-1 my-0.2 bg-emerald text-white  hover:opacity-75"
                                  type="button"
                                >
                                  Edit
                                </button>
                              </Link>

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
                            {searchQueryJadwalPoliklinik
                              ? "No results found"
                              : "Data Belum Tersedia"}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {isTambahJadwal && (
              <div className="container border border-state-300 w-1/3 bg-white p-3 mt-5 mb-4">
                <div className="flex justify-between mb-4">
                  <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                    Tambah Jadwal
                  </label>
                  <div className="flex  px-2 ">
                    <div className="ml-auto">
                      <a href="#" onClick={() => setIsTambahJadwal(false)}>
                        <img src={closeIcon} width="20px" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* <form onSubmit={handleSubmitRegisterUser}> */}
                <form>
                  <div className="overflow-y-auto max-h-[60vh]">
                    <div class="py-2 px-1">
                      <div class="flex flex-col md:flex-row">
                        <div class="w-full  mb-4 md:mb-0">
                          <div className="field">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                              Poli
                            </label>

                            <Select
                              options={namaPoliOptions}
                              className="text-left text-sm py-1"
                              name="id_poli"
                              onChange={(event) => handleFormSelectPoli(event)}
                            />
                          </div>
                          <div className="field">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                              Hari
                            </label>
                            <Select
                              options={dataHari}
                              className="text-left text-sm py-1"
                              name="id_hari"
                              onChange={(event) => handleFormSelectHari(event)}
                            />
                          </div>
                          <div className="field">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                              Dokter
                            </label>
                            <Select
                              options={namaDokter}
                              name="id_dokter"
                              onChange={(event) =>
                                handleFormSelectDokter(event)
                              }
                            />
                          </div>

                          <div className="field">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                              Jam
                            </label>
                            <input
                              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              name="name"
                              type="time"
                              onChange={handleFormTambahJadwalChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-end pt-2">
                    <button
                      type="submit"
                      class="px-1 py-1 bg-emerald hover:opacity-75 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                      onclick="toggleModal()"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          {/* modal delete users */}
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
  );
};

export default JadwalPraktek;
