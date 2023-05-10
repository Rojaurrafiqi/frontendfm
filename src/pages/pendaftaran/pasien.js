import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useSWR from "swr";
import Modal from "../../component/Modal";

// import images
import editIcon from "../../images/edit.png";
import deleteIcon from "../../images/delete.png";
import detailIcon from "../../images/detail.png";
import closeIcon from "../../images/close.png";
import { Link } from "react-router-dom";

const Pasien = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [editData, setEditData] = useState({});

  const [nilaikitas, setNilaiKitas] = useState("KTP");
  const [editKitas, setEditKitas] = useState({ kitas: "" });

  const [pilihkelamin, setPilihKelamin] = useState("Laki-laki");
  const [editkelamin, setEditKelamin] = useState({ kelamin: "" });

  // dependency Dropdown wilayah indonesia
  const [provinsi, setProvinsi] = useState([]);
  // const [editprovinsi, setEditProvinsi] = useState([]);
  const [kabupatenKota, setKabupatenKota] = useState([]);
  // const [editkabupatenkota, setEditKabupatenKota] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [desa, setDesa] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  // const [selectedEditProvinsi, setSelectedEditProvinsi] = useState("");
  const [selectedKabupatenKota, setSelectedKabupatenKota] = useState("");
  const [selectedKecamatan, setSelectedKecamatan] = useState("");
  const [selectedDesa, setSelectedDesa] = useState("");

  const [pjProvinsi, setPjProvinsi] = useState([]);
  const [pjKabupatenKota, setPjkabupatenKota] = useState([]);
  const [pjKecamatan, setPjkecamatan] = useState([]);
  const [pjDesa, setPjdesa] = useState([]);

  const [pjSelectedProvinsi, setSelectedPjProvinsi] = useState("");
  const [pjSelectedKabupatenKota, setSelectedPjKabupatenKota] = useState("");
  const [pjSelectedKecamatan, setSelectedPjKecamatan] = useState("");
  const [pjSelectedDesa, setSelectedPjDesa] = useState("");
  // const [pasiendetail, setPasienDetail] = useState();
  const [pjdetail, setPjDetail] = useState();

  const [pilihalamatpj, setPilihAlamatPj] = useState("berbeda");
  const [shouldDisableSelect, setShouldDisableSelect] = useState();
  const [shouldHiddenSelect, setShouldHiddenSelect] = useState();

  useEffect(() => {
    const fetchProvinsi = async () => {
      const response = await fetch(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
      );
      const data = await response.json();
      setProvinsi(data);
      setPjProvinsi(data);
    };
    fetchProvinsi();
  }, []);

  useEffect(() => {
    const fetchKabupatenKota = async () => {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinsi}.json`
      );
      const data = await response.json();
      setKabupatenKota(data);
    };
    if (selectedProvinsi) {
      fetchKabupatenKota();
    }
  }, [selectedProvinsi]);

  useEffect(() => {
    const fetchKecamatan = async () => {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedKabupatenKota}.json`
      );
      const data = await response.json();
      setKecamatan(data);
    };
    if (selectedKabupatenKota) {
      fetchKecamatan();
    }
  }, [selectedKabupatenKota]);

  useEffect(() => {
    const fetchDesa = async () => {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedKecamatan}.json`
      );
      const data = await response.json();
      setDesa(data);
    };
    if (selectedKecamatan) {
      fetchDesa();
    }
  }, [selectedKecamatan]);

  const handleProvinsiChange = (e) => {
    setSelectedProvinsi(e.target.value);
    setSelectedKabupatenKota("");
  };

  const handleKabupatenKotaChange = (e) => {
    setSelectedKabupatenKota(e.target.value);
  };

  const handleKecamatanChange = (e) => {
    setSelectedKecamatan(e.target.value);
  };

  const handleDesaChange = (e) => {
    setSelectedDesa(e.target.value);
  };

  //   dependency dropdown pj
  useEffect(() => {
    const fetchKabupatenKota = async () => {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${pjSelectedProvinsi}.json`
      );
      const data = await response.json();
      setPjkabupatenKota(data);
    };
    if (pjSelectedProvinsi) {
      fetchKabupatenKota();
    }
  }, [pjSelectedProvinsi]);

  useEffect(() => {
    const fetchKecamatan = async () => {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${pjSelectedKabupatenKota}.json`
      );
      const data = await response.json();
      setPjkecamatan(data);
    };
    if (pjSelectedKabupatenKota) {
      fetchKecamatan();
    }
  }, [pjSelectedKabupatenKota]);

  useEffect(() => {
    const fetchDesa = async () => {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${pjSelectedKecamatan}.json`
      );
      const data = await response.json();
      setPjdesa(data);
    };
    if (pjSelectedKecamatan) {
      fetchDesa();
    }
  }, [pjSelectedKecamatan]);

  const handlePjProvinsiChange = (e) => {
    setSelectedPjProvinsi(e.target.value);
    setSelectedPjKabupatenKota("");
  };

  const handlePjKabupatenKotaChange = (e) => {
    setSelectedPjKabupatenKota(e.target.value);
  };

  const handlePjKecamatanChange = (e) => {
    setSelectedPjKecamatan(e.target.value);
  };

  const handlePjDesaChange = (e) => {
    setSelectedPjDesa(e.target.value);
  };

  //   end dari dependency dropdown wilayah indonesia

  // state select option pendidikan -----------------------------------------------
  const [pekerjaan, setPekerjaan] = useState([]);
  const [selectedPekerjaan, setSelectedPekerjaan] = useState();
  const [editPekerjaan, setEditPekerjaan] = useState({});

  // tangkap data api pekerjaan menggunakan useEffect
  useEffect(() => {
    fetch("http://localhost:5000/pekerjaan")
      .then((response) => response.json())
      .then((data) => setPekerjaan(data));
  }, []);

  // handle setiap ada perubahan value pekerjaan
  const handleChangePekerjaan = (event) => {
    setSelectedPekerjaan(event.target.value);
  };
  const handleChangeEditPekerjaan = (event) => {
    setEditPekerjaan(event.target.value);
  };

  // state select option pendidikan -----------------------------------------------
  const [pendidikan, setPendidikan] = useState([]);
  const [selectedPendidikan, setSelectedPendidikan] = useState();
  const [editPendidikan, setEditPendidikan] = useState({});

  // tangkap data api pendidikan menggunakan useEffect
  useEffect(() => {
    fetch("http://localhost:5000/pendidikan")
      .then((response) => response.json())
      .then((data) => setPendidikan(data));
  }, []);

  // handle setiap ada perubahan value pekerjaan
  const handleChangePendidikan = (event) => {
    setSelectedPendidikan(event.target.value);
  };
  const handleChangeEditPendidikan = (event) => {
    setEditPendidikan(event.target.value);
  };

  // state select option Agama -----------------------------------------------
  const [agama, setAgama] = useState([]);
  const [selectedAgama, setSelectedAgama] = useState();
  const [editAgama, setEditAgama] = useState({});

  // tangkap data api pendidikan menggunakan useEffect
  useEffect(() => {
    fetch("http://localhost:5000/agama")
      .then((response) => response.json())
      .then((data) => setAgama(data));
  }, []);

  // handle setiap ada perubahan value pekerjaan
  const handleChangeAgama = (event) => {
    setSelectedAgama(event.target.value);
  };
  const handleChangeEditAgama = (event) => {
    setEditAgama(event.target.value);
  };

  // state select option Status Kawin -----------------------------------------------
  const [statusKawin, setStatusKawin] = useState([]);
  const [selectedStatusKawin, setSelectedStatusKawin] = useState();
  const [editStatusKawin, setEditStatusKawin] = useState({});

  // tangkap data api pendidikan menggunakan useEffect
  useEffect(() => {
    fetch("http://localhost:5000/statuskawin")
      .then((response) => response.json())
      .then((data) => setStatusKawin(data));
  }, []);

  // handle setiap ada perubahan value pekerjaan
  const handleChangeStatusKawin = (event) => {
    setSelectedStatusKawin(event.target.value);
  };
  const handleChangeEditStatusKawin = (event) => {
    setEditStatusKawin(event.target.value);
  };

  // state select option Status Golongan Darah -----------------------------------------------
  const [golongandarah, setGolonganDarah] = useState([]);
  const [selectedGolonganDarah, setSelectedGolonganDarah] = useState();
  const [editGolonganDarah, setEditGolonganDarah] = useState({});

  // tangkap data api pendidikan menggunakan useEffect
  useEffect(() => {
    fetch("http://localhost:5000/golongandarah")
      .then((response) => response.json())
      .then((data) => setGolonganDarah(data));
  }, []);

  // handle setiap ada perubahan value pekerjaan
  const handleChangeGolonganDarah = (event) => {
    setSelectedGolonganDarah(event.target.value);
  };
  const handleChangeEditGolonganDarah = (event) => {
    setEditGolonganDarah(event.target.value);
  };

  // delete
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // search and pagination state
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  // const [submittedQuery, setSubmittedQuery] = useState(null);
  // const [totalRows, setTotalRows] = useState(0);
  // const [totalPage, setTotalPage] = useState(0);

  // const {mutate} = useSWRConfig();

  const [responseTime, setResponseTime] = useState(null);
  const hasil_response = responseTime / 1000;

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, mutate } = useSWR(
    `http://localhost:5000/igd/pasien?search=${searchQuery}&page=${page}&limit=${limit}`,
    fetcher,
    {
      onSuccess: () => {
        const end = performance.now();
        setResponseTime(end - start);
      },
    }
  );

  const start = performance.now();

  if (error) return <div>Error loading data.</div>;
  if (!data) return <div>Loading...</div>;

  // kode delete user
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/rm/${userId}`);
      mutate();
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

  const handleShowModal = (userId) => {
    setDeleteUserId(userId);
    setIsDeleteOpen(true);
  };

  const resetModal = () => {
    setIsOpen(false);
    setFormData({});
    setSelectedAgama([]);
    setSelectedGolonganDarah([]);
    setSelectedStatusKawin([]);
    setSelectedPendidikan([]);
    setSelectedPekerjaan([]);
    setSelectedProvinsi("");
    setSelectedKabupatenKota("");
    setSelectedKecamatan("");
    setSelectedDesa("");
    setSelectedPjProvinsi("");
    setSelectedPjKabupatenKota("");
    setSelectedPjKecamatan("");
    setSelectedPjDesa("");
    setPjDetail("");
  };

  // handle submit data
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        kitas: nilaikitas,
        kelamin: pilihkelamin,
        pekerjaan: selectedPekerjaan,
        agama: selectedAgama,
        golongan_darah: selectedGolonganDarah,
        pendidikan: selectedPendidikan,
        status_kawin: selectedStatusKawin,
        alamat_pasien_provinsi: selectedProvinsi,
        alamat_pasien_kota: selectedKabupatenKota,
        alamat_pasien_kec: selectedKecamatan,
        alamat_pasien_desa: selectedDesa,
        alamat_pj_provinsi: pjSelectedProvinsi,
        alamat_pj_kota: pjSelectedKabupatenKota,
        alamat_pj_kec: pjSelectedKecamatan,
        alamat_pj_desa: pjSelectedDesa,
        alamat_pj_detail: pjdetail,
      };
      const response = await axios.post("http://localhost:5000/rm", dataToSend);

      // setIsOpen(false);
      resetModal();
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionKitasChange = (event) => {
    setNilaiKitas(event.target.value);

    const { name, value } = event.target;
    setEditKitas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOptionKelaminChange = (event) => {
    setPilihKelamin(event.target.value);

    // setPilihKelamin(value);
    const { name, value } = event.target;
    setEditKelamin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // handle change data
  const handleFormChange = (event) => {
    // setPjDetail(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });

    const { name, value } = event.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // punya alamat pj
  const handleAlamatPjChange = (e) => {
    setPilihAlamatPj(e.target.value);
    if (e.target.value === "sama") {
      setSelectedPjProvinsi(selectedProvinsi);
      setSelectedPjKabupatenKota(selectedKabupatenKota);
      setSelectedPjKecamatan(selectedKecamatan);
      setSelectedPjDesa(selectedDesa);
      setShouldDisableSelect(true);
      setShouldHiddenSelect(true);
      setPjDetail(document.getElementById("alamat_pasien_detail").value);
    } else {
      setShouldDisableSelect(false);
      setShouldHiddenSelect(false);
      setPjDetail("");
    }
  };

  const handlePjDetailChange = (e) => {
    setPjDetail(e.target.value);
  };

  // end of punya alamat pj

  // edit data
  const handleEdit = (data) => {
    setEditData(data);
    setEditKitas(data);
    setEditKelamin(data);
    setEditPekerjaan(data.pekerjaan);
    setEditAgama(data.agama);
    setEditGolonganDarah(data.golongan_darah);
    setEditStatusKawin(data.status_kawin);
    setEditPendidikan(data.pendidikan);
    // setEditProvinsi(data.alamat_pasien_provinsi);
    // setEditKabupatenKota(data.alamat_pasien_kota);
    setIsEditOpen(true);
  };

  // mengirim request ke API untuk mengedit data
  const handleEditSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedData = {
        ...editData,
        kitas: nilaikitas,
        kelamin: pilihkelamin,
        pekerjaan: editPekerjaan,
        agama: editAgama,
        golongan_darah: editGolonganDarah,
        pendidikan: editPendidikan,
        status_kawin: editStatusKawin,
      };
      const response = await axios.patch(
        `http://localhost:5000/rm/${editData.id}`,
        updatedData
      );
      // console.log(response.data);
      setIsEditOpen(false);
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  // punya modal
  const handleCloseModal = () => {
    setIsOpen(false);
    setIsEditOpen(false);
    setIsDeleteOpen(false);
  };

  return (
    <div className="pasien">
      <div className="judul">
        <h1 className="font-sans text-2xl text-left  font-semibold  ">
          Data Rekam Medis Pasien
        </h1>

        {/* modal create */}

        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <div class="bg-white rounded-lg w-11/12 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
            <div class="flex justify-between px-4 py-2">
              <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
                Tambah Data Pasien
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

            <form onSubmit={handleSubmit}>
              <div class="bg-gray-50 p-6">
                <div class="flex flex-col md:flex-row">
                  <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <label class="block text-gray-700 text-sm text-left font-bold mb-2 italic">
                      Data Pasien
                    </label>

                    <div className="container bg-white border border-state-300 p-2">
                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Kitas
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="no_kitas"
                          placeholder="Masukkan Nomor Indentitas"
                          onChange={handleFormChange}
                        />
                      </div>

                      <div className="field my-2 flex">
                        <div class="flex items-center mr-2">
                          <input
                            id="kitas1"
                            name="kitas"
                            type="radio"
                            checked={nilaikitas === "KTP"}
                            class="form-radio h-4 w-4 text-indigo-600"
                            value="KTP"
                            onChange={handleOptionKitasChange}
                          />
                          <label for="kitas1" class="ml-1 text-gray-700">
                            KTP
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="kitas2"
                            name="kitas"
                            type="radio"
                            checked={nilaikitas === "Paspor"}
                            class="form-radio h-4 w-4 text-indigo-600"
                            onChange={handleOptionKitasChange}
                            value="Paspor"
                          />
                          <label for="kitas2" class="ml-1 text-gray-700">
                            Paspor
                          </label>
                        </div>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Nama Lengkap
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="nama_lengkap"
                          type="text"
                          placeholder="Nama Lengkap"
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          TTL
                        </label>
                        <div className="flex">
                          <input
                            class="appearance-none border rounded w-2/3  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tempat_lahir"
                            name="tempat_lahir"
                            type="text"
                            placeholder="Tempat Lahir"
                            onChange={handleFormChange}
                          />
                          <input
                            class="appearance-none border rounded w-1/3  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-datepicker"
                            name="tanggal_lahir"
                            type="date"
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>
                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Jenis Kelamin
                        </label>
                        <div className="flex">
                          <div class="flex items-center mr-2">
                            <input
                              id="laki-laki"
                              name="kelamin"
                              value="Laki-laki"
                              type="radio"
                              checked={pilihkelamin === "Laki-laki"}
                              class="form-radio h-4 w-4 text-indigo-600"
                              onChange={handleOptionKelaminChange}
                            />
                            <label for="kelamin1" class="ml-1 text-gray-700">
                              Laki-laki
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="perempuan"
                              name="kelamin"
                              value="Perempuan"
                              type="radio"
                              checked={pilihkelamin === "Perempuan"}
                              class="form-radio h-4 w-4 text-indigo-600"
                              onChange={handleOptionKelaminChange}
                            />
                            <label for="kelamin2" class="ml-1 text-gray-700">
                              Perempuan
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Golongan Darah
                        </label>
                        <select
                          value={selectedGolonganDarah}
                          onChange={handleChangeGolonganDarah}
                          name="golongandarah"
                          className="appearance-none border rounded w-full  py-2  mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="" className="py-5">
                            Pilih Golongan Darah
                          </option>
                          {golongandarah.map((option) => (
                            <option
                              key={option.id}
                              value={option.list_golongan_darah}
                            >
                              {option.list_golongan_darah}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          No HP
                        </label>
                        <input
                          class="appearance-none border rounded w-full  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="kontak_pasien"
                          name="kontak_pasien"
                          type="text"
                          placeholder=""
                          onChange={handleFormChange}
                        />
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Agama
                        </label>

                        <select
                          value={selectedAgama}
                          onChange={handleChangeAgama}
                          name="agama"
                          className="appearance-none border rounded w-full  py-2  mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="" className="py-5">
                            Pilih Agama
                          </option>
                          {agama.map((option) => (
                            <option key={option.id} value={option.list_agama}>
                              {option.list_agama}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Status Kawin
                        </label>
                        {/* <input class="appearance-none border rounded w-full  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="status_kawin" name='status_kawin' type="text" onChange={handleFormChange} /> */}
                        <select
                          value={selectedStatusKawin}
                          onChange={handleChangeStatusKawin}
                          name="statuskawin"
                          className="appearance-none border rounded w-full  py-2  mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="" className="py-5">
                            Pilih Status Perkawinan
                          </option>
                          {statusKawin.map((option) => (
                            <option
                              key={option.id}
                              value={option.list_status_kawin}
                            >
                              {option.list_status_kawin}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Pendidikan
                        </label>
                        {/* <input class="appearance-none border rounded w-full  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="pendidikan" name='pendidikan' type="text" onChange={handleFormChange} /> */}
                        <select
                          value={selectedPendidikan}
                          id="pendidikan"
                          name="pendidikan"
                          onChange={handleChangePendidikan}
                          className="appearance-none border rounded w-full  py-2  mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="" className="py-5">
                            Pilih Pendidikan
                          </option>
                          {pendidikan.map((option) => (
                            <option
                              key={option.id}
                              value={option.list_pendidikan}
                            >
                              {option.list_pendidikan}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Pekerjaan
                        </label>
                        {/* <input class="appearance-none border rounded w-full  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="pekerjaan" name='pekerjaan' type="text" onChange={handleFormChange} />
             */}
                        <select
                          value={selectedPekerjaan}
                          onChange={handleChangePekerjaan}
                          name="pekerjaan"
                          className="appearance-none border rounded w-full  py-2  mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="" className="py-5">
                            Pilih Pekerjaan
                          </option>
                          {pekerjaan.map((option) => (
                            <option
                              key={option.id}
                              value={option.nama_pekerjaan}
                            >
                              {option.nama_pekerjaan}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="w-full md:w-1/2 px-4">
                    <label class="block text-gray-700 text-sm text-left font-bold mb-2 italic">
                      Data Keluarga Pasien
                    </label>
                    <div className="container bg-white border border-state-300 p-2">
                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Kontak yang dapat dihubungi
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="kontak_pj"
                          name="kontak_pj"
                          type="text"
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="border border-state-300 p-2">
                        <div className="field my-2">
                          <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                            Nama penanggungjawab
                          </label>
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nama_penanggungjawab"
                            name="nama_penanggungjawab"
                            type="text"
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>
                    </div>
                    <label class="block text-gray-700 text-sm text-left font-bold mb-2 mt-4 italic">
                      Alamat
                    </label>
                    <div className="container bg-white border border-state-300 p-2">
                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Alamat Pasien
                        </label>

                        <select
                          value={selectedProvinsi}
                          onChange={handleProvinsiChange}
                          name="alamat_pasien_provinsi"
                          className="appearance-none border rounded w-full  py-2  mr-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="" className="py-5">
                            Pilih Provinsi
                          </option>
                          {provinsi.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>

                        {selectedProvinsi && (
                          <select
                            value={selectedKabupatenKota}
                            onChange={handleKabupatenKotaChange}
                            name="alamat_pasien_kota"
                            className="appearance-none border rounded w-full mb-2 py-2  mr-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          >
                            <option value="" className="py-5">
                              Pilih Kabupaten/kota
                            </option>
                            {kabupatenKota.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        )}

                        {selectedKabupatenKota && (
                          <select
                            value={selectedKecamatan}
                            onChange={handleKecamatanChange}
                            name="alamat_pasien_kec"
                            className="appearance-none border rounded w-full  py-2  mr-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          >
                            <option value="" className="py-5">
                              Pilih Kabupaten/kota
                            </option>
                            {kecamatan.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        )}

                        {selectedKecamatan && (
                          <select
                            value={selectedDesa}
                            onChange={handleDesaChange}
                            name="alamat_pasien_desa"
                            className="appearance-none border rounded w-full  py-2  mr-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          >
                            <option value="" className="py-5">
                              Pilih Kabupaten/kota
                            </option>
                            {desa.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        )}

                        {selectedDesa && (
                          <input
                            class="appearance-none bg-white border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="alamat_pasien_detail"
                            placeholder="alamat detail pasien"
                            name="alamat_pasien_detail"
                            type="text"
                            onChange={handleFormChange}
                          />
                        )}
                      </div>
                      <div className="border border-state-300 p-2">
                        <div className="field my-2">
                          <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                            Alamat penanggungjawab
                          </label>
                          <div className="container flex mb-2">
                            <div class="flex items-center mr-2">
                              <input
                                id="sama"
                                name="pilihan"
                                value="sama"
                                type="radio"
                                checked={pilihalamatpj === "sama"}
                                class="form-radio h-4 w-4 text-indigo-600"
                                onChange={handleAlamatPjChange}
                              />
                              <label class="ml-1 text-gray-700">
                                Sama dengan pasien
                              </label>
                            </div>
                            <div class="flex items-center mr-2">
                              <input
                                id="berbeda"
                                name="pilihan"
                                value="berbeda"
                                type="radio"
                                checked={pilihalamatpj === "berbeda"}
                                class="form-radio h-4 w-4 text-indigo-600"
                                onChange={handleAlamatPjChange}
                              />
                              <label class="ml-1 text-gray-700">
                                Berbeda dari pasien
                              </label>
                            </div>
                          </div>

                          <div className="field my-2">
                            <select
                              value={pjSelectedProvinsi}
                              onChange={handlePjProvinsiChange}
                              disabled={shouldDisableSelect}
                              name="alamat_pj_provinsi"
                              className="appearance-none border rounded w-full  py-2   mr-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                              <option value="" className="py-5">
                                Pilih Provinsi
                              </option>
                              {pjProvinsi.map((item) => (
                                <option key={item.id} value={item.id}>
                                  {item.name}
                                </option>
                              ))}
                            </select>

                            {pjSelectedProvinsi && (
                              <select
                                value={pjSelectedKabupatenKota}
                                onChange={handlePjKabupatenKotaChange}
                                disabled={shouldDisableSelect}
                                name="alamat_pj_kota"
                                className="appearance-none border rounded w-full mb-2 py-2  mr-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              >
                                <option value="" className="py-5">
                                  Pilih Kabupaten/kota
                                </option>
                                {pjKabupatenKota.map((item) => (
                                  <option key={item.id} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            )}

                            {pjSelectedKabupatenKota && (
                              <select
                                value={pjSelectedKecamatan}
                                onChange={handlePjKecamatanChange}
                                disabled={shouldDisableSelect}
                                name="alamat_pj_kec"
                                className="appearance-none border rounded w-full  py-2  mr-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              >
                                <option value="" className="py-5">
                                  Pilih Kabupaten/kota
                                </option>
                                {pjKecamatan.map((item) => (
                                  <option key={item.id} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            )}

                            {pjSelectedKecamatan && (
                              <select
                                value={pjSelectedDesa}
                                onChange={handlePjDesaChange}
                                name="alamat_pj_desa"
                                disabled={shouldDisableSelect}
                                className="appearance-none border rounded w-full  py-2  mr-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              >
                                <option value="" className="py-5">
                                  Pilih Kabupaten/kota
                                </option>
                                {pjDesa.map((item) => (
                                  <option key={item.id} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            )}

                            {pjSelectedDesa && (
                              <input
                                disabled={shouldDisableSelect}
                                value={pjdetail}
                                hidden={shouldHiddenSelect}
                                onChange={handlePjDetailChange}
                                class="appearance-none bg-white border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="alamat_pj_detail"
                                placeholder="alamat detail penanggungjawab pasien"
                                name="alamat_pj_detail"
                                type="text"
                              />
                            )}
                          </div>
                        </div>
                      </div>
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

        {/* end modal create */}

        {/* modal edit */}

        <Modal isOpen={isEditOpen} onClose={handleCloseModal}>
          <div class="bg-white rounded-lg w-11/12 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
            <div class="flex justify-between px-4 py-2">
              <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
                Edit Data Pasien
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

            <form onSubmit={handleEditSubmit}>
              <div class="bg-gray-50 p-6">
                <div class="flex flex-col md:flex-row">
                  <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <label class="block text-gray-700 text-sm text-left font-bold mb-2 italic">
                      Data Pasien
                    </label>

                    <div className="container bg-white border border-state-300 p-2">
                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Kitas
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="no_kitas"
                          placeholder="Masukkan Nomor Indentitas"
                          onChange={handleFormChange}
                          value={editData.no_kitas}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>

                      <div className="field my-2 flex">
                        <div class="flex items-center mr-2">
                          <input
                            id="kitas1"
                            name="kitas"
                            type="radio"
                            checked={editKitas.kitas === "KTP"}
                            class="form-radio h-4 w-4 text-indigo-600"
                            value="KTP"
                            onChange={handleOptionKitasChange}
                          />
                          <label for="kitas1" class="ml-1 text-gray-700">
                            KTP
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="kitas2"
                            name="kitas"
                            type="radio"
                            checked={editKitas.kitas === "Paspor"}
                            class="form-radio h-4 w-4 text-indigo-600"
                            onChange={handleOptionKitasChange}
                            value="Paspor"
                          />
                          <label for="kitas2" class="ml-1 text-gray-700">
                            Paspor
                          </label>
                        </div>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          className='class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                          name="nama_lengkap"
                          onChange={handleFormChange}
                          value={editData.nama_lengkap}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          TTL
                        </label>
                        <div className="flex">
                          <input
                            class="appearance-none border rounded w-2/3  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tempat_lahir"
                            name="tempat_lahir"
                            type="text"
                            placeholder="Tempat Lahir"
                            onChange={handleFormChange}
                            value={editData.tempat_lahir}
                            onClick={(e) => e.stopPropagation()}
                          />

                          <input
                            class="appearance-none border rounded w-1/3  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-datepicker"
                            name="tanggal_lahir"
                            type="date"
                            onChange={handleFormChange}
                            value={editData.tanggal_lahir}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Jenis Kelamin
                        </label>
                        <div className="flex">
                          <div class="flex items-center mr-2">
                            <input
                              id="laki-laki"
                              name="kelamin"
                              value="Laki-laki"
                              type="radio"
                              checked={editkelamin.kelamin === "Laki-laki"}
                              class="form-radio h-4 w-4 text-indigo-600"
                              onChange={handleOptionKelaminChange}
                            />
                            <label for="kelamin" class="ml-1 text-gray-700">
                              Laki-laki
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="perempuan"
                              name="kelamin"
                              value="Perempuan"
                              type="radio"
                              checked={editkelamin.kelamin === "Perempuan"}
                              class="form-radio h-4 w-4 text-indigo-600"
                              onChange={handleOptionKelaminChange}
                            />
                            <label for="kelamin" class="ml-1 text-gray-700">
                              Perempuan
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Golongan Darah
                        </label>
                        {/* <input class="appearance-none border rounded w-full  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="golongan_darah" type="text" placeholder="golongan darah pasien" name='golongan_darah'  onChange={handleFormChange} value={editData.golongan_darah} onClick={(e) => e.stopPropagation()} />
             */}
                        <select
                          value={editGolonganDarah}
                          onChange={handleChangeEditGolonganDarah}
                          name="golongan_darah"
                          className="appearance-none border rounded w-full  py-2  mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          {golongandarah.map((option) => (
                            <option
                              key={option.id}
                              value={option.list_golongan_darah}
                            >
                              {option.list_golongan_darah}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          No HP
                        </label>
                        <input
                          class="appearance-none border rounded w-full  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="kontak_pasien"
                          name="kontak_pasien"
                          type="text"
                          placeholder=""
                          onChange={handleFormChange}
                          value={editData.kontak_pasien}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Agama
                        </label>
                        {/* <input class="appearance-none border rounded w-full  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="agama" name='agama' type="text" onChange={handleFormChange} value={editData.agama} onClick={(e) => e.stopPropagation()} />
            */}
                        <select
                          value={editAgama}
                          onChange={handleChangeEditAgama}
                          name="agama"
                          className="appearance-none border rounded w-full  py-2  mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          {agama.map((option) => (
                            <option key={option.id} value={option.list_agama}>
                              {option.list_agama}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Status Kawin
                        </label>
                        {/* <input class="appearance-none border rounded w-full  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="status_kawin" name='status_kawin' type="text" onChange={handleFormChange} value={editData.status_kawin} onClick={(e) => e.stopPropagation()} />
             */}
                        <select
                          value={editStatusKawin}
                          onChange={handleChangeEditStatusKawin}
                          name="status_kawin"
                          className="appearance-none border rounded w-full  py-2  mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          {statusKawin.map((option) => (
                            <option
                              key={option.id}
                              value={option.list_status_kawin}
                            >
                              {option.list_status_kawin}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Pendidikan
                        </label>
                        {/* <input class="appearance-none border rounded w-full  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="pendidikan" name='pendidikan' type="text" onChange={handleFormChange} value={editData.pendidikan} onClick={(e) => e.stopPropagation()} />
                     */}
                        <select
                          value={editPendidikan}
                          onChange={handleChangeEditPendidikan}
                          name="pendidikan"
                          className="appearance-none border rounded w-full  py-2  mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          {pendidikan.map((option) => (
                            <option
                              key={option.id}
                              value={option.list_pendidikan}
                            >
                              {option.list_pendidikan}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Pekerjaan
                        </label>
                        {/* <input class="appearance-none border rounded w-full  py-2 mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="pekerjaan" name='pekerjaan' type="text" onChange={handleFormChange} value={editData.pekerjaan} onClick={(e) => e.stopPropagation()} />
            */}

                        <select
                          value={editPekerjaan}
                          onChange={handleChangeEditPekerjaan}
                          name="pekerjaan"
                          className="appearance-none border rounded w-full  py-2  mr-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          {pekerjaan.map((option) => (
                            <option
                              key={option.id}
                              value={option.nama_pekerjaan}
                            >
                              {option.nama_pekerjaan}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="w-full md:w-1/2 px-4">
                    <label class="block text-gray-700 text-sm text-left font-bold mb-2 italic">
                      Data Keluarga Pasien
                    </label>
                    <div className="container bg-white border border-state-300 p-2">
                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Kontak yang dapat dihubungi
                        </label>
                        <input
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="kontak_pj"
                          name="kontak_pj"
                          type="text"
                          onChange={handleFormChange}
                          value={editData.kontak_pj}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="border border-state-300 p-2">
                        <div className="field my-2">
                          <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                            Nama penanggungjawab
                          </label>
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nama_penanggungjawab"
                            name="nama_penanggungjawab"
                            type="text"
                            value={editData.nama_penanggungjawab}
                            onClick={(e) => e.stopPropagation()}
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>
                    </div>
                    <label class="block text-gray-700 text-sm text-left font-bold mb-2 mt-4 italic">
                      Alamat
                    </label>
                    <div className="container bg-white border border-state-300 p-2">
                      <div className="field my-2">
                        <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                          Alamat Pasien
                        </label>

                        {/* <input class="appearance-none bg-white border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="alamat_pasien_provinsi" name='alamat_pasien_provinsi' type="text" onChange={handleFormChange} /> */}

                        {/* <select value={selectedEditProvinsi} onChange={handleEditProvinsiChange}  name="alamat_pasien_provinsi"  className='appearance-none border rounded w-full  py-2   mr-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                    <option value="" className='py-5'>Pilih Provinsi</option>
                    {editprovinsi.map((item) => (
                        <option key={item.id} value={item.id}>
                        {item.name}
                        </option>
                    ))}
                </select>
                
                {editprovinsi && (
                <select value={editkabupatenkota}  name="alamat_pasien_kota" className='appearance-none border rounded w-full mb-2 py-2  mr-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                    <option value="" className='py-5'>Pilih Kabupaten/kota</option>
                    {kabupatenKota.map((item) => (
                        <option key={item.id} value={item.id}>
                        {item.name}
                        </option>
                    ))}
                </select>
                )} */}

                        <input
                          class="appearance-none bg-white border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="alamat_pasien_kota"
                          name="alamat_pasien_kota"
                          type="text"
                          onChange={handleFormChange}
                        />

                        <input
                          class="appearance-none bg-white border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="alamat_pasien_kec"
                          name="alamat_pasien_kec"
                          type="text"
                          onChange={handleFormChange}
                        />

                        <input
                          class="appearance-none bg-white border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="alamat_pasien_desa"
                          name="alamat_pasien_desa"
                          type="text"
                          onChange={handleFormChange}
                        />

                        <input
                          class="appearance-none bg-white border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="alamat_pasien_detail"
                          name="alamat_pasien_detail"
                          type="text"
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="border border-state-300 p-2">
                        <div className="field my-2">
                          <label class="block text-gray-700 text-sm text-left font-bold mb-2">
                            Alamat penanggungjawab
                          </label>
                          <div className="container flex mb-2">
                            <div class="flex items-center mr-2">
                              <input
                                id="alamat_pj_detail1"
                                name="alamat_pj_detail"
                                value="Sama Seperti Pasien"
                                type="radio"
                                class="form-radio h-4 w-4 text-indigo-600"
                                onChange={handleFormChange}
                              />
                              <label for="kelamin" class="ml-1 text-gray-700">
                                Sama seperti pasien
                              </label>
                            </div>
                            <div class="flex items-center mr-2">
                              <input
                                id="alamat_pj_detail2"
                                name="alamat_pj_detail"
                                value="Beda dari Pasien"
                                type="radio"
                                class="form-radio h-4 w-4 text-indigo-600"
                                onChange={handleFormChange}
                              />
                              <label for="kelamin" class="ml-1 text-gray-700">
                                Berbeda dari pasien
                              </label>
                            </div>
                          </div>
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="first-name"
                            type="text"
                            placeholder="Masukkan Nomor Indentitas"
                          />
                        </div>
                      </div>
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
        {/* end modal edit */}

        {/* modal delete */}
        <Modal isOpen={isDeleteOpen} onClose={handleCloseModal}>
          <div class="bg-white rounded-lg w-1/3 mt-10 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
            <div class="bg-gray-50 p-6">
              <div class="flex flex-col md:flex-row">
                <div class="w-full">
                  <h2 class="text-xl font-bold py-4 ">Are you sure?</h2>
                  <p class="text-sm text-gray-500 px-8">
                    Do you really want to delete this data? This process cannot
                    be undone
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

        {/* end modal delete */}

        <div className="container px-5 my-5 py-5 border border-gray-300 bg-white ">
          <div className="container mx-auto w-full mt-4 flex justify-between mb-1">
            {/* search  */}
            <form>
              <input
                className="border border-black pl-0.5 py-0.4  "
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                autoFocus
              />
            </form>
            {/* button add data */}
            <button
              onClick={() => setIsOpen(true)}
              className="bg-emerald hover:opacity-75 text-white font-bold py-0.3 px-2 rounded "
            >
              <div class="flex items-center">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13pt"
                  height="13pt"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#ffff"
                    stroke="none"
                  >
                    <path
                      d="M2 4533 c0 -324 3 -572 5 -553 39 366 253 715 568 927 157 105 378
        186 565 206 19 2 -229 5 -552 5 l-588 2 2 -587z"
                    />
                    <path
                      d="M3970 5114 c188 -27 313 -65 452 -136 380 -194 646 -579 691 -998 2
        -19 5 229 5 553 l2 587 -587 -1 c-324 -1 -577 -3 -563 -5z"
                    />
                    <path
                      d="M1105 4675 c-333 -73 -590 -332 -661 -665 -20 -97 -20 -2803 0 -2900
        36 -170 113 -309 241 -435 96 -95 203 -161 335 -207 l95 -33 1405 -3 c972 -2
        1424 1 1468 8 159 27 346 126 459 242 112 116 196 272 229 428 11 53 14 309
        14 1446 0 949 -3 1399 -11 1439 -52 280 -261 535 -524 636 -158 61 -83 59
        -1600 58 -1113 0 -1402 -3 -1450 -14z m1533 -851 c44 -18 87 -57 110 -99 15
        -26 18 -86 22 -490 l5 -460 460 -5 c503 -5 487 -3 547 -67 76 -80 76 -206 0
        -286 -60 -64 -44 -62 -547 -67 l-460 -5 -5 -460 c-5 -503 -3 -487 -67 -547
        -80 -76 -206 -76 -286 0 -64 60 -62 44 -67 547 l-5 460 -460 5 c-503 5 -487 3
        -547 67 -76 80 -76 206 0 286 60 64 44 62 547 67 l460 5 5 460 c5 503 3 487
        67 547 59 56 148 73 221 42z"
                    />
                    <path
                      d="M2 588 l-2 -588 588 2 c323 0 571 3 552 5 -419 45 -806 313 -999 693
        -67 130 -119 304 -134 440 -2 19 -5 -229 -5 -552z"
                    />
                    <path
                      d="M5110 1133 c-1 -53 -33 -193 -65 -283 -112 -308 -336 -562 -625 -710
        -130 -66 -304 -119 -440 -133 -19 -2 229 -5 553 -5 l587 -2 0 585 c0 322 -2
        585 -5 585 -3 0 -5 -17 -5 -37z"
                    />
                  </g>
                </svg>

                <span class="ml-0.5 mb-0.5">Pasien</span>
              </div>
            </button>
          </div>
          <div className="container mx-auto  py-3  bg-white">
            {/* prev and next page */}
            <div className="container mx-auto w-full flex justify-end pr-2">
              <button
                onClick={() => setPage((page) => page - 1)}
                disabled={page === 0}
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
                disabled={page === data.totalPages - 1}
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
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No RM
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nama
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kitas
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kelamin
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal Lahir
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {data.data.map((pasien, index) => (
                  <tr key={pasien.id}>
                    <td className="px-6 text-center py-1 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {pasien.no_rm}
                      </div>
                    </td>
                    <td class="px-0 py-1 whitespace-nowrap text-sm text-gray-500 text-center">
                      {pasien.nama_lengkap}
                    </td>
                    <td className="px-0 py-1 whitespace-nowrap text-sm text-gray-500 text-center">
                      {pasien.no_kitas}
                    </td>
                    <td className="px-0 py-1 whitespace-nowrap text-sm text-gray-500 text-center">
                      {pasien.kelamin}
                    </td>
                    <td className="px-0 py-1 whitespace-nowrap text-sm text-gray-500 text-center">
                      {pasien.tanggal_lahir}
                    </td>

                    <td className="px-0 py-0 whitespace-nowrap text-center text-sm font-medium">
                      <Link to={`/pasien/detail/${pasien.id}`}>
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <img
                            src={detailIcon}
                            className="m-1"
                            title="Detail"
                            width="20px"
                            alt="detail"
                          />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleEdit(pasien)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <img
                          src={editIcon}
                          width="20px"
                          className="m-1"
                          title="Edit"
                          alt="edit"
                        />
                      </button>
                      <button
                        onClick={() => handleShowModal(pasien.id)}
                        className=" text-red-600 hover:text-red-900"
                      >
                        <img
                          src={deleteIcon}
                          width="20px"
                          className="m-1"
                          title="Delete"
                          alt="delete"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="container mx-auto w-full flex justify-start mt-1 ml-1">
            <p className="text-sm">
              Jumlah Data: {data.totalRows} dari {data.totalPages} halaman
            </p>
            <p className="text-sm ml-2">
              response time: {hasil_response} detik
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pasien;
