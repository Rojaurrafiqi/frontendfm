import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../config";

const TambahPenjualan = () => {
  const [rowData, setRowData] = useState([1]);

  const addRow = () => {
    const newRow = { id: Date.now() }; // Assign a unique identifier to each row
    setRowData((prevData) => [...prevData, newRow]);
  };

  const deleteRow = (id) => {
    setRowData((prevData) => prevData.filter((row) => row.id !== id));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const obatDataArray = rowData.map((row) => ({
        id_obat: row.id_obat,
        jumlah: row.jumlah,
        harga_satuan: row.harga_satuan,
        diskon: row.diskon,
        total_harga: row.total_harga,
      }));

      console.log(obatDataArray);
      // const sendData = await axios.post(
      //   `${API_URL}/farmasi/obat/penjualan`,
      //   obatDataArray
      // );
      // console.log(sendData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormPenjualanChange = (event, index) => {
    const { name, value } = event.target;

    setRowData((prevData) => {
      const updatedRow = { ...prevData[index], [name]: value };
      const updatedData = [...prevData];
      updatedData[index] = updatedRow;
      return updatedData;
    });
  };

  return (
    <div>
      <div className="container bg-emerald300 text-left pl-2 mt-3 py-0.5">
        <div className="flex justify-between px-4">
          <p>Input Penjualan</p>
          <button onClick={addRow}>Add Rows</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="overflow-y-auto max-h-[48vh]">
          <table class="table-auto w-full">
            <thead className="sticky top-0 ">
              <tr>
                <th class=" py-3 px-6 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No
                </th>
                <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Obat
                </th>
                <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Harga
                </th>
                <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Diskon
                </th>
                <th class=" py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th class=" py-3 px-6 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 ">
              {rowData.map((row, index) => (
                <tr
                  key={row.id}
                  className="border text-center border-gray-300 mx-4"
                >
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <input
                    className="hover:border text-center hover:border-gray-300 text-sm w-full px-1"
                    name="id_obat"
                    type="text"
                    onChange={(event) =>
                      handleFormPenjualanChange(event, index)
                    }
                  />
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    <input
                      class="hover:border text-center hover:border-gray-300  text-sm w-full px-1 "
                      name="jumlah"
                      type="text"
                    />
                  </td>
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    <input
                      class="hover:border text-center hover:border-gray-300  text-sm w-full px-1 "
                      name="harga_satuan"
                      type="text"
                    />
                  </td>
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    <input
                      class="hover:border text-center hover:border-gray-300  text-sm w-full px-1 "
                      name="diskon"
                      type="text"
                    />
                  </td>
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    <input
                      class="hover:border text-center hover:border-gray-300  text-sm w-full px-1 "
                      name="total_harga"
                      type="text"
                    />
                  </td>
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    <button onClick={() => deleteRow(row.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="text-right">Total : </td>
                <td>Rp. 40.000</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-row space-x-4 my-2 justify-end sticky">
            <p className="text-sm">
              Tanggal : <input type="tanggal_penjualan" />
            </p>
            <p className="text-sm"> Metode Pembayaran : Cash </p>
            <p className="text-sm">Status Pembayaran : Lunas</p>
            <p className="text-sm pr-40">Total Pembayaran : Rp. 40.000</p>
          </div>
        </div>
        <div className="flex justify-end mr-4">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TambahPenjualan;
