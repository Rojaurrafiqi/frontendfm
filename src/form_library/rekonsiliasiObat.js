import React from "react";

const RekonsiliasiObat = () => {
  return (
    <div>
      <div className="text-left pl-2 bg-emerald300 font-semibold">
        FORM REKONSILIASI OBAT
      </div>
      <form>
        <div className="container text-left space-y-1 px-2 py-2">
          <div className="container">
            <label>Unit/ruang</label>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </div>
          <div className="container">
            <label>Alergi Obat / Makanan / Lainnya </label>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </div>
        </div>
        <div className="flex justify-end pb-10 px-2">
          <button
            className="py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75"
            type="submit"
          >
            SIMPAN
          </button>
        </div>
      </form>
      <div class="overflow-x-auto px-2">
        <p className="text-red-500 font-bold text-left">
          catatam progmr:tabel rekonsiliasi obat
        </p>
        <table class="table-auto text-sm items-center ">
          <thead>
            <tr>
              <th rowspan="2" class="px-1 py-1 border border-black">
                Waktu
              </th>
              <th rowspan="2" class="px-1 py-1 border border-black">
                Nama Obat (Obat Yang Sedang Digunakan Saat Ini)
              </th>
              <th rowspan="2" class="px-1 py-1 border border-black">
                Dosis (mg, ml, mcg, unit)
              </th>
              <th rowspan="2" class="px-1 py-1 border border-black">
                Frekuensi
              </th>
              <th rowspan="2" class="px-1 py-1 border border-black">
                Rute
              </th>
              <th class="px-1 py-1 border border-black" colspan="2">
                Permintaan Obat Yang Diberikan Saat Masuk?
              </th>
              <th colspan="2" class="px-1 py-1 border border-black">
                Obat Dari Rumah Dilanjutkan Saat Pulang?
              </th>
            </tr>
            <tr>
              <th class="px-1 py-1 border border-black">Iya</th>
              <th class="px-1 py-1 border border-black">Tidak</th>
              <th class="px-1 py-1 border border-black">Iya</th>
              <th class="px-1 py-1 border border-black">Tidak</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-black px-1 py-1">Row 1, Column 1</td>
              <td class="border border-black px-1 py-1">Row 1, Column 2</td>
              <td class="border border-black px-1 py-1">Row 1, Column 3</td>
              <td class="border border-black px-1 py-1">Row 1, Column 4</td>
              <td class="border border-black px-1 py-1">Row 1, Column 5</td>
              <td class="border border-black px-1 py-1">Row 1, Column 6</td>
              <td class="border border-black px-1 py-1">Row 1, Column 7</td>
              <td class="border border-black px-1 py-1">Row 1, Column 8</td>
              <td class="border border-black px-1 py-1">Row 1, Column 9</td>
            </tr>
            <tr>
              <td class="border border-black px-1 py-1">Row 1, Column 1</td>
              <td class="border border-black px-1 py-1">Row 1, Column 2</td>
              <td class="border border-black px-1 py-1">Row 1, Column 3</td>
              <td class="border border-black px-1 py-1">Row 1, Column 4</td>
              <td class="border border-black px-1 py-1">Row 1, Column 5</td>
              <td class="border border-black px-1 py-1">Row 1, Column 6</td>
              <td class="border border-black px-1 py-1">Row 1, Column 7</td>
              <td class="border border-black px-1 py-1">Row 1, Column 8</td>
              <td class="border border-black px-1 py-1">Row 1, Column 9</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container text-left px-2 pt-4">
        <p className="text-red-500 font-bold">
          catatam progmr: Form ini untuk inputan tabel diatas
        </p>
        <div className="container px-2 my-2 space-x-2 flex">
          <label>Waktu</label>
          <input type="date" className="bg-gray-200  w-full" />
          <input type="time" className="bg-gray-200  w-full" />
        </div>
        <div className="container">
          <label>Nama Obat (Obat Yang Sedang Digunakan Saat Ini)</label>
          <input
            class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          ></input>
        </div>
        <div className="container">
          <label>Dosis (mg, ml, mcg, unit)</label>
          <input
            class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          ></input>
        </div>
        <div className="container">
          <label>Frekuensi</label>
          <input
            class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          ></input>
        </div>
        <div className="container">
          <label>Rute</label>
          <input
            class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          ></input>
        </div>
        <div className="container">
          <label>Permintaan Obat Yang Diberikan Saat Masuk?</label>
          <div class="flex items-center">
            <label for="yes" class="inline-flex items-center">
              <input
                type="radio"
                name="option"
                id="yes"
                class="form-radio h-5 w-5 text-indigo-600"
                value="yes"
              />
              <span class="ml-2 text-gray-700">Yes</span>
            </label>
            <label for="no" class="inline-flex items-center ml-6">
              <input
                type="radio"
                name="option"
                id="no"
                class="form-radio h-5 w-5 text-indigo-600"
                value="no"
              />
              <span class="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>
        <div className="container">
          <label>Obat Dari Rumah Dilanjutkan Saat Pulang?</label>
          <div class="flex items-center">
            <label for="yes" class="inline-flex items-center">
              <input
                type="radio"
                name="option1"
                id="yes"
                class="form-radio h-5 w-5 text-indigo-600"
                value="yes"
              />
              <span class="ml-2 text-gray-700">Yes</span>
            </label>
            <label for="no" class="inline-flex items-center ml-6">
              <input
                type="radio"
                name="option1"
                id="no"
                class="form-radio h-5 w-5 text-indigo-600"
                value="no"
              />
              <span class="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end pb-10 ">
          <button
            className="py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75"
            type="submit"
          >
            SIMPAN
          </button>
        </div>

        <div className="container flex justify-between">
          <div className="text-left mt-2 pb-5 px-2">
            <label>Tanda Tangan Perawat/apoteker</label>
            <br />
            <br />
            <br />
            <br />

            <span>(Nama Lengkap)</span>
          </div>
          <div className="text-right mt-2 pb-5 px-2">
            <label>Tanda Tangan Dokter</label>
            <br />
            <br />
            <br />
            <br />

            <span>(Nama Lengkap)</span>
          </div>
        </div>
        <div className="flex justify-end pb-5 ">
          <button
            className="py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75"
            type="submit"
          >
            SIMPAN
          </button>
        </div>
        <div className="container">
          <div class="mx-auto">
            <h2 class="text-md font-bold">PETUNJUK BAGI DOKTER</h2>
            <ol class="list-decimal pl-8">
              <li class="mb-1">
                <p>
                  Dokter akan menjelaskan semua pengobatan yang tidak
                  dilanjutkan dan dokumentasikan dalam catatan perkembangan
                  pasien terintegrasi.
                </p>
              </li>
              <li class="mb-1">
                <p>
                  Dokter akan mereview daftar di atas, yang telah yang telah
                  dilengkapi sesuai dengan yang diketahui perawat, setelah itu
                  membubuhkan nama, tanda tangan tanggal dan waktu.
                </p>
              </li>
            </ol>
            <h2 class="text-md font-bold">TUJUAN</h2>
            <p class="mb-2">
              Untuk memastikan bahwa histori pengobatan setiap pasien
              didokumentasikan oleh perawat pada saat masuk dan direkonsiliasi
              oleh dokter. Setelah pulang, form akan digunakan untuk memastikan
              bahwa semua obat telah ditangani.
            </p>
            <p class="font-bold">SIFAT DARI FORM</p>
            <p class="mb-2">
              Form Rekonsiliasi Obat merupakan dokumen hukum yang
              mendokumentasikan manajemen pengobatan pasien yang aman dan
              efektif. Formulir ini akan digunakan untuk mengidentifikasi
              pengobatan pasien saat ini, dosis dan penjadwalannya. Rekonsiliasi
              Obat akan dilakukan untuk mengklarifikasi perbedaan antara regimen
              pengobatan pasien saat ini dan catatan terbaru dari obat- obatan
              yang diresepkan. Hal ini akan memungkinkan bagi para praktisi
              medis untuk meninjau informasi dan pesanan obat dan dosis yang
              tepat untuk pasien, saat masuk maupun pulang dari rumah sakit.
              Semua obat pasien akan direkonsiliasi dalam waktu 24 jam setelah
              masuk. Form Rekonsiliasi Obat merupakan form satu sisi dan diisi
              dengan tinta hitam.
            </p>
            <p class="font-bold">PETUGAS YANG BERTANGGUNG JAWAB</p>
            <p class="mb-2">
              Perawat Instalasi Gawat Darurat / Dokter / Apoteker yang
              melengkapi form
            </p>

            <p class="mb-1">
              <strong>PETUNJUK PENGISIAN</strong>
            </p>
            <ol class="list-decimal list-inside mb-1">
              <li>
                Saat mulai mengisi formulir ini tempelkan , label identifikasi
                pasien di sudut kanan formulir ini.
              </li>
              <li> Lengkapi kolom tanggal dan jam pengisian</li>
              <li>
                Lengkapi kolom alergi obat bila perlu, yang menunjukkan adanya
                alergi obat saat ini, makanan dan lingkungan
              </li>
              <li>
                Histori pengobatan akan diperoleh dari pasien dan / atau anggota
                keluarga yang hadir pada saat pasien masuk rumah sakit.
                Obat-obatan akan diperoleh dari ringkasan rujukan pasien, bila
                ada.
              </li>
              <li>
                Lengkapi nama, dosis, frekuensi dan rute masing-masing obat
              </li>
              <li>
                Centang di kolom "Ya" atau "Tidak" untuk menunjukkan jika obat
                dari rumah diberikan pada saat masuk.
              </li>
              <li>
                Formulir harus ditandatangani oleh perawat yang mengisi formulir
                ini pada saat masuk.
              </li>
              <li>
                Dokter menandatangani dan mengisi tanggal untuk memastikan
                proses rekonsiliasi telah dilakukan dan semua obat yang
                dibutuhkan telah dipesan.
              </li>
              <li>
                Saat pasien pulang, centang di kolom "Ya" atau "Tidak" pada
                kolom Obat Rumah Yang dilanjutkan saat pulang.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RekonsiliasiObat;
