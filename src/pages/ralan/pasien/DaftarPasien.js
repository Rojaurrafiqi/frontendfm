import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../../component/Modal";
import { API_URL } from "../../../config";
import { Link } from "react-router-dom";

const DaftarPasien = () => {
  // modal delete
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  // penyimpanan sementara id delete
  const [deleteUserId, setDeleteUserId] = useState();
  // page register pasien
  const [isRegisterPasienRalan, setIsRegisterPasienRalan] = useState(false);
  // search bar
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [tampilanSearch, setTampilanSearch] = useState(false);
  // penyimpanan data sesuai yang dipilih pada saat search di kolom search register
  const [datapasien, setDataPasien] = useState([]);
  // post data register
  const [formData, setFormData] = useState({});
  const [simpanid, setSimpanId] = useState();

  // pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState();

  // retrive all pasien Ralan
  const [allPasienRalan, setAllPasienRalan] = useState([]);
  // kolom pencarian pasien Ralan
  const [searchQueryPasienRalan, setSearchQueryPasienRalan] = useState("");

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
    const fetchAllDataPasienRalan = async () => {
      try {
        if (searchQueryPasienRalan !== "") {
          const response = await axios.get(
            `${API_URL}/ralan/pasien/all?search=${searchQueryPasienRalan}&page=1&limit=${limit}`
          );
          setAllPasienRalan(response.data.data);
          setTotalPages(response.data.totalPages);
        } else {
          const response = await axios.get(
            `${API_URL}/ralan/pasien/all?search=${searchQueryPasienRalan}&page=${page}&limit=${limit}`
          );
          setAllPasienRalan(response.data.data);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllDataPasienRalan();
  }, [searchQueryPasienRalan, page, allPasienRalan, limit]);

  const handleDaftar = () => {
    setIsRegisterPasienRalan(true);
  };

  const handleCloseModal = () => {
    setIsDeleteOpen(false);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchPasienRalanChange = (event) => {
    setSearchQueryPasienRalan(event.target.value);
  };

  const handleCloseTampilan = () => {
    setIsRegisterPasienRalan(false);
  };

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
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

  const handleRegisterPasien = async (event) => {
    event.preventDefault();
    const dataToSend = {
      ...formData,
      id_pasien_rm: simpanid,
    };
    const statusKamar = {
      status_kamar: "occupied",
    };
    try {
      const [response1, response2] = await Promise.all([
        axios.post(`${API_URL}/ranap/pasien/register`, dataToSend),
        axios.patch(`${API_URL}/ranap/kamar/status/`, statusKamar),
      ]);

      setTampilanSearch(false);
      setIsRegisterPasienRalan(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (PasienId) => {
    try {
      await axios.delete(`${API_URL}/ranap/pasien/${PasienId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to delete user.");
    }
  };

  // console.log(allPasienRalan);

  return (
    <div class="container mx-auto 2xl:w-screen px-8 pb-10">
      <div className="container border border-state-300 bg-white p-3 mt-5  ">
        <div className="flex justify-end mb-4">
          <button
            className="py-0.2 text-sm  px-1 mr-1 bg-white border text-black border-black  hover:bg-emerald300"
            type="button"
          >
            DAFTAR PASIEN
          </button>
        </div>
        <div className="search text-left flex">
          <div className="search text-left flex ">
            <form>
              <input
                //   onChange={handleSearchPasienRanapChange}
                //   value={searchQueryPasienRanap}
                className="border border-black pl-0.5 py-0.4  "
                type="text"
                placeholder="Cari pasien rawat inap..."
              />
            </form>
          </div>
          <div className="container mx-auto w-full flex justify-end ">
            <button
              // onClick={() => setPage((page) => page - 1)}
              // hidden={page === 1}
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
              // onClick={() => {
              //   setPage((page) => page + 1);
              // }}
              // hidden={page === totalPages}
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
            Pasien Rawat Jalan
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
                    Poli
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dokter
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jenis Pasien
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No Antrian
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Konsultasi
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs fonst-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 ">
                {allPasienRalan.length > 0 ? (
                  allPasienRalan.map((item, index) => (
                    <tr key={item.id}>
                      <td className="py-0.3 px-6 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="py-0.3 px-6 whitespace-nowrap">
                        {item.pasien_rm.no_rm}
                      </td>
                      <td className="py-0.3 px-6 whitespace-nowrap">
                        {item.pasien_rm.nama_lengkap}
                      </td>
                      <td className="py-0.3 px-6 whitespace-nowrap">
                        {item.pasien_rm.kelamin}
                      </td>
                      <td className="py-0.3 px-6 whitespace-nowrap">
                        {item.poliklinik_ralan.nama_poliklinik}
                      </td>
                      <td className="py-0.3 px-6 whitespace-nowrap">
                        {item.dokter.nama_dokter}
                      </td>
                      <td className="py-0.3 px-6 whitespace-nowrap">
                        {item.jenis_pasien}
                      </td>
                      <td className="py-0.3 px-6 whitespace-nowrap">
                        {item.no_antrian}
                      </td>
                      <td className="py-0.3 px-6 whitespace-nowrap">
                        {item.jenis_konsultasi}
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
                      {searchQueryPasienRalan
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
    </div>
  );
};

export default DaftarPasien;
