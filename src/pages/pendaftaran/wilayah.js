import React, { useState, useEffect } from "react";

const Wilayah = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [kabupatenKota, setKabupatenKota] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [desa, setDesa] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  const [selectedKabupatenKota, setSelectedKabupatenKota] = useState("");
  const [selectedKecamatan, setSelectedKecamatan] = useState("");
  const [selectedDesa, setSelectedDesa] = useState("");

  useEffect(() => {
    const fetchProvinsi = async () => {
      const response = await fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json");
      const data = await response.json();
      setProvinsi(data);
    };
    fetchProvinsi();
  }, []);

  useEffect(() => {
    const fetchKabupatenKota = async () => {
      const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinsi}.json`);
      const data = await response.json();
      setKabupatenKota(data);
      // console.log(kabupatenKota);
    };
    if (selectedProvinsi) {
      fetchKabupatenKota();
    }
  }, [selectedProvinsi]);
  
  useEffect(() => {
    const fetchKecamatan = async () => {
      const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedKabupatenKota}.json`);
      const data = await response.json();
      setKecamatan(data);
      // console.log(kecamatan);
    };
    if (selectedKabupatenKota) {
      fetchKecamatan();
    }
  }, [selectedKabupatenKota]);
  
  useEffect(() => {
    const fetchDesa = async () => {
      const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedKecamatan}.json`);
      const data = await response.json();
      setDesa(data);
      // console.log(kecamatan);
    };
    if (selectedKecamatan) {
      fetchDesa();
    }
  }, [selectedKecamatan]);

  const handleProvinsiChange = (e) => {
    setSelectedProvinsi(e.target.value);
    setSelectedKabupatenKota("");
  };

  const handleKabupatenKotaChange = (e) => {
    setSelectedKabupatenKota(e.target.value);
  };

  const handleKecamatanChange = (e) => {
    setSelectedKecamatan(e.target.value);
  };

  const handleDesaChange = (e) => {
    setSelectedDesa(e.target.value);
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
              {item.name}
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
                {item.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedKabupatenKota && (
        <div>
          <label>Kecamatan:</label>
          <select value={selectedKecamatan} onChange={handleKecamatanChange}>
            <option value="">Pilih Kecamatan</option>
            {kecamatan.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedKecamatan && (
        <div>
          <label>Kecamatan:</label>
          <select value={selectedDesa} onChange={handleDesaChange}>
            <option value="">Pilih Desa</option>
            {desa.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Wilayah;
