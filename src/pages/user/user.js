import React, { useState, useEffect } from "react";
import Sidebar from "../../pages/templates/sidebar";
import Header from "../../pages/templates/header";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";
import Modal from "../../component/Modal";
import MenuUsers from "./component/MenuUsers";
import closeIcon from "../../images/close.png";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  // modal delete
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  // penyimpanan sementara id delete
  const [deleteUserId, setDeleteUserId] = useState();

  // search bar
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [tampilanSearch, setTampilanSearch] = useState(false);
  // penyimpanan data sesuai yang dipilih pada saat search di kolom search register
  const [datausers, setDataUsers] = useState([]);
  // post data register
  const [formData, setFormData] = useState({});
  const [simpanid, setSimpanId] = useState();

  // pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState();

  // retrive all pasien ranap
  const [allUsers, setAllUsers] = useState([]);

  // kolom pencarian pasien ranap
  const [searchQueryUsers, setSearchQueryUsers] = useState("");
  const [selectJabatan, setSelectJabatan] = useState("");
  const [selectStatus, setSelectStatus] = useState("");

  // data jabatan yang diambil dari database untuk select jabatan pada form pendaftaran user
  const [dataJabatan, setDataJabatan] = useState([]);
  // select form jabatan adalah jabatan yang dipilih pada select form jabatan
  const [selectFormJabatan, setSelectFormJabatan] = useState();

  const [isRegisterUser, setIsRegisterUser] = useState(true);

  //all users
  useEffect(() => {
    const fetchAllDataUsers = async () => {
      try {
        if (searchQueryUsers !== "") {
          const response = await axios.get(
            `${API_URL}/users/all?search=${searchQueryUsers}&jabatan=${selectJabatan}&status=${selectStatus}&page=1&limit=${limit}`
          );
          setAllUsers(response.data.data);
          setTotalPages(response.data.totalPages);
        } else {
          const response = await axios.get(
            `${API_URL}/users/all?search=${searchQueryUsers}&jabatan=${selectJabatan}&status=${selectStatus}&page=${page}&limit=${limit}`
          );
          setAllUsers(response.data.data);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllDataUsers();
  }, [searchQueryUsers, page, allUsers, limit, selectJabatan, selectStatus]);

  const handleSearchUsersChange = (event) => {
    setSearchQueryUsers(event.target.value);
  };

  const handleFilterStatus = (event) => {
    const selectedValue = event.target.value;
    setSelectStatus(selectedValue);
    setPage(1);
  };

  const handleFilterJabatan = (event) => {
    const selectedValue = event.target.value;
    setSelectJabatan(selectedValue);
    setPage(1);
  };

  const handleSelectJabatan = (event) => {
    const selectedValue = event.target.value;
    setSelectFormJabatan(selectedValue);
  };
  const [selectFormKelamin, setSelectFormKelamin] = useState("laki-laki");
  const handleSelectKelamin = (event) => {
    const selectedValue = event.target.value;
    setSelectFormKelamin(selectedValue);
  };

  const [selectFormStatus, setSelectFormStatus] = useState("aktif");
  const handleSelectStatus = (event) => {
    const selectedValue = event.target.value;
    setSelectFormStatus(selectedValue);
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

  const fetchJabatan = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/jabatan`);
      setDataJabatan(response.data);
      setSelectFormJabatan(response.data[0].nama_jabatan);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJabatan();
  }, [dataJabatan]);

  const [formRegisterUser, setFormRegisterUser] = useState({});
  const [editFormRegisterUser, setEditformRegisterUser] = useState([]);

  const handleFormRegisterChange = (event) => {
    setFormRegisterUser({
      ...formRegisterUser,
      [event.target.name]: event.target.value,
    });

    const { name, value } = event.target;
    setEditformRegisterUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitRegisterUser = async (event) => {
    event.preventDefault();
    try {
      const dataUser = {
        ...formRegisterUser,
        jabatan: selectFormJabatan,
        jenis_kelamin: selectFormStatus,
        status: selectFormStatus,
      };
      const sendData = await axios.post(`${API_URL}/users`, dataUser);
      setDataUsers({});
      setFormRegisterUser({});
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
          <div class="container flex mx-auto 2xl:w-screen px-8 pb-10">
            <div
              className={`container border border-state-300 bg-white p-5 mt-5 mb-4 ${
                isRegisterUser ? "w-2/3" : ""
              }`}
            >
              <div className="search text-left flex">
                <div className="search text-left flex space-x-8">
                  <form>
                    <input
                      onChange={handleSearchUsersChange}
                      value={searchQueryUsers}
                      className="border border-black pl-0.5 py-0.4  "
                      type="text"
                      placeholder="cari..."
                    />
                  </form>
                  <div className="container flex space-x-1">
                    <div className="flex space-x-1">
                      <label>Jabatan:</label>
                      <select
                        onChange={handleFilterJabatan}
                        className="block text-sm appearance-none  bg-white border border-gray-300 text-gray-700 py-0.5 px-2  focus:outline-none focus:bg-white focus:border-gray-500"
                      >
                        <option value="">semua</option>
                        <option value="dokter">dokter</option>
                        <option value="perawat">perawat</option>
                        <option value="apoteker">apoteker</option>
                      </select>
                    </div>
                    <div className="flex space-x-1">
                      <label>Status:</label>
                      <select
                        onChange={handleFilterStatus}
                        className="block text-sm appearance-none  bg-white border border-gray-300 text-gray-700 py-0.5 px-2  focus:outline-none focus:bg-white focus:border-gray-500"
                      >
                        <option value="">semua</option>
                        <option value="aktif">aktif</option>
                        <option value="tidak aktif">tidak aktif</option>
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
                  Data Users Rumah Sakit
                </div>
                <div className="overflow-y-auto max-h-[48vh]">
                  <table class="table-auto w-full">
                    <thead className="sticky top-0">
                      <tr>
                        <th class="px-3 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No
                        </th>
                        <th class="px-3 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nama
                        </th>
                        <th class="px-3 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jenis Kelamin
                        </th>
                        <th class="px-3 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th class="px-3 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jabatan
                        </th>
                        <th class="px-3 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>

                        <th class="px-3 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Aksi
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs fonst-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 ">
                      {allUsers.length > 0 ? (
                        allUsers.map((item, index) => (
                          <tr key={item.id}>
                            <td className="py-0.3 px-3 whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="py-0.3 px-3 whitespace-nowrap">
                              {item.name}
                            </td>
                            <td className="py-0.3 px-3 whitespace-nowrap">
                              Laki-laki
                            </td>
                            <td className="py-0.3 px-3 whitespace-nowrap">
                              {item.email}
                            </td>

                            <td className="py-0.3 px-3 whitespace-nowrap">
                              {item.jabatan}
                            </td>
                            <td className="py-0.3 px-3 whitespace-nowrap">
                              {item.status}
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
                          <td colspan="7" className="bg-gray-200 w-full">
                            {searchQueryUsers
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
            {isRegisterUser && (
              <div className="container border border-state-300 w-1/3 bg-white p-3 mt-5 mb-4">
                <div className="flex justify-between mb-4">
                  <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                    Tambah User Baru
                  </label>
                  <div className="flex  px-2 ">
                    <div className="ml-auto">
                      <a href="#" onClick={() => setIsRegisterUser(false)}>
                        <img src={closeIcon} width="20px" />
                      </a>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmitRegisterUser}>
                  <div className="overflow-y-auto max-h-[60vh]">
                    <div class="py-2 px-1">
                      <div class="flex flex-col md:flex-row">
                        <div class="w-full  mb-4 md:mb-0">
                          <div className="field">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                              Nama
                            </label>
                            <input
                              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              name="name"
                              type="text"
                              onChange={handleFormRegisterChange}
                            />
                          </div>
                          <div className="field">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                              Email
                            </label>
                            <input
                              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              name="email"
                              type="text"
                              onChange={handleFormRegisterChange}
                            />
                          </div>
                          <div className="field">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                              Password
                            </label>
                            <input
                              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              name="password"
                              type="password"
                              onChange={handleFormRegisterChange}
                            />
                          </div>
                          <div className="field">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                              Confirmasi Password
                            </label>
                            <input
                              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              name="confPassword"
                              type="password"
                              placeholder="confirmasi password"
                              onChange={handleFormRegisterChange}
                            />
                          </div>

                          <div className="field">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                              Jenis Kelamin
                            </label>
                            <select
                              onChange={handleSelectKelamin}
                              name="jenis_kelamin"
                              className="block appearance-none border  w-full py-2 px-3 text-gray-700  rounded  focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                              <option value="laki-laki">Laki-laki</option>
                              <option value="perempuan">Perempuan</option>
                            </select>
                          </div>

                          <div className="field">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                              Status
                            </label>
                            <select
                              onChange={handleSelectStatus}
                              name="status"
                              className="block appearance-none border  w-full py-2 px-3 text-gray-700  rounded  focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                              <option value="aktif">Aktif</option>
                              <option value="tidak aktif">Tidak Aktif</option>
                            </select>
                          </div>

                          <div className="field">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2">
                              Jabatan
                            </label>
                            <select
                              onChange={handleSelectJabatan}
                              name="jabatan"
                              className="block appearance-none border  w-full py-2 px-3 text-gray-700  rounded  focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                              {dataJabatan.map((item) => (
                                <option value={item.nama_jabatan}>
                                  {item.nama_jabatan}
                                </option>
                              ))}
                            </select>
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

export default User;
