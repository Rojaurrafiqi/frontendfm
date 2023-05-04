import React from "react";

const RencanaPemulanganPasien = () => {
  return (
    <div>
      <div className="text-left pl-2 bg-emerald300 font-semibold">
        FORM RENCANA PEMULANGAN PASIEN{" "}
        <span className="italic">(DISCHARGE PLANNING)</span>
      </div>
      <div className="container">
        <p className="px-2 text-sm text-left">
          Dilengkapi dalam 48 jam pertama pasien masuk ruang rawat
        </p>
        <div className="flex space-x-2 text-left px-2">
          <div className="container">
            <label className="font-semibold">Diagnosa Medis</label>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </div>
          <div className="container">
            <label className="font-semibold">Ruangan</label>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </div>
        </div>
        <div className="px-2 text-left mt-1">
          <p className="font-bold">Saat Masuk Rumah Sakit</p>
          <label className="font-semibold">Waktu Masuk RS</label>
          <div className="flex space-x-2">
            <input type="date" className="bg-gray-200  w-full" />
            <input type="time" className="bg-gray-200  w-full" />
          </div>
          <div className="container">
            <label className="font-semibold">Alasan Masuk RS</label>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </div>
          <div className="container">
            <label className="font-semibold">
              Tanggal Rencana Pemulangan
              <span className="italic"> (Discharge Planning) </span>
            </label>
            <div className="flex space-x-2">
              <input type="date" className="bg-gray-200  w-full" />
              <input type="time" className="bg-gray-200  w-full" />
            </div>
          </div>
          <div className="container">
            <label className="font-semibold">
              Estimasi Tanggal Pemulangan Pasien
            </label>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </div>
          <div className="container">
            <label className="font-semibold">Nama Perawat</label>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </div>
        </div>
        <div className="text-left pl-2 my-2 bg-emerald300 font-semibold">
          Keterangan Rencana Pemulangan
        </div>
        <div className="text-left px-2">
          <div className="container">
            <p className="font-semibold">1. Pengaruh Rawat Inap Terhadap:</p>
            <div className="px-2">
              <label className="font-semibold ml-2">
                a. Pasien dan Keluarga Pasien
              </label>

              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option1"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option1"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
              <label className="font-semibold ml-2">b. Pekerjaan</label>
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option2"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option2"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
              <label className="font-semibold ml-2">c. Keuangan</label>
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option3"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option3"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
            </div>
          </div>
          <div className="container">
            <p className="font-semibold">
              2. Antisipasi terhadap masalah saat pulang
            </p>
            <div className="px-2">
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option4"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option4"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
            </div>
            <div className="px-4">
              <label className="font-semibold">Penjelasan</label>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </div>
          </div>
          <div className="container">
            <p className="font-semibold">3. Bantuan diperlukan dalam hal :</p>
            <div className="container px-2 ">
              <div class="grid grid-cols-4 gap-1">
                <label class="inline-flex items-center px-4">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-gray-600"
                  />
                  <span class="ml-2 text-sm text-gray-700">Minum Obat</span>
                </label>
                <label class="inline-flex items-center px-4">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-gray-600"
                  />
                  <span class="ml-2 text-sm text-gray-700">Mandi</span>
                </label>
                <label class="inline-flex items-center px-4">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-gray-600"
                  />
                  <span class="ml-2 text-sm text-gray-700">Makan</span>
                </label>
                <label class="inline-flex items-center px-4">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-gray-600"
                  />
                  <span class="ml-2 text-sm text-gray-700">Diet</span>
                </label>
                <label class="inline-flex items-center px-4">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-gray-600"
                  />
                  <span class="ml-2 text-sm text-gray-700">
                    Menyiapkan Makanan
                  </span>
                </label>
                <label class="inline-flex items-center px-4">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-gray-600"
                  />
                  <span class="ml-2 text-sm text-gray-700">Berpakaian</span>
                </label>
                <label class="inline-flex items-center px-4">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-gray-600"
                  />
                  <span class="ml-2 text-sm text-gray-700">
                    Edukasi Kesehatan
                  </span>
                </label>
                <label class="inline-flex items-center px-4">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-gray-600"
                  />
                  <span class="ml-2 text-sm text-gray-700">Transportasi</span>
                </label>
              </div>
            </div>
          </div>
          <div className="container">
            <p className="font-semibold">
              4. Adakah yang membantu keperluan tersebut diatas?
            </p>
            <div className="px-2">
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option4"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option4"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
            </div>
            <div className="px-4">
              <label className="font-semibold">Penjelasan</label>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </div>
          </div>
          <div className="container">
            <p className="font-semibold">
              5. Apakah pasien hidup / tinggal sendiri setelah keluar dari rumah
              sakit ?
            </p>
            <div className="px-2">
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option5"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option5"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
            </div>
            <div className="px-4">
              <label className="font-semibold">Penjelasan</label>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </div>
          </div>
          <div className="container">
            <p className="font-semibold">
              6. Apakah pasien menggunakan peralatan medis di rumah setelah
              keluar rumah sakit ( cateter, NGT, double lumen, oksigen ) ?
            </p>
            <div className="px-2">
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option6"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option6"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
            </div>
            <div className="px-4">
              <label className="font-semibold">Penjelasan</label>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </div>
          </div>
          <div className="container">
            <p className="font-semibold">
              7. Apakah pasien memerlukan alat bantu setelah keluar dari RS
              (tongkat, kursi roda, walker dll) ?
            </p>
            <div className="px-2">
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option7"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option7"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
            </div>
            <div className="px-4">
              <label className="font-semibold">Penjelasan</label>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </div>
          </div>
          <div className="container">
            <p className="font-semibold">
              8. Apakah memerlukan bantuan / perawatan khusus dirumah setelah
              keluar RS (homecare, home visit) ?
            </p>
            <div className="px-2">
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option8"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option8"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
            </div>
            <div className="px-4">
              <label className="font-semibold">Penjelasan</label>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </div>
          </div>
          <div className="container">
            <p className="font-semibold">
              9. Apakah pasien bermasalah dalam memenuhi kebutuhan pribadinya
              setelah keluar dari rumah sakit (makan, minum, toileting, dll) ?
            </p>
            <div className="px-2">
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option9"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option9"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
            </div>
            <div className="px-4">
              <label className="font-semibold">Penjelasan</label>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </div>
          </div>
          <div className="container">
            <p className="font-semibold">
              10. Apakah pasien memiliki nyeri kronis dan kelelahan setelah
              keluar dari rumah sakit ?
            </p>
            <div className="px-2">
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option10"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option10"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
            </div>
            <div className="px-4">
              <label className="font-semibold">Penjelasan</label>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </div>
          </div>
          <div className="container">
            <p className="font-semibold">
              11. Apakah pasien dan keluarga memerlukan edukasi kesehatan
              setelah keluar dari rumah sakit (obat-obatan, nyeri, diit, mencari
              pertolongan, follow up) ?
            </p>
            <div className="px-2">
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option11"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option11"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
            </div>
            <div className="px-4">
              <label className="font-semibold">Penjelasan</label>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </div>
          </div>
          <div className="container">
            <p className="font-semibold">
              12. Apakah pasien dan keluarga memerlukan keterampilan khusus
              setelah keluar dari rumah sakit (perawatan luka, injeksi,
              perawatan bayi, dll) ?
            </p>
            <div className="px-2">
              <div class="flex items-center px-4">
                <label for="yes" class="inline-flex items-center">
                  <input
                    type="radio"
                    name="option12"
                    id="yes"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="yes"
                  />
                  <span class="ml-2 text-gray-700">Iya</span>
                </label>
                <label for="no" class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="option12"
                    id="no"
                    class="form-radio h-5 w-5 text-indigo-600"
                    value="no"
                  />
                  <span class="ml-2 text-gray-700">Tidak</span>
                </label>
              </div>
            </div>
            <div className="px-4">
              <label className="font-semibold">Penjelasan</label>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </div>
          </div>
          <div className="flex justify-end pb-2 px-2 ">
            <button
              className="py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75"
              type="submit"
            >
              SIMPAN
            </button>
          </div>
          <p className="text-sm font-semibold my-2">
            Catatan tambahan (notes) apabila ada perubahan discharge planning
            setelah initial assesement
          </p>
          <div className="flex justify-start pb-1 ">
            <button
              className="py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75"
              type="submit"
            >
              Tambah Data
            </button>
          </div>
          <table class="table-auto text-sm items-center ">
            <thead>
              <tr>
                <th class="px-1 py-1 border border-black">Waktu</th>
                <th class="px-1 py-1 border border-black">Profesi</th>
                <th class="px-1 py-1 border border-black">Catatan</th>
                <th class="px-1 py-1 border border-black">Nama/Paraf</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-black px-1 py-1">Row 1, Column 1</td>
                <td class="border border-black px-1 py-1">Row 1, Column 2</td>
                <td class="border border-black px-1 py-1">Row 1, Column 3</td>
                <td class="border border-black px-1 py-1">Row 1, Column 4</td>
              </tr>
              <tr>
                <td class="border border-black px-1 py-1">Row 1, Column 1</td>
                <td class="border border-black px-1 py-1">Row 1, Column 2</td>
                <td class="border border-black px-1 py-1">Row 1, Column 3</td>
                <td class="border border-black px-1 py-1">Row 1, Column 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RencanaPemulanganPasien;
