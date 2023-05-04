import React from "react";

const PengkajianAwalMedisPasienRawatInap = () => {
  return (
    <div>
      <div className="text-left pl-2 bg-emerald300 font-semibold">
        FORM PENGKAJIAN AWAL MEDIS PASIEN RAWAT INAP
      </div>
      <div className="container">
        <div className="px-2 my-2   text-left">
          <label>Waktu Pemeriksaan</label>
          <div className="flex space-x-2">
            <input type="date" className="bg-gray-200  w-full" />
            <input type="time" className="bg-gray-200  w-full" />
          </div>
        </div>
        <div className="container text-left px-2">
          <label className="font-bold">
            Anamnesis (pilih hubungan: Pasien/Keluarga/Orang Lain)
          </label>
          <input
            class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          ></input>
        </div>
        <div className="container text-left px-2">
          <label className="font-bold">Keluhan Utama</label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="container text-left px-2">
          <label className="font-bold">
            Riwayat Penyakit Sekarang (Termasuk Keluhan Tambahan, Data
            Pemeriksaan dan Pengobatan Yang Digunakan)
          </label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="container text-left px-2">
          <label className="font-bold">Riwayat Alergi</label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="container text-left px-2">
          <label className="font-bold">
            Riwayat Penyakit Keluarga (Penyakit Keturunan, Penyakit Menular dan
            Penyakit Kejiwaan)
          </label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="container text-left px-2">
          <label className="font-bold">
            Riwayat Pemeriksaan Sosial, Ekonomi, Kejiwaan, dan Kebiasaan
            (Termasuk Riwayat Perkawinan, Obstetri, Imunisasi, Tumbuh Kembang)
          </label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="container text-left px-2 pt-2">
          <label className="font-bold mb-2 ">Riwayat Penyakit Terdahulu</label>
          <div class="overflow-x-auto">
            <div className="flex mb-1">
              <button
                className="py-0.2 px-0.5 bg-emerald text-white hover:opacity-75"
                type="submit"
              >
                Tambah Data
              </button>
            </div>
            <table class="table-auto">
              <thead>
                <tr>
                  <th class="px-2 py-0.5 border border-black">Tahun</th>
                  <th class="px-2 py-0.5 border border-black">
                    Riwayat Pengobatan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-black px-1 text-sm py-2">
                    Baris 1, Kolom 1
                  </td>
                  <td class="border border-black px-1 text-sm py-2">
                    Baris 1, Kolom 2
                  </td>
                </tr>
                <tr>
                  <td class="border border-black px-1 text-sm py-2">
                    Baris 1, Kolom 1
                  </td>
                  <td class="border border-black px-1 text-sm py-2">
                    Baris 1, Kolom 2
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-left pl-2 mt-4 bg-emerald300 font-semibold">
          Pemeriksaan Fisik
        </div>
        <div className="text-left px-2">
          <label className="font-bold">Pemeriksaan Umum</label>
        </div>
        <div className="container flex text-left  pt-2">
          <div className="container">
            <tr className="text-left ">
              <label className="pl-2">Kesadaran Mental </label>
              <td className="px-2">:</td>
              <td>
                <input
                  class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                ></input>
              </td>
            </tr>
            <tr className="text-left ">
              <label className="pl-2">Tekanan Darah</label>
              <td className="px-2">:</td>
              <td>
                <input
                  class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                ></input>
              </td>
            </tr>
            <tr className="text-left ">
              <label className="pl-2">Nadi</label>
              <td className="px-2">:</td>
              <td>
                <input
                  class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                ></input>
              </td>
            </tr>
            <tr className="text-left ">
              <label className="pl-2">Pernafasan</label>
              <td className="px-2">:</td>
              <td>
                <input
                  class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                ></input>
              </td>
            </tr>
            <tr className="text-left ">
              <label className="pl-2">Suhu</label>
              <td className="px-2">:</td>
              <td>
                <input
                  class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                ></input>
              </td>
            </tr>
          </div>
          <div className="container">
            <tr className="text-left ">
              <label className="pl-2">Tinggi Badan</label>
              <td className="px-2">:</td>
              <td>
                <input
                  class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                ></input>
              </td>
              <span>cm</span>
            </tr>
            <tr className="text-left ">
              <label className="pl-2">Berat Badan</label>
              <td className="px-2">:</td>
              <td>
                <input
                  class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                ></input>
              </td>
              <span>kg</span>
            </tr>
          </div>
        </div>

        <div className="container">
          <div className="text-left px-2">
            <label className="font-bold">Kepala dan Leher</label>
          </div>
          <tr className="text-left ">
            <label className="pl-2">Kepala</label>
            <td className="px-2">:</td>
            <td>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </td>
          </tr>
          <tr className="text-left ">
            <label className="pl-2">Konjungtiva </label>
            <td className="px-2">:</td>
            <td>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </td>
          </tr>
          <tr className="text-left ">
            <label className="pl-2">Leher</label>
            <td className="px-2">:</td>
            <td>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </td>
          </tr>
        </div>

        <div className="container text-left px-2 mt-2">
          <label className="font-bold">DADA DAN PUNGGUNG</label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="container text-left px-2 mt-2">
          <label className="font-bold">
            <div className="container text-left ">
              <label className="font-bold">
                PARU : (Inspeksi, Palpasi, Perkusi, Auskultasi)
              </label>
            </div>
          </label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="container text-left px-2 mt-2">
          <label className="font-bold">
            JANTUNG : (Inspeksi, Palpasi, Perkusi, Auskultasi)
          </label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="container text-left px-2 mt-2">
          <label className="font-bold">
            PERUT DAN PINGGANG : (Inspeksi, Palpasi, Perkusi, Auskultasi)
          </label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="container text-left px-2 mt-2">
          <label className="font-bold">
            ANGGOTA GERAK : (Termasuk Sendi dan Kuku)
          </label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="container text-left px-2 mt-2">
          <label className="font-bold">
            GENETALIA DAN ANUS : (Diperiksa Apabila ada Indikasi)
          </label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
      </div>
      <div className="text-left pl-2 mt-4 bg-emerald300 font-semibold">
        Pemeriksaan Penunjang
      </div>
      <div className="container text-left px-2 mt-2">
        <label className="font-bold">
          HASIL LABORATORIUM RUTIN (ditulis lengkap)
        </label>
        <textarea
          class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
          id="textarea"
          name="diagnosa"
        ></textarea>
      </div>
      <div className="container text-left px-2 mt-2">
        <label className="font-bold">
          PEMERIKSAAN PENUNJANGN LAIN SEPERTI : RONTGEN, EKG, DLL (Kesimpulan
          Saja)
        </label>
        <textarea
          class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
          id="textarea"
          name="diagnosa"
        ></textarea>
      </div>
      <div className="container text-left px-2 mt-2">
        <label className="font-bold">
          RINGKASAN : (Uraian singkat berupa kalimat terdiri dari 3-5 baris
          saja, menggambarkan interpretasi awal)
        </label>
        <textarea
          class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
          id="textarea"
          name="diagnosa"
        ></textarea>
      </div>
      <div className="text-left pl-2 mt-4  bg-emerald300 font-semibold">
        Daftar Masalah dan Diagnosis
      </div>

      <div className="container text-left px-2 pt-2">
        <p>
          (dapat berupa diagnosis, gejala, kelainan lain, berdasarkan konsep
          biopsiko-sosial)
        </p>

        <div class="overflow-x-auto">
          <div className="flex mb-1">
            <button
              className="py-0.2 px-0.5 bg-emerald text-white hover:opacity-75"
              type="submit"
            >
              Tambah Data
            </button>
          </div>
          <table class="table-auto">
            <thead>
              <tr>
                <th class="px-2 py-0.5 border border-black">Tanggal</th>
                <th class="px-2 py-0.5 border border-black">Masalah</th>
                <th class="px-2 py-0.5 border border-black">
                  Tanggal Masalah Selesai
                </th>
                <th class="px-2 py-0.5 border border-black">Nama Dokter</th>
                {/* <th class="px-2 py-0.5 border border-black">Action</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 1
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
              </tr>
              <tr>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 1
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
              </tr>
              <tr>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 1
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="overflow-x-auto mt-2">
          <label className="font-bold">TABLE PENGKAJIAN MASALAH</label>
          <p className="text-sm">
            (Bila masalah belum jelas buat pengkajian, bila masalah jelas, tulis
            sudah jelas)
          </p>
          <div className="flex mb-1">
            <button
              className="py-0.2 px-0.5 bg-emerald text-white hover:opacity-75"
              type="submit"
            >
              Tambah Data
            </button>
          </div>
          <table class="table-auto">
            <thead>
              <tr>
                <th class="px-2 py-0.5 border border-black">No</th>
                <th class="px-2 py-0.5 border border-black">
                  Pengkajian Masalah
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td class="border border-black px-1 text-sm py-2">1</td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
              </tr>
              <tr>
                <td class="border border-black px-1 text-sm py-2">2</td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
              </tr>
              <tr>
                <td class="border border-black px-1 text-sm py-2">3</td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 2
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-left pl-2 mt-4  bg-emerald300 font-semibold">
        Rencana Penatalaksanaan
      </div>
      <div className="flex">
        <div className="container">
          <p className="font-bold text-left mt-2 px-2">
            RENCANA PENATALAKSANAAN TARGET TERUKUR
          </p>

          <div className="container text-left px-2 mt-2">
            <label className="font-bold">Diet</label>
            <textarea
              class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              id="textarea"
              name="diagnosa"
            ></textarea>
          </div>
          <div className="container text-left px-2 mt-2">
            <label className="font-bold">Target Awal Perawatan</label>
            <textarea
              class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              id="textarea"
              name="diagnosa"
            ></textarea>
          </div>
          <div className="container text-left px-2 mt-2">
            <label className="font-bold">Rencana Edukasi</label>
            <textarea
              class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              id="textarea"
              name="diagnosa"
            ></textarea>
          </div>
        </div>
        <div className="container">
          <p className="font-bold text-left mt-2 px-2">
            INSTRUKSI MEDIS (intruksi ditulis dengan rincian jelas)
          </p>
          <div className="container text-left px-2 mt-2">
            <label className="font-bold">Rencana Diagnosis</label>
            <textarea
              class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              id="textarea"
              name="diagnosa"
            ></textarea>
          </div>
          <div className="container text-left px-2 mt-2">
            <label className="font-bold">Tatalaksana Terapi</label>
            <textarea
              class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
              id="textarea"
              name="diagnosa"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="container text-right mt-2 pb-10 px-2">
        <label>Tanda Tangan DPJP</label>
        <br />
        <br />
        <br />
        <br />

        <span>(Nama Lengkap)</span>
      </div>
    </div>
  );
};

export default PengkajianAwalMedisPasienRawatInap;
