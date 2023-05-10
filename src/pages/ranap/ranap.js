import React, { useState } from "react";
import Sidebar from "../templates/sidebar";
import Header from "../templates/header";
import { useNavigate } from "react-router-dom";
import Modal from "../../component/Modal";
// import Pendaftaran from "./pendaftaran/pendaftaran";

const Ranap = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleDaftar = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
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
              <button
                className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
                onClick={handleDaftar}
              >
                DAFTAR
              </button>
              <button
                className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
                onClick={handleBack}
              >
                KAMAR
              </button>
              <button
                className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
                onClick={handleBack}
              >
                JADWAL
              </button>
              <button
                className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
                type="button"
                onClick={handleBack}
              >
                REPORT
              </button>
            </div>
          </div>
          <div class="container mx-auto 2xl:w-screen px-8 pb-10">
            <div className="container border border-state-300 bg-white p-5 mt-5 mb-4 ">
              <div className="search text-left flex">
                <form>
                  <input
                    className="border border-black pl-0.5 py-0.4  "
                    type="text"
                    placeholder="Cari data pasien..."
                    autoFocus
                  />
                </form>

                <div className="container mx-auto w-full flex justify-end pr-2">
                  <button
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
              <div class="overflow-x-auto mb-5">
                <div className="container bg-emerald300 text-left pl-2 mt-3 py-0.5">
                  Daftar Pasien Rawat Inap
                </div>
                <table class="table-auto w-full">
                  <thead>
                    <tr>
                      <th class="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No RM
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nama Pasien
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No Kamar
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No Bad
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tanggal Masuk
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Dokter
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Perawat
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Aksi
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-left text-xs fonst-medium text-gray-500 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">1</td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        0001
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Rudi Hartono
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        VVIP 1
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        01
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        12-12-2023
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Dr. Aditya Wijaya
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Nurul Hasanah
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Detail
                      </td>
                    </tr>
                    <tr>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">2</td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        0002
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Maya Fitriani
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        KELAS 4
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        02
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        13-12-2023
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Dr. Aditya Wijaya
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Nurul Hasanah
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Detail
                      </td>
                    </tr>
                    <tr>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">3</td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        0003
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Budi Santoso
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        VIP 2
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        01
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        12-12-2023
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Dr. Aditya Wijaya
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Nurul Hasanah
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Detail
                      </td>
                    </tr>
                    <tr>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">4</td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        0004
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Ahmad Syahid
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        VVIP 3
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        01
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        14-12-2023
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Dr. Aditya Wijaya
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Nurul Hasanah
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Detail
                      </td>
                    </tr>
                    <tr>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">5</td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        0005
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Siti Rahma
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        KELAS 3
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        03
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        12-12-2023
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Dr. Aditya Wijaya
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Nurul Hasanah
                      </td>
                      <td className="class=py-0.3 px-6 whitespace-nowrap">
                        Detail
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* pemanggilan modal */}
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
              <div class="fixed bg-white rounded-lg w-11/12 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
                <div class="flex justify-between px-4 py-2">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
                    Pendaftaran Pasien Rawat Inap
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

                <form>
                  <div class="bg-gray-50 p-6 ">
                    <div class="flex flex-col md:flex-row overflow-y-auto h-80 px-2">
                      LiveScript adalah bahasa pemrograman fungsional yang
                      berbasis JavaScript. Tujuannya adalah untuk
                      menyederhanakan sintaksis JavaScript dan memperkenalkan
                      fitur-fitur bahasa fungsional yang kuat. LiveScript
                      mengadopsi gaya sintaksis yang mirip dengan CoffeeScript,
                      tetapi dengan fokus pada pemrograman fungsional. Meskipun
                      LiveScript dapat menghasilkan kode JavaScript yang valid,
                      itu bukanlah sekadar "gula sintaksis" untuk JavaScript.
                      LiveScript memiliki aturan penulisan yang berbeda dan
                      memperkenalkan beberapa konsep baru. Beberapa fitur
                      LiveScript yang berbeda dari JavaScript meliputi:
                      Sintaksis yang Ekspresif: LiveScript menawarkan sintaksis
                      yang lebih ringkas dan ekspresif daripada JavaScript. Ini
                      termasuk penyingkatan penulisan, penghilangan titik koma,
                      dan gaya penulisan yang lebih deklaratif. Pemrograman
                      Fungsional: LiveScript mendukung paradigma pemrograman
                      fungsional dengan fitur-fitur seperti fungsi tingkat
                      tinggi, penggunaan fungsi sebagai argumen, komposisi
                      fungsi, dan kurrying. Pattern Matching: LiveScript
                      memiliki fitur pattern matching yang kuat, yang
                      memungkinkan pola yang kompleks untuk dicocokkan dengan
                      nilai dan mengambil tindakan yang sesuai. Operator
                      Pipeline: LiveScript memperkenalkan operator pipeline yang
                      memudahkan komposisi fungsi dan mengalirkan data melalui
                      serangkaian transformasi. Pembuatan Objek yang Mudah:
                      Dalam LiveScript, pembuatan objek lebih mudah dan
                      sintaksisnya lebih ringkas dibandingkan dengan JavaScript.
                      Peningkatan Keselamatan: LiveScript memiliki aturan
                      penulisan yang ketat dan beberapa fitur untuk mencegah
                      kesalahan umum yang sering terjadi dalam JavaScript.
                      Meskipun LiveScript menawarkan beberapa manfaat, perlu
                      diingat bahwa itu adalah bahasa yang berbeda dengan
                      JavaScript dan dapat memerlukan pembelajaran tambahan.
                      Jika Anda ingin menggunakan LiveScript, pastikan Anda
                      memahami perbedaan sintaksis dan fitur-fiturnya.
                      LiveScript adalah bahasa pemrograman fungsional yang
                      berbasis JavaScript. Tujuannya adalah untuk
                      menyederhanakan sintaksis JavaScript dan memperkenalkan
                      fitur-fitur bahasa fungsional yang kuat. LiveScript
                      mengadopsi gaya sintaksis yang mirip dengan CoffeeScript,
                      tetapi dengan fokus pada pemrograman fungsional. Meskipun
                      LiveScript dapat menghasilkan kode JavaScript yang valid,
                      itu bukanlah sekadar "gula sintaksis" untuk JavaScript.
                      LiveScript memiliki aturan penulisan yang berbeda dan
                      memperkenalkan beberapa konsep baru. Beberapa fitur
                      LiveScript yang berbeda dari JavaScript meliputi:
                      Sintaksis yang Ekspresif: LiveScript menawarkan sintaksis
                      yang lebih ringkas dan ekspresif daripada JavaScript. Ini
                      termasuk penyingkatan penulisan, penghilangan titik koma,
                      dan gaya penulisan yang lebih deklaratif. Pemrograman
                      Fungsional: LiveScript mendukung paradigma pemrograman
                      fungsional dengan fitur-fitur seperti fungsi tingkat
                      tinggi, penggunaan fungsi sebagai argumen, komposisi
                      fungsi, dan kurrying. Pattern Matching: LiveScript
                      memiliki fitur pattern matching yang kuat, yang
                      memungkinkan pola yang kompleks untuk dicocokkan dengan
                      nilai dan mengambil tindakan yang sesuai. Operator
                      Pipeline: LiveScript memperkenalkan operator pipeline yang
                      memudahkan komposisi fungsi dan mengalirkan data melalui
                      serangkaian transformasi. Pembuatan Objek yang Mudah:
                      Dalam LiveScript, pembuatan objek lebih mudah dan
                      sintaksisnya lebih ringkas dibandingkan dengan JavaScript.
                      Peningkatan Keselamatan: LiveScript memiliki aturan
                      penulisan yang ketat dan beberapa fitur untuk mencegah
                      kesalahan umum yang sering terjadi dalam JavaScript.
                      Meskipun LiveScript menawarkan beberapa manfaat, perlu
                      diingat bahwa itu adalah bahasa yang berbeda dengan
                      JavaScript dan dapat memerlukan pembelajaran tambahan.
                      Jika Anda ingin menggunakan LiveScript, pastikan Anda
                      memahami perbedaan sintaksis dan fitur-fiturnya.
                    </div>
                  </div>
                  <div class="bg-gray-100 px-4 py-2 flex justify-end">
                    <button
                      type="submit"
                      class="px-2 py-0.5 bg-emerald hover:opacity-75 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                      onclick="toggleModal()"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranap;
