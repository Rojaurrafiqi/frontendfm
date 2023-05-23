import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { API_URL } from "../../../../config";

const TambahPenjualan = () => {
  const [rowData, setRowData] = useState([
    {
      id_obat: "",
      jumlah: "",
      harga_satuan: "",
      diskon: 0,
      total_harga: "",
      tanggal_penjualan: "",
      informasi_pembayaran: "",
      metode_pembayaran: "",
    },
  ]);

  const deleteRow = (index) => {
    let data = [...rowData];
    data.splice(index, 1);
    setRowData(data);
  };

  const addRow = () => {
    let newRow = {
      id_obat: "",
      jumlah: "",
      harga_satuan: "",
      diskon: 0,
      total_harga: "",
      tanggal_penjualan: "",
      informasi_pembayaran: "",
      metode_pembayaran: "",
    };
    setRowData([...rowData, newRow]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = rowData.map((row) => ({
        id_obat: Number(row.id_obat),
        jumlah: String(row.jumlah),
        harga_satuan: String(row.harga_satuan),
        diskon: String(row.diskon),
        total_harga: String(row.total_harga),
        tanggal_penjualan: selectedDate,
        informasi_pembayaran: selectedStatusPembayaran,
        metode_pembayaran: selectedPaymentMethod,
      }));

      const sendData = await axios.post(
        `${API_URL}/farmasi/obat/penjualan`,
        data
      );

      console.log(sendData);
    } catch (error) {
      console.log(error);
    }
  };

  const [totalSum, setTotalSum] = useState();

  const handleFormPenjualanChange = (index, event) => {
    let data = [...rowData];
    data[index][event.target.name] = event.target.value;

    const jumlah = parseFloat(data[index].jumlah);
    const hargaSatuan = parseFloat(data[index].harga_satuan);
    const diskon = parseFloat(data[index].diskon);

    if (!isNaN(jumlah) && !isNaN(hargaSatuan) && !isNaN(diskon)) {
      const totalHarga = (jumlah * hargaSatuan * (100 - diskon)) / 100;
      data[index].total_harga = totalHarga.toFixed(0);
    } else {
      data[index].total_harga = "";
    }
    setRowData(data);

    const sum = data.reduce(
      (total, row) => total + parseFloat(row.total_harga),
      0
    );
    setTotalSum(sum);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString();
    let day = currentDate.getDate().toString();

    // Pad the month and day with leading zeros if needed
    if (month.length === 1) {
      month = "0" + month;
    }
    if (day.length === 1) {
      day = "0" + day;
    }

    return `${year}-${month}-${day}`;
  };

  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");
  const [selectedStatusPembayaran, setSelectedStatusPembayaran] =
    useState("lunas");

  // sampai disini kolom search

  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState("");
  const [namaObatList, setNamaObatList] = useState([]);

  const fetchNamaObatByStok = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/farmasi/obat/nama/stok?search=${query}`
      );
      setOptions(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNamaObatByStok();
  }, [query, options]);

  const handleQueryObat = (index, event) => {
    const query = event.target.value;
    setQuery(query);
  };

  const handleObatSelect = (index, obatId, obatNama, harga) => {
    setRowData((prevData) => {
      const data = [...prevData];
      data[index].id_obat = obatId;
      data[index].nama_obat = obatNama;
      data[index].harga_satuan = harga;
      data[index].jumlah = "";
      return data;
    });
    setNamaObatList(false);
    setQuery("");
  };
  useEffect(() => {
    setNamaObatList(rowData.map(() => false));
  }, [rowData]);

  // console.log(options);

  // sampai disini kolom search

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
          <table class="table-auto w-full mb-20">
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
              {rowData.map((input, index) => (
                <tr
                  key={index}
                  className="border text-center border-gray-300 mx-4"
                >
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    {index + 1}
                  </td>

                  <td>
                    <td>
                      <input
                        className="border text-center border-gray-300 mx-4"
                        readOnly
                        name="id_obat"
                        value={input.nama_obat}
                        onClick={() => {
                          setNamaObatList((prevState) => {
                            const updatedState = [...prevState];
                            updatedState[index] = !updatedState[index];
                            return updatedState;
                          });
                        }}
                      />
                      {namaObatList[index] && (
                        <div className="relative">
                          <input
                            onChange={(event) => handleQueryObat(index, event)}
                            className="border border-black"
                            placeholder="search"
                          />
                          {namaObatList[index] && options.length > 0 && (
                            <div className="absolute left-0 mt-2 w-full">
                              <ul className="bg-white border border-gray-300 rounded-md shadow-md">
                                {options.map((item) => (
                                  <li
                                    className="px-2 hover:bg-gray-100"
                                    key={item.id}
                                  >
                                    <a
                                      href="#"
                                      value={item.obat_data?.id}
                                      onClick={() =>
                                        handleObatSelect(
                                          index,
                                          item.obat_data?.id,
                                          item.obat_data?.nama_obat,
                                          item.harga_jual
                                        )
                                      }
                                    >
                                      {item.obat_data?.nama_obat}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                  </td>
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    <input
                      class="hover:border text-center hover:border-gray-300  text-sm w-full px-1 "
                      name="jumlah"
                      type="text"
                      value={input.jumlah}
                      onChange={(event) =>
                        handleFormPenjualanChange(index, event)
                      }
                    />
                  </td>
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    <input
                      class="hover:border text-center hover:border-gray-300  text-sm w-full px-1 "
                      name="harga_satuan"
                      type="text"
                      readOnly
                      value={input.harga_satuan}
                      onChange={(event) =>
                        handleFormPenjualanChange(index, event)
                      }
                    />
                  </td>
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    <input
                      class="hover:border text-center hover:border-gray-300  text-sm w-full px-1 "
                      name="diskon"
                      type="text"
                      value={input.diskon}
                      onChange={(event) =>
                        handleFormPenjualanChange(index, event)
                      }
                    />
                  </td>
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    <input
                      class="hover:border text-center hover:border-gray-300  text-sm w-full px-1 "
                      name="total_harga"
                      type="text"
                      value={`Rp ${input.total_harga}`}
                      onChange={(event) =>
                        handleFormPenjualanChange(index, event)
                      }
                      readOnly
                    />
                  </td>
                  <td className="py-0.3  px-6 whitespace-nowrap">
                    <button onClick={() => deleteRow(index)}>Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="text-center">Total : {totalSum} </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-row space-x-4 my-2 justify-end sticky">
            <p className="text-sm">
              Tanggal :
              <input
                type="date"
                name="tanggal_penjualan"
                defaultValue={selectedDate}
                onChange={(event) => setSelectedDate(event.target.value)}
              />
            </p>
            <p className="text-sm">
              Metode Pembayaran :
              <select
                name="metode_pembayaran"
                className="border border-gray-500 mx-1"
                value={selectedPaymentMethod}
                onChange={(event) =>
                  setSelectedPaymentMethod(event.target.value)
                }
              >
                <option value="cash">Cash</option>
                <option value="credit_card">Credit Card</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="bank_transfer">QRIS</option>
              </select>
            </p>
            <p className="text-sm pr-40">
              Status Pembayaran :
              <select
                name="informasi_pembayaran"
                className="border border-gray-500 mx-1"
                value={selectedStatusPembayaran}
                onChange={(event) =>
                  setSelectedStatusPembayaran(event.target.value)
                }
              >
                <option value="lunas">Lunas</option>
                <option value="credit_card">Credit</option>
              </select>
            </p>
          </div>
        </div>
        <div className="flex justify-end mr-4">
          <button
            type="submit"
            className="border border-gray-500 px-1 py-0.3 bg-emerald text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahPenjualan;
