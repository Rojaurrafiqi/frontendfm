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
  const [filterData, setFilterData] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState();

  // modal delete
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  // penyimpanan sementara id delete
  const [deleteUserId, setDeleteUserId] = useState();

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
  };

  const handleCloseModal = () => {
    setIsDeleteOpen(false);
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
                    <option value="booked">Booking</option>
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
                              <Link to={`/ranap/pasien/penanganan/${item.id}`}>
                                <button
                                  className="ml-1 py-0.1 px-1 mr-1 my-0.2 bg-emerald text-white  hover:opacity-75"
                                  type="button"
                                >
                                  Booking
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
                            Data belum tersedia
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

export default Kamar;
