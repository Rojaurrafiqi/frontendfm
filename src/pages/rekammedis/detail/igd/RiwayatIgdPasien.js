import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../config";

const RiwayatIgdPasien = (props) => {
  const { id } = props;

  const [dataRiwayatIgd, setDataRiwayatIgd] = useState([]);

  function getDataRiwayatIgdPasien(id) {
    axios
      .get(`${API_URL}/rm/igd/${id}`)
      .then((response) => {
        setDataRiwayatIgd(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getDataRiwayatIgdPasien(id);
  }, [id]);

  return (
    <div>
      <div className="text-left px-1 bg-emerald300 font-semibold">
        Riyawat IGD Pasien
      </div>
      <div className="container border border-state-300  bg-white p-5">
        <table class="table-auto w-full ">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Masuk
              </th>
              <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Keluar
              </th>
              <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cara Masuk
              </th>
              <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th class="px-6 py-3 bg-gray-50 text-center text-xs fonst-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {dataRiwayatIgd.length > 0 ? (
              dataRiwayatIgd.map((item, index) => (
                <tr key={item.id}>
                  <td className="text-left px-6 py-3">{index + 1}</td>
                  <td className="text-center px-6 py-3">{item.tgl_masuk}</td>
                  <td className="text-center px-6 py-3">
                    {item.tanggal_keluar_igd}
                  </td>
                  <td className="text-center px-6 py-3">{item.cara_masuk}</td>
                  <td className="text-center px-6 py-3">{item.status}</td>
                  <td className="text-center px-6 py-3">Detail</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colspan="6" className="bg-gray-200 w-full">
                  Pasien belum ada riwayat berobat di IGD
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiwayatIgdPasien;
