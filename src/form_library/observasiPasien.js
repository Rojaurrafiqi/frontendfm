import React from "react";

const ObservasiPasien = () => {
  return (
    <div>
      <div className="text-left pl-2 bg-emerald300 font-semibold">
        FORM OBSERVASI PASIEN IGD
      </div>
      <div className="container">
        <div className="container px-2 my-2 space-x-2 flex">
          <label>Waktu</label>
          <input type="date" className="bg-gray-200  w-full" />
          <input type="time" className="bg-gray-200  w-full" />
        </div>
        <div className="container text-left px-2">
          <label className="font-bold">1. Tanda-tanda Vital</label>

          <tr className="text-left ">
            <label className="pl-2">a. TD </label>
            <td className="px-2">:</td>
            <td>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </td>
            <span>mmHg</span>
          </tr>
          <tr className="text-left ">
            <label className="pl-2">b. HR </label>
            <td className="px-2">:</td>
            <td>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </td>
            <span>x/i</span>
          </tr>
          <tr className="text-left ">
            <label className="pl-2">c. RR </label>
            <td className="px-2">:</td>
            <td>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </td>
            <span>x/i</span>
          </tr>
          <tr className="text-left ">
            <label className="pl-2">d. T </label>
            <td className="px-2">:</td>
            <td>
              <input
                class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </td>
            <span>&#8451;</span>
          </tr>
        </div>
      </div>
      <div className="container text-left px-2">
        <label className="font-bold">2. Kesadaran</label>
        <input
          class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        ></input>
      </div>
      <div className="container text-left px-2">
        <label className="font-bold">3. GCS</label>
        <input
          class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        ></input>
      </div>
      <div className="container text-left px-2">
        <label className="font-bold">4. Tindakan</label>
        <textarea
          class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
          id="textarea"
          name="diagnosa"
        ></textarea>
      </div>
      <div className="container text-left px-2">
        <label className="font-bold">5. Keterangan</label>
        <input
          class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        ></input>
      </div>
      <div className="container text-left px-2">
        <label className="font-bold">6. Petugas</label>
        <input
          class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        ></input>
      </div>
      <div className="flex justify-end pb-10">
        <button
          className="py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75"
          type="submit"
        >
          SIMPAN
        </button>
      </div>

      <div className="container px-2">
        <div class="overflow-x-auto">
          <table class="table-auto">
            <thead>
              <tr>
                <th rowspan="2" class="px-2 py-0.5 border border-black">
                  Waktu
                </th>
                <th colspan="5" class="px-2 py-0.5 border border-black">
                  Tanda-tanda Vital
                </th>

                <th rowspan="2" class="px-2 py-0.5 border border-black">
                  Kesadaran
                </th>
                <th rowspan="2" class="px-2 py-0.5 border border-black">
                  GCS
                </th>
                <th rowspan="2" class="px-2 py-0.5 border border-black">
                  Tindakan
                </th>
                <th rowspan="2" class="px-2 py-0.5 border border-black">
                  Keterangan
                </th>
                <th rowspan="2" class="px-2 py-0.5 border border-black">
                  Action
                </th>
              </tr>
              <tr>
                <th class="px-2 py-0.5 border border-black">TD</th>
                <th class="px-2 py-0.5 border border-black">HR</th>
                <th class="px-2 py-0.5 border border-black">RR</th>
                <th class="px-2 py-0.5 border border-black">T</th>
                <th class="px-2 py-0.5 border border-black">SpO2</th>
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
                  Baris 1, Kolom 3
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 4
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 5
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 6
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 7
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 8
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 9
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 10
                </td>
                <td class="border border-black px-1 text-sm py-2">
                  Baris 1, Kolom 11
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ObservasiPasien;
