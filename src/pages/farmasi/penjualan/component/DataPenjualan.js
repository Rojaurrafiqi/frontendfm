import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../config";
import Modal from "../../../../component/Modal";

const DataPenjualan = () => {
  // pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState();

  // menyimpan data obat untuk di looping
  const [dataPenjualanObat, setDataPenjualanObat] = useState({});

  // search
  const [searchQueryPenjualanObat, setSearchQueryPenjualanObat] = useState("");

  // modal delete
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // penyimpanan sementara id delete
  const [deleteUserId, setDeleteUserId] = useState();

  // modal tambah data
  const [isOpen, setIsOpen] = useState(false);

  // modal detail resep
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // form data obat
  const [formPenjualanObat, setFormPenjualanObat] = useState({});

  // edit form data obat
  const [editFormPenjualanObat, setEditFormPenjualanObat] = useState({});

  //modal edit
  const [isEditOpen, setIsEditOpen] = useState(false);

  // menyimpan sementara data resep by id
  const [dataById, setDataById] = useState({});

  // menyimpan id obat untuk di parse ke handleEditSubmitResepObat
  const [idObat, setIdObat] = useState();

  //all pasien ranap
  useEffect(() => {
    const fetchPenjualanObat = async () => {
      try {
        if (searchQueryPenjualanObat !== "") {
          const response = await axios.get(
            `${API_URL}/farmasi/penjualan/obat?search=${searchQueryPenjualanObat}&page=1&limit=${limit}`
          );
          setDataPenjualanObat(response.data.data);
          setTotalPages(response.data.totalPages);
        } else {
          const response = await axios.get(
            `${API_URL}/farmasi/penjualan/obat?search=${searchQueryPenjualanObat}&page=${page}&limit=${limit}`
          );
          setDataPenjualanObat(response.data.data);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPenjualanObat();
  }, [searchQueryPenjualanObat, page, dataPenjualanObat, limit]);

  //   console.log(dataPenjualanObat);

  // show select nama obat dari database obat
  const [options, setOptions] = useState();
  const fetchNamaObat = async () => {
    try {
      const response = await axios.get(`${API_URL}/farmasi/obat/nama`);
      const dataOption = response.data.map((item) => ({
        value: item.id,
        label: item.nama_obat,
      }));

      setOptions(dataOption);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNamaObat();
  }, [options]);

  const handleCloseModal = () => {
    setIsDeleteOpen(false);
    setIsOpen(false);
    setIsEditOpen(false);
    setIsDetailOpen(false);
  };

  const handleSearchDataPenjualanObatChange = (event) => {
    const data = event.target.value;
    setSearchQueryPenjualanObat(data);
  };

  // delete
  const handleShowModalDelete = (id) => {
    setIsDeleteOpen(true);
    setDeleteUserId(id);
  };

  const handleConfirmDelete = () => {
    handleDeletePenjualanObat(deleteUserId);
    setIsDeleteOpen(false);
    setDeleteUserId(null);
  };

  const handleDeletePenjualanObat = async (PasienId) => {
    try {
      await axios.delete(`${API_URL}/farmasi/obat/penjualan/${PasienId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to delete data.");
    }
  };

  const handleFormPenjualanObatChange = (event) => {
    setFormPenjualanObat({
      ...formPenjualanObat,
      [event.target.name]: event.target.value,
    });
    const { name, value } = event.target;
    setDataById((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitPenjualanObat = async (event) => {
    event.preventDefault();
    try {
      const dataNewObat = {
        ...formPenjualanObat,
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

  const handleEditSubmitPenjualanObat = async (event) => {
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

  const handleEditPenjualanObat = (idObatParse) => {
    setIsEditOpen(true);
    setIdObat(idObatParse);
    fetchPenjualanObatById(idObatParse);
  };

  const handleDetailPenjualanObat = (idObatParse) => {
    setIsDetailOpen(true);
    fetchPenjualanObatById(idObatParse);
  };

  const fetchPenjualanObatById = async (idObatParse) => {
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
    <div>
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
          Data Penjualan
        </div>
        <div className="overflow-y-auto max-h-[48vh]">
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
                  Quantity
                </th>
                <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Harga
                </th>
                <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Diskon
                </th>
                <th class=" py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metode
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
              {dataPenjualanObat.length > 0 ? (
                dataPenjualanObat.map((item, index) => (
                  <tr key={item.id}>
                    <td className="py-0.3  px-6 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="py-0.3  px-6 whitespace-nowrap">
                      {item.obat_data?.nama_obat}
                    </td>
                    <td className="py-0.3  px-6 whitespace-nowrap">
                      {item.jumlah}
                    </td>
                    <td className="py-0.3  px-6 whitespace-nowrap">
                      {item.harga_satuan}
                    </td>
                    <td className="py-0.3  px-6 whitespace-nowrap">
                      {item.diskon}
                    </td>
                    <td className="py-0.3  px-6 whitespace-nowrap">
                      {item.total_harga}
                    </td>
                    <td className="py-0.3  px-6 whitespace-nowrap">
                      {item.tanggal_penjualan}
                    </td>
                    <td className="py-0.3  px-6 whitespace-nowrap">
                      {item.metode_pembayaran}
                    </td>
                    <td className="py-0.3  px-6 whitespace-nowrap">
                      {item.informasi_pembayaran}
                    </td>

                    <td class=" py-0.3  whitespace-nowrap text-right">
                      <button
                        onClick={() => handleDetailPenjualanObat(item.id)}
                        className="ml-1 py-0.1 px-1 mr-1 my-0.2 bg-emerald text-white  hover:opacity-75"
                        type="button"
                      >
                        Detail
                      </button>
                      <button
                        onClick={() => handleEditPenjualanObat(item.id)}
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
                  <td colspan="11" className="bg-gray-200 w-full">
                    {searchQueryPenjualanObat
                      ? "No results found"
                      : "Data tidak tersedia"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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
                  Do you really want to delete this data? This process cannot be
                  undone
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
  );
};

export default DataPenjualan;
