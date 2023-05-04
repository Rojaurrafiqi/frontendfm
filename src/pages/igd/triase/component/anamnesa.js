import React, { useState, useEffect } from "react";
import { API_URL } from "../../../../config";
import { useParams } from "react-router-dom";
import axios from "axios";
import editIcon from "../../../../images/edit2.png";

const Anamnesa = (props) => {
  const { id } = useParams();
  const nilai = Number(id);

  const [pasienIgdTriaseAnamnesa, setPasienIgdTriaseAnamnesa] = useState([]);
  const [formSubmittedAnamnesa, setFormSubmittedAnamnesa] = useState(true);
  const [nilaiIdPasienIgd, setNilaiIdPasienIgd] = useState();
  const [isAnamnesa, setIsAnamnesa] = useState(true);
  const [isEditAnamnesa, setIsEditAnamnesa] = useState(false);
  const [idAnamnesaValue, setIdAnamnesaValue] = useState();
  // const [dataTandaVital, setDataTandaVital] = useState(true);
  // const [formUpdateTandaVital, setFormUpdateTandaVital] = useState(false);
  // const [tandavitalvalue, setTandaVitalValue] = useState('');

  //fetch data tanda vital
  function fetchIgdTriaseAnamnesa(id) {
    axios
      .get(`${API_URL}/igd/pasien/penanganan/triase/anamnesa/${id}`)
      .then((response) => {
        const data = response.data;
        setPasienIgdTriaseAnamnesa(data);
        setNilaiIdPasienIgd(data[0].id_pasien_igd);
        setIdAnamnesaValue(data[0].id);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    if (formSubmittedAnamnesa) {
      fetchIgdTriaseAnamnesa(id);
      setFormSubmittedAnamnesa(false);
    }
  }, [id, formSubmittedAnamnesa]);

  function handleAnamnesa(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    axios
      .post(`${API_URL}/igd/pasien/penanganan/triase/anamnesa`, {
        ...data,
        id_pasien_igd: nilai,
      })
      .then((response) => {
        const updatedData = response.data;
        setFormSubmittedAnamnesa(true);
      })
      .catch((error) => {
        console.error(error);
        setFormSubmittedAnamnesa(false);
      });
  }

  function handleTampilanAnamnesa(event) {
    setIsAnamnesa(false);
    setIsEditAnamnesa(true);
    setFormSubmittedAnamnesa(false);
  }

  function handleTampilanEditAnamnesa(event) {
    setIsAnamnesa(true);
    setIsEditAnamnesa(false);
    setFormSubmittedAnamnesa(true);
  }

  function handleEditAnamnesaSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    axios
      .patch(
        `${API_URL}/igd/pasien/penanganan/triase/anamnesa/${idAnamnesaValue}`,
        {
          ...data,
          id_pasien_igd: nilai,
        }
      )
      .then((response) => {
        setNilaiIdPasienIgd(response.data.id_pasien_igd);
        setIsAnamnesa(true);
        setFormSubmittedAnamnesa(true);
        setIsEditAnamnesa(false);

        // memperbarui data pada tampilan
        axios
          .get(`${API_URL}/igd/pasien/penanganan/triase/anamnesa/${id}`)
          .then((response) => {
            setPasienIgdTriaseAnamnesa(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="text-left pl-2 bg-emerald300 font-semibold">Anamnesa</div>
      <div className="border border-state-300  bg-white text-left p-3 mb-5">
        {isAnamnesa && (
          <div className="anamnesa">
            {formSubmittedAnamnesa || nilai === nilaiIdPasienIgd ? (
              <div className="anamnesa">
                <div className="relative">
                  <button
                    onClick={handleTampilanAnamnesa}
                    className="absolute top-0 right-0 hover:opacity-75"
                  >
                    <img src={editIcon} width="30px" />
                  </button>
                </div>
                {Array.isArray(pasienIgdTriaseAnamnesa) &&
                  pasienIgdTriaseAnamnesa.map((data, index) => (
                    <div key={index}>
                      <tr>
                        <td>Keluhan Utama</td>
                        <td className="px-2">:</td>
                        <td className="pr-7">{data.keluhan_utama}</td>
                      </tr>
                      <tr>
                        <td>Riwayat Perjalanan Penyakit</td>
                        <td className="px-2">:</td>
                        <td className="pr-7">
                          {data.riwayat_perjalanan_penyakit}{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Riwayat Penyakit Terdahulu</td>
                        <td className="px-2">:</td>
                        <td className="pr-7">
                          {data.riwayat_penyakit_terdahulu}{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Riwayat Pemakaian Obat</td>
                        <td className="px-2">:</td>
                        <td className="pr-7">{data.riwayat_pemakaian_obat}</td>
                      </tr>
                      <tr>
                        <td>Riwayat Penyakit Keluarga</td>
                        <td className="px-2">:</td>
                        <td className="pr-7">
                          {data.riwayat_penyakit_keluarga}
                        </td>
                      </tr>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="form mt-1">
                <form onSubmit={handleAnamnesa}>
                  <tr>
                    <td>Keluhan Utama</td>
                    <td className="pb-1 mr-2">
                      <textarea
                        class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 mr-16 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                        id="textarea"
                        name="keluhan_utama"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-2">Riwayat Perjalanan Penyakit</td>
                    <td className="pb-1">
                      <textarea
                        class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                        id="textarea"
                        name="riwayat_perjalanan_penyakit"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>Riwayat Penyakit Terdahulu</td>
                    <td className="pb-1">
                      <textarea
                        class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                        id="textarea"
                        name="riwayat_penyakit_terdahulu"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>Riwayat Pemakaian Obat</td>
                    <td className="pb-1">
                      <textarea
                        name="riwayat_pemakaian_obat"
                        class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                        id="textarea"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>Riwayat Penyakit Keluarga</td>
                    <td className="pb-1">
                      <textarea
                        name="riwayat_penyakit_keluarga"
                        class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                        id="textarea"
                      ></textarea>
                    </td>
                  </tr>

                  <div className="flex justify-end">
                    <button
                      className="py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75"
                      type="submit"
                    >
                      SIMPAN
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {isEditAnamnesa && (
          <div className="editanamnesa">
            <div className="form mt-1">
              <form onSubmit={handleEditAnamnesaSubmit}>
                <tr>
                  <td className="pr-4">Keluhan Utama</td>
                  <td className="pb-1">
                    <textarea
                      defaultValue={pasienIgdTriaseAnamnesa[0].keluhan_utama}
                      class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 mr-16 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                      id="textarea"
                      name="keluhan_utama"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td className="pr-4">Riwayat Perjalanan Penyakit</td>
                  <td className="pb-1">
                    <textarea
                      defaultValue={
                        pasienIgdTriaseAnamnesa[0].riwayat_perjalanan_penyakit
                      }
                      class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                      id="textarea"
                      name="riwayat_perjalanan_penyakit"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>Riwayat Penyakit Terdahulu</td>
                  <td className="pb-1">
                    <textarea
                      defaultValue={
                        pasienIgdTriaseAnamnesa[0].riwayat_penyakit_terdahulu
                      }
                      class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                      id="textarea"
                      name="riwayat_penyakit_terdahulu"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>Riwayat Pemakaian Obat</td>
                  <td className="pb-1">
                    <textarea
                      defaultValue={
                        pasienIgdTriaseAnamnesa[0].riwayat_pemakaian_obat
                      }
                      name="riwayat_pemakaian_obat"
                      class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                      id="textarea"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>Riwayat Penyakit Keluarga</td>
                  <td className="pb-1">
                    <textarea
                      defaultValue={
                        pasienIgdTriaseAnamnesa[0].riwayat_penyakit_keluarga
                      }
                      name="riwayat_penyakit_keluarga"
                      class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                      id="textarea"
                    ></textarea>
                  </td>
                </tr>

                <div className="flex justify-end">
                  <button
                    onClick={handleTampilanEditAnamnesa}
                    className="py-0.2 mr-1 px-1 mt-2 bg-red-700 text-white hover:opacity-75"
                  >
                    BATAL
                  </button>
                  <button
                    className="py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75"
                    type="submit"
                  >
                    SIMPAN
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Anamnesa;
