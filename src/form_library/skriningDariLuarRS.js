import React from "react";

const SkriningDariLuarRS = () => {
  return (
    <div>
      <div className="text-left pl-2 bg-emerald300 font-semibold">
        FORMULIR SKRINING DARI LUAR RUMAH SAKIT
      </div>
      <div className="container text-left px-2">
        <label className="font-bold">1. Data Awal</label>
        <tr className="text-left ">
          <label className="pl-2">a. Asal Rujukan </label>
          <td className="px-2">:</td>
          <td>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </td>
        </tr>
        <tr className="text-left ">
          <label className="pl-2">b. Status Pembayaran </label>
          <td className="px-2">:</td>
          <td>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </td>
        </tr>
        <tr className="text-left ">
          <label className="pl-2">c. Alasan di Rujuk </label>
          <td className="px-2">:</td>
          <td>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </td>
        </tr>
      </div>
      <div className="container text-left px-2">
        <label className="font-bold">2. Diagnosa</label>
        <textarea
          class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
          id="textarea"
          name="diagnosa"
        ></textarea>
      </div>
      <div className="container text-left px-2">
        <label className="font-bold">3. Keadaan Pasien</label>
        <tr className="text-left ">
          <label className="pl-2">a. Keadaan Umum </label>
          <td className="px-2">:</td>
          <td>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </td>
        </tr>
        <tr className="text-left ">
          <label className="pl-2">b. Kesadaran </label>
          <td className="px-2">:</td>
          <td>
            <input
              class="appearance-none border border-black rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </td>
        </tr>
        <tr className="text-left ">
          <label className="pl-2">c. TD </label>
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
          <label className="pl-2">d. HR </label>
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
          <label className="pl-2">e. RR </label>
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
          <label className="pl-2">f. T </label>
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
      <div className="container text-left px-2">
        <label className="font-bold">4. Penatalaksanaan</label>
        <div className="text-left ">
          <label className="pl-2">a. Terapi </label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="text-left ">
          <label className="pl-2">b. Tindakan </label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
      </div>
      <div className="container text-left px-2">
        <label className="font-bold italic">5. Hand Over</label>
        <div className="flex px-2">
          <div className="container">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 text-gray-700">
                Resusitasi
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 text-gray-700">
                Neuro
              </label>
            </div>
          </div>
          <div className="container">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 text-gray-700">
                Bedah
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 text-gray-700">
                Mata
              </label>
            </div>
          </div>
          <div className="container">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 text-gray-700">
                Intema
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 text-gray-700">
                Paru
              </label>
            </div>
          </div>
          <div className="container">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 text-gray-700">
                Kardio
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 text-gray-700">
                Anak
              </label>
            </div>
          </div>
          <div className="container">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 text-gray-700">
                Obgyn
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 text-gray-700">
                Lain-Lain
              </label>
            </div>
          </div>
        </div>
        <div className="container px-2">
          <label>Lain-lain</label>
          <input
            class="appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          ></input>
        </div>
      </div>

      <div className="container text-left px-2">
        <label className="font-bold italic">6. Keterangan</label>
        <div className="flex  px-2">
          <div className="container">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 mr-2 text-gray-700">
                Terima
              </label>
              <input
                type="checkbox"
                id="myCheckbox"
                class="form-checkbox h-5 w-5 text-gray-600 rounded-sm"
              />
              <label for="myCheckbox" class="ml-2 text-gray-700">
                Tolak
              </label>
            </div>
          </div>
        </div>
        <div className="container px-2">
          <label>Alasan</label>
          <textarea
            class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
            id="textarea"
            name="diagnosa"
          ></textarea>
        </div>
        <div className="container text-right mt-2 pb-10 px-2">
          <label>Tanda Tangan Petugas Jaga</label>
          <br />
          <br />
          <br />
          <br />

          <span>(Nama Lengkap)</span>
        </div>
        <div className="flex justify-end pb-10">
          <button
            className="py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75"
            type="submit"
          >
            SIMPAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkriningDariLuarRS;
