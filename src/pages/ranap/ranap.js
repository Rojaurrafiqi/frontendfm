import React, { useState, useEffect } from "react";
import Sidebar from "../templates/sidebar";
import Header from "../templates/header";
import { useNavigate } from "react-router-dom";
import Modal from "../../component/Modal";
import { API_URL } from "../../config";
import axios from "axios";
import closeIcon from "../../images/close.png";

const Ranap = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isRegisterPasienRanap, setIsRegisterPasienRanap] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [tampilanSearch, setTampilanSearch] = useState(false);

  const [datapasien, setDataPasien] = useState([]);
  const [formData, setFormData] = useState({});
  const [simpanid, setSimpanId] = useState();
  const [deleteUserId, setDeleteUserId] = useState();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState();

  const [allPasienRanap, setAllPasienRanap] = useState([]);
  const [searchQueryPasienRanap, setSearchQueryPasienRanap] = useState("");

  // livesearch
  useEffect(() => {
    if (searchQuery !== "") {
      fetch(`${API_URL}/igd/pasien?search=${searchQuery}&page=&limit=5`)
        .then((response) => response.json())
        .then((data) => setSearchResult(data.data))
        .catch((error) => console.error(error));
    } else {
      setSearchResult([]);
    }
  }, [searchQuery]);

  //all pasien ranap
  useEffect(() => {
    const fetchAllDataPasienRanap = async () => {
      try {
        if (searchQueryPasienRanap !== "") {
          const response = await axios.get(
            `${API_URL}/ranap/pasien/all?search=${searchQueryPasienRanap}&page=1&limit=${limit}`
          );
          setAllPasienRanap(response.data.data);
          setTotalPages(response.data.totalPages);
        } else {
          const response = await axios.get(
            `${API_URL}/ranap/pasien/all?search=${searchQueryPasienRanap}&page=${page}&limit=${limit}`
          );
          setAllPasienRanap(response.data.data);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllDataPasienRanap();
  }, [searchQueryPasienRanap, page, limit]);

  console.log(totalPages);
  console.log(allPasienRanap);

  const handleDaftar = () => {
    setIsRegisterPasienRanap(true);
  };

  const handleCloseModal = () => {
    setIsDeleteOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `${API_URL}/igd/pasien?search=${searchQuery}&page=&limit=10`
      );
      setSearchResult(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchPasienRanapChange = (event) => {
    setSearchQueryPasienRanap(event.target.value);
  };
  const handleklik = (event, id) => {
    event.preventDefault();
    setSearchResult([]);
    setSearchQuery("");
    setTampilanSearch(true);
    fetch(`${API_URL}/igd/pasien/search/${id}`)
      .then((response) => response.json())
      .then((datak) => {
        setDataPasien([datak]);
        setSimpanId(parseInt(datak.id));
      })
      .catch((error) => console.log(error));
  };

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleRegisterPasien = async (event) => {
    event.preventDefault();
    const dataToSend = {
      ...formData,
      id_pasien_rm: simpanid,
    };
    try {
      const response = await axios.post(
        `${API_URL}/ranap/pasien/register`,
        dataToSend
      );
      setTampilanSearch(false);
      setIsRegisterPasienRanap(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseTampilan = () => {
    setIsRegisterPasienRanap(false);
  };

  const handleShowModalDelete = (id) => {
    setIsDeleteOpen(true);
    setDeleteUserId(id);
  };

  const handleDeleteUser = async (PasienId) => {
    try {
      await axios.delete(`${API_URL}/ranap/pasien/${PasienId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to delete user.");
    }
  };

  const handleConfirmDelete = () => {
    handleDeleteUser(deleteUserId);
    setIsDeleteOpen(false);
    setDeleteUserId(null);
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
              <button
                className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
                onClick={handleDaftar}
              >
                DAFTAR
              </button>
              <button
                className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
                onClick={handleBack}
              >
                KAMAR
              </button>
              <button
                className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
                onClick={handleBack}
              >
                JADWAL
              </button>
              <button
                className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
                onClick={handleBack}
              >
                REPORT
              </button>
            </div>
          </div>

          {isRegisterPasienRanap && (
            <div class="bg-white mx-8 py-1">
              <div className="flex mt-1 px-2 ">
                <div className="ml-auto">
                  <a href="#" onClick={handleCloseTampilan}>
                    <img src={closeIcon} width="20px" />
                  </a>
                </div>
              </div>
              <div className="search text-left  flex px-2">
                <form onSubmit={handleSubmit}>
                  <input
                    className="border border-black  pl-0.5 py-0.4  "
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Cari data pasien..."
                    autoFocus
                  />
                  <button className="ml-1 py-0.2 px-1 bg-emerald text-white rounded hover:opacity-75">
                    Submit
                  </button>
                </form>
              </div>

              <ul className="text-left px-2 mb-2  w-1/6">
                {searchResult.map((item) => (
                  <li key={item.id}>
                    <div className="container w-30 bg-white border border-state-300">
                      <a
                        href="#"
                        className="hover:bg-grey-500 pr-5 pl-1 py-1"
                        onClick={(event) => handleklik(event, item.id)}
                      >
                        <span className="font-sm"> {item.nama_lengkap} </span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              {tampilanSearch && (
                <div className="container mx-auto px-2">
                  <div className="flex">
                    <div className="container border border-state-300 w-2/3 mr-5 p-2">
                      {datapasien.map((pasien) => (
                        <div className="text-left" key={pasien.id}>
                          <p>no rm :{pasien.no_rm}</p>
                          <p>nik :{pasien.no_kitas}</p>
                          <p>nama :{pasien.nama_lengkap}</p>
                          <p>tanggal lahir :{pasien.tanggal_lahir}</p>
                          <p>kelamin :{pasien.kelamin}</p>
                        </div>
                      ))}
                    </div>
                    <div className="container border border-state-300 w-2/3">
                      <form onSubmit={handleRegisterPasien}>
                        <div className="container text-left ml-2 mt-4 mr-0">
                          <tr>
                            <td className="pr-1 ml-1">Tanggal Masuk</td>
                            <td className="pb-1">
                              <input
                                type="text"
                                name="tanggal_masuk"
                                onChange={handleFormChange}
                                className="border border-black ml-1 mx-32 pr-0.5 pl-0.5 py-0.4 w-full"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pr-1">No Kamar</td>
                            <td className="pb-1">
                              <input
                                type="text"
                                name="no_kamar"
                                onChange={handleFormChange}
                                className="border border-black ml-1 mx-28  pl-0.5 py-0.4 w-full"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pr-1">Dokter</td>
                            <td className="pb-1">
                              <input
                                type="text"
                                name="dokter"
                                onChange={handleFormChange}
                                className="border border-black mx-28 ml-1 pl-0.5 py-0.4 w-full"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pr-1">Perawat</td>
                            <td className="pb-1">
                              <input
                                type="text"
                                name="perawat"
                                onChange={handleFormChange}
                                className="border border-black mx-28 ml-1 pl-0.5 py-0.4 w-full"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pr-1">Pembayaran</td>
                            <td className="pb-1">
                              <input
                                type="text"
                                name="pembayaran_ranap"
                                onChange={handleFormChange}
                                className="border border-black mx-28 ml-1 pl-0.5 py-0.4 w-full"
                              />
                            </td>
                          </tr>
                        </div>
                        <div className="flex justify-end pb-1 pt-1">
                          <button className="ml-1 mr-2 mb-2 py-0.2 px-1 bg-emerald text-white rounded hover:opacity-75">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div class="container mx-auto 2xl:w-screen px-8 pb-10">
            <div className="container border border-state-300 bg-white p-5 mt-5 mb-4 ">
              <div className="search text-left flex">
                <div className="search text-left flex ">
                  <form>
                    <input
                      onChange={handleSearchPasienRanapChange}
                      value={searchQueryPasienRanap}
                      className="border border-black pl-0.5 py-0.4  "
                      type="text"
                      placeholder="Cari pasien rawat inap..."
                    />
                  </form>
                </div>
                <div className="container mx-auto w-full flex justify-end ">
                  <button
                    onClick={() => setPage((page) => page - 1)}
                    // disabled={page === 0}
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
                    // disabled={page === totalPages - 1}
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
                  Daftar Pasien Rawat Inap
                </div>
                <div className="overflow-y-auto max-h-[48vh]">
                  <table class="table-auto w-full">
                    <thead className="sticky top-0">
                      <tr>
                        <th class="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No RM
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nama Pasien
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jenis Kelamin
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No Kamar
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No Bad
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tanggal Masuk
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dokter
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Perawat
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Aksi
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs fonst-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 ">
                      {allPasienRanap.length > 0 ? (
                        allPasienRanap.map((item, index) => (
                          <tr key={item.id}>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {item.pasien_rm.no_rm}
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {item.pasien_rm.nama_lengkap}
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {item.pasien_rm.kelamin}
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {item.no_kamar}
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              01
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {item.tanggal_masuk}
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {item.dokter}
                            </td>
                            <td className="class=py-0.3 px-6 whitespace-nowrap">
                              {item.perawat}
                            </td>
                            <td class=" py-0.3 whitespace-nowrap">
                              <button
                                className="ml-1 py-0.1 px-1 mr-1 my-0.2 bg-emerald text-white  hover:opacity-75"
                                type="button"
                              >
                                Tangani
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
                          <td colspan="11" className="bg-gray-200 w-full">
                            {searchQueryPasienRanap
                              ? "No results found"
                              : "Belum ada pasien yang sedang menjalani rawat inap"}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranap;
