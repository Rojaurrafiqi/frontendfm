import React, { useState } from "react";

const ResumeMedis = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className="text-left pl-2 bg-emerald300 font-semibold">
        RESUME MEDIS
      </div>
      <div className="container mt-4 px-4">
        <div className="flex ">
          <div className="container">
            <tr className="text-left">
              <td>Tanggal Masuk</td>
              <td className="px-2">:</td>
              <input type="date" className="bg-gray-200  w-full" />
            </tr>
            <tr className="text-left">
              <label>Penanggung Pembayaran</label>
              <td className="px-2">:</td>
              <input type="text" className="bg-gray-200  w-full" />
            </tr>
            <tr className="text-left">
              <td>Ruang rawat terakhir</td>
              <td className="px-2">:</td>
              <input type="text" className="bg-gray-200  w-full" />
            </tr>
          </div>

          <div className="container">
            <tr className="text-left">
              <td>Tanggal Keluar/Meninggal</td>
              <td className="px-2">:</td>
              <input type="date" className="bg-gray-200  w-full" />
            </tr>

            <div className="text-left">
              <label>Diagnosis Waktu Masuk</label>
              <textarea
                class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                id="textarea"
                name="terapi_pengobatan_rs"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap text-left">
          <div className="container">
            <label>Ringkasan Riwayat Penyakit</label>
            <textarea
              class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              id="textarea"
              name="riwayat_penyakit_terdahulu"
            ></textarea>
          </div>
          <div className="container">
            <label>Ringkasan Penunjang/Diagnosis</label>
            <textarea
              class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              id="textarea"
              name="ringkasan_penunjang_diagnosis"
            ></textarea>
          </div>
          <div className="container">
            <label>Terapi Pengobatan Selama di Rumah Sakit</label>
            <textarea
              class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              id="textarea"
              name="terapi_pengobatan_rs"
            ></textarea>
          </div>
        </div>
        <div className="flex space-x-4 text-left">
          <div className="container">
            <label>Diagnosa Utama</label>
            <textarea
              class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              id="textarea"
              name="terapi_pengobatan_rs"
            ></textarea>
          </div>
          <div className="container">
            <label>Diagnosa Sekunder</label>
            <textarea
              class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              id="textarea"
              name="terapi_pengobatan_rs"
            ></textarea>
          </div>
        </div>
        <div className="container text-left mt-1">
          <label>ICD 10</label>
          <input
            type="text"
            className="w-full border border-black rounded-md py-1 px-1 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
          />
        </div>
        <div className="container text-left">
          <label>
            1. Penyakit/ Kondisi Patologis Lain yang Menyertai Diagnosa Utama
          </label>
          <div className="flex space-x-4">
            <div className="container">
              <textarea
                class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                id="textarea"
                name="terapi_pengobatan_rs"
              ></textarea>
              <label>ICD 10</label>
              <input
                type="text"
                className="w-full border border-black rounded-md py-1 px-1 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="container text-left">
          <label>
            2. Komplikasi (Penyakit/Kondisi Patologis yang di Dapat Selama
            Dirawat di RS)
          </label>
          <div className="flex space-x-4">
            <div className="container">
              <textarea
                class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                id="textarea"
                name="terapi_pengobatan_rs"
              ></textarea>
              <label>ICD 10</label>
              <input
                type="text"
                className="w-full border border-black rounded-md py-1 px-1 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="container text-left">
          <label>
            3. Ko-Morbiditi (Penyakit Kronis yang Sudah Ada Pada Pasien
            Sebelumnya)
          </label>
          <div className="flex space-x-4">
            <div className="container">
              <textarea
                class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                id="textarea"
                name="terapi_pengobatan_rs"
              ></textarea>
              <label>ICD 10</label>
              <input
                type="text"
                className="w-full border border-black rounded-md py-1 px-1 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="container text-left">
          <label>Tindakan Prosudur (ganti pakai table)</label>
          <div className="flex space-x-4">
            <div className="container">
              <textarea
                class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
                id="textarea"
                name="terapi_pengobatan_rs"
              ></textarea>
            </div>
            <div className="container">
              <label>ICD 9 CM</label>
              <input
                type="text"
                className="w-full border border-black rounded-md py-1 px-1 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="container text-left">
          <label>Alergi (Reaksi Obat)</label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="terapi_pengobatan_rs"
          ></textarea>
        </div>
        <div className="container text-left">
          <label>Hasil Laboratorium Belum Selesai (Tunda)</label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="terapi_pengobatan_rs"
          ></textarea>
        </div>
        <div className="container text-left">
          <label>Di Rumah Sakit </label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="terapi_pengobatan_rs"
          ></textarea>
        </div>
        <div className="container text-left">
          <label for="fruit" class="block font-medium text-gray-700">
            Kondisi Waktu Keluar
          </label>
          <select
            id="fruit"
            name="fruit"
            class="form-select mt-1 border  block w-full  border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option>--pilih opsi--</option>
            <option>Sembuh</option>
            <option>Pindah RS</option>
            <option>Pulang Atas Permintaan Sendiri</option>
            <option>Meninggal</option>
            <option>Lain-lain (tambahkan option input)</option>
          </select>
        </div>
        <div className="container text-left">
          <label for="fruit" class="block font-medium text-gray-700">
            Pengobatan dilanjutkan
          </label>
          <select
            id="fruit"
            name="fruit"
            class="form-select mt-1 border  block w-full  border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option>--pilih opsi--</option>
            <option>Poliklinik</option>
            <option>RS Lain</option>
            <option>Puskesmas</option>
            <option>Dokter Luar</option>
            <option>Lain-lain (tambahkan option input)</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75"
            type="submit"
          >
            SIMPAN
          </button>
        </div>
        <div className="container text-left">
          <label for="fruit" class="block font-medium text-gray-700">
            Terapi Pulang
          </label>
          <div class="overflow-x-auto">
            <div class="min-w-screen max-w-full table-responsive">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Nama Obat</th>
                    <th class="px-4 py-2">Jumlah</th>
                    <th class="px-4 py-2">Dosis</th>
                    <th class="px-4 py-2">Frekuensi</th>
                    <th class="px-4 py-2">Cara Pemberian</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-1">Paracetamol</td>
                    <td class="px-4 py-1">Row 1, Column 1</td>
                    <td class="px-4 py-1">Row 1, Column 2</td>
                    <td class="px-4 py-1">Row 1, Column 3</td>
                    <td class="px-4 py-1">Row 1, Column 4</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-1">Paracetamol</td>
                    <td class="px-4 py-1">Row 1, Column 1</td>
                    <td class="px-4 py-1">Row 1, Column 2</td>
                    <td class="px-4 py-1">Row 1, Column 3</td>
                    <td class="px-4 py-1">Row 1, Column 4</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-1">Paracetamol</td>
                    <td class="px-4 py-1">Row 1, Column 1</td>
                    <td class="px-4 py-1">Row 1, Column 2</td>
                    <td class="px-4 py-1">Row 1, Column 3</td>
                    <td class="px-4 py-1">Row 1, Column 4</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-1">Paracetamol</td>
                    <td class="px-4 py-1">Row 1, Column 1</td>
                    <td class="px-4 py-1">Row 1, Column 2</td>
                    <td class="px-4 py-1">Row 1, Column 3</td>
                    <td class="px-4 py-1">Row 1, Column 4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeMedis;
