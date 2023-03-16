import React, { useState, useEffect } from "react";

const Wilayah = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [kabupatenKota, setKabupatenKota] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  const [selectedKabupatenKota, setSelectedKabupatenKota] = useState("");

  useEffect(() => {
    const fetchProvinsi = async () => {
      const response = await fetch("https://dev.farizdotid.com/api/daerahindonesia/provinsi");
      const data = await response.json();
      setProvinsi(data.provinsi);
    };
    fetchProvinsi();
  }, []);

  useEffect(() => {
    const fetchKabupatenKota = async () => {
      const response = await fetch(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${selectedProvinsi}`);
      const data = await response.json();
      setKabupatenKota(data.kota_kabupaten);
    };
    if (selectedProvinsi) {
      fetchKabupatenKota();
    }
  }, [selectedProvinsi]);

  const handleProvinsiChange = (e) => {
    setSelectedProvinsi(e.target.value);
    setSelectedKabupatenKota("");
  };

  const handleKabupatenKotaChange = (e) => {
    setSelectedKabupatenKota(e.target.value);
  };

  return (
    <div>
      <h2>Pilih Wilayah</h2>
      <div>
        <label>Provinsi:</label>
        <select value={selectedProvinsi} onChange={handleProvinsiChange}>
          <option value="">Pilih Provinsi</option>
          {provinsi.map((item) => (
            <option key={item.id} value={item.id}>
              {item.nama}
            </option>
          ))}
        </select>
      </div>
      {selectedProvinsi && (
        <div>
          <label>Kabupaten/Kota:</label>
          <select value={selectedKabupatenKota} onChange={handleKabupatenKotaChange}>
            <option value="">Pilih Kabupaten/Kota</option>
            {kabupatenKota.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nama}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Wilayah;
