import React from "react";

const PengantarRawat = () => {
  return (
    <div>
      <div className="text-left pl-2 bg-emerald300 font-semibold">
        PENGANTAR RAWAT
      </div>
      <div className="flex my-2 mx-2">
        <div className="container">
          <tr className="text-left">
            <td>Tanggal Masuk</td>
            <td className="px-2">:</td>
            <input type="date" className="bg-gray-200  w-full" />
          </tr>
        </div>
        <div className="container">
          <tr className="text-left">
            <label>Ruang Rawat</label>
            <td className="px-2">:</td>
            <input type="text" className="bg-gray-200  w-full" />
          </tr>
        </div>
      </div>
      <div className="container text-left px-2">
        <label>Keluhan Utama dan Riwayat Penyakit Yang positif :</label>
        <textarea
          class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
          id="textarea"
          name="terapi_pengobatan_rs"
        ></textarea>
      </div>
      <div className="container  text-left px-2">
        <label>Pemeriksaan fisik dan laboratorium Yang positif :</label>
        <textarea
          class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
          id="textarea"
          name="terapi_pengobatan_rs"
        ></textarea>
      </div>
      <div className="container  text-left px-2">
        <label>Jalannya penyakit selama perawatan (Konsultasi) :</label>
        <textarea
          class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
          id="textarea"
          name="terapi_pengobatan_rs"
        ></textarea>
      </div>
      <div className="container  text-left px-2">
        <label>Diagnosis Kerja (satu atau lebih) :</label>
        <textarea
          class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
          id="textarea"
          name="terapi_pengobatan_rs"
        ></textarea>
      </div>
      <div className="container  text-left px-2">
        <label>Tindakan / terapi yang telah diberikan :</label>
        <textarea
          class="form-textarea mt-1 block w-full border border-black rounded-md py-2 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm"
          id="textarea"
          name="terapi_pengobatan_rs"
        ></textarea>
      </div>
      <div className="container text-right mt-2 pb-10 px-2">
        <label>Tanda Tangan Dokter yang BertanggungJawab</label>
        <br />
        <br />
        <br />
        <br />

        <span>(TTD dan Nama Lengkap)</span>
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
  );
};

export default PengantarRawat;
