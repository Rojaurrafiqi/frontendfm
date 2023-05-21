import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../config";

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
      await axios.delete(`${API_URL}/farmasi/obat/resep/${PasienId}`);
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
        <div className="overflow-y-auto max-h-[48vh]"></div>
      </div>
    </div>
  );
};

export default DataPenjualan;
