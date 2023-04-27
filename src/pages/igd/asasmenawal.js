import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import editIcon from "../../images/edit2.png";
import Checkbox from "../../component/checkbox/Checkbox";

const Asasmenawal = () => {
  const { id } = useParams();
  const nilai = Number(id);

  const [kegawatanPernafasanSelected, setKegawatanPernafasanSelected] =
    useState([]);
  // const [jalanNafasEditSelected, setJalanNafasEditSelected] = useState([]);
  const jalanNafasString = kegawatanPernafasanSelected.join(", ");
  // const jalanNafasEditString = jalanNafasEditSelected.join(', ');

  const [kehilanganTonusOtotSelected, setKehilanganTonusOtotSelected] =
    useState([]);
  // const [jalanNafasEditSelected, setJalanNafasEditSelected] = useState([]);
  const kehilanganTonusOtotString = kehilanganTonusOtotSelected.join(", ");
  // const jalanNafasEditString = jalanNafasEditSelected.join(', ');

  const [perlambatanSirkulasiSelected, setPerlambatanSirkulasiSelected] =
    useState([]);
  // const [jalanNafasEditSelected, setJalanNafasEditSelected] = useState([]);
  const perlambatanSirkulasiString = perlambatanSirkulasiSelected.join(", ");
  // const jalanNafasEditString = jalanNafasEditSelected.join(', ');

  const [pembangkitGejalaFisikSelected, setPembangkitGejalaFisikSelected] =
    useState([]);
  // const [jalanNafasEditSelected, setJalanNafasEditSelected] = useState([]);
  const pembangkitGejalaFisikString = pembangkitGejalaFisikSelected.join(", ");
  // const jalanNafasEditString = jalanNafasEditSelected.join(', ');

  const [
    masalahKeperawatanResponPasienTerhadapGejalakSelected,
    setMasalahKeperawatanResponPasienTerhadapGejalakSelected,
  ] = useState([]);
  // const [jalanNafasEditSelected, setJalanNafasEditSelected] = useState([]);
  const masalahKeperawatanResponPasienTerhadapGejalakString =
    masalahKeperawatanResponPasienTerhadapGejalakSelected.join(", ");
  // const jalanNafasEditString = jalanNafasEditSelected.join(', ');

  const handleCheckboxKegawatanPernafasanChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setKegawatanPernafasanSelected([...kegawatanPernafasanSelected, value]);
    } else {
      setKegawatanPernafasanSelected(
        kegawatanPernafasanSelected.filter((item) => item !== value)
      );
    }
  };

  const handleCheckboxKehilanganTonusOtotSelectedChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setKehilanganTonusOtotSelected([...kehilanganTonusOtotSelected, value]);
    } else {
      setKehilanganTonusOtotSelected(
        kehilanganTonusOtotSelected.filter((item) => item !== value)
      );
    }
  };

  const handleCheckboxPerlambatanSirkulasiSelectedChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setPerlambatanSirkulasiSelected([...perlambatanSirkulasiSelected, value]);
    } else {
      setPerlambatanSirkulasiSelected(
        perlambatanSirkulasiSelected.filter((item) => item !== value)
      );
    }
  };

  const handleCheckboxPembangkitGejalaFisikSelectedChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setPembangkitGejalaFisikSelected([
        ...pembangkitGejalaFisikSelected,
        value,
      ]);
    } else {
      setPembangkitGejalaFisikSelected(
        pembangkitGejalaFisikSelected.filter((item) => item !== value)
      );
    }
  };

  const handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange =
    (event) => {
      const value = event.target.value;
      if (event.target.checked) {
        setMasalahKeperawatanResponPasienTerhadapGejalakSelected([
          ...masalahKeperawatanResponPasienTerhadapGejalakSelected,
          value,
        ]);
      } else {
        setMasalahKeperawatanResponPasienTerhadapGejalakSelected(
          masalahKeperawatanResponPasienTerhadapGejalakSelected.filter(
            (item) => item !== value
          )
        );
      }
    };

  return (
    <>
      <div className="text-left px-1 bg-emerald300 font-semibold">
        Asesmen Awal Pasien IGD
      </div>
      <div className="container border border-state-300  bg-white p-5 text-left">
        <form>
          <div className="container">
            <p className="font-semibold">
              1. Gejala seperti mau muntah dan kesulitan bernafas
            </p>
            <label className="font-semibold ml-2">
              a. Kegawatan Pernafasan
            </label>
            <div className="flex ml-4">
              <div className="checkbox mr-2">
                <Checkbox
                  checked={kegawatanPernafasanSelected.includes("Dyspnoe")}
                  onChange={handleCheckboxKegawatanPernafasanChange}
                  name="kegawatan_pernafasan"
                  label="Dyspnoe"
                  value="Dyspnoe"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={kegawatanPernafasanSelected.includes(
                    "Nafas Tak Teratur"
                  )}
                  onChange={handleCheckboxKegawatanPernafasanChange}
                  name="kegawatan_pernafasan"
                  label="Nafas Tak Teratur"
                  value="Nafas Tak Teratur"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={kegawatanPernafasanSelected.includes("Ada Sekret")}
                  onChange={handleCheckboxKegawatanPernafasanChange}
                  name="kegawatan_pernafasan"
                  label="Ada Sekret"
                  value="Ada Sekret"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
              <div className="checkbox mr-2">
                <Checkbox
                  checked={kegawatanPernafasanSelected.includes(
                    "Nafas Cepat dan Dangkal"
                  )}
                  onChange={handleCheckboxKegawatanPernafasanChange}
                  name="kegawatan_pernafasan"
                  label="Nafas Cepat dan Dangkal"
                  value="Nafas Cepat dan Dangkal"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={kegawatanPernafasanSelected.includes(
                    "Nafas Melalui Mulut"
                  )}
                  onChange={handleCheckboxKegawatanPernafasanChange}
                  name="kegawatan_pernafasan"
                  label="Nafas Melalui Mulut"
                  value="Nafas Melalui Mulut"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={kegawatanPernafasanSelected.includes(
                    "SpO2 < Normal"
                  )}
                  onChange={handleCheckboxKegawatanPernafasanChange}
                  name="kegawatan_pernafasan"
                  label="SpO2 < Normal"
                  value="SpO2 < Normal"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
              <div className="checkbox mr-2">
                <Checkbox
                  checked={kegawatanPernafasanSelected.includes("Nafas Lambat")}
                  onChange={handleCheckboxKegawatanPernafasanChange}
                  name="kegawatan_pernafasan"
                  label="Nafas Lambat"
                  value="Nafas Lambat"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={kegawatanPernafasanSelected.includes(
                    "Mukosa Oral Kering"
                  )}
                  onChange={handleCheckboxKegawatanPernafasanChange}
                  name="kegawatan_pernafasan"
                  label="Mukosa Oral Kering"
                  value="Mukosa Oral Kering"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={kegawatanPernafasanSelected.includes("T.A.K")}
                  onChange={handleCheckboxKegawatanPernafasanChange}
                  name="kegawatan_pernafasan"
                  label="T.A.K"
                  value="T.A.K"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
            </div>

            <label className="font-semibold ml-2">
              b. Kehilangan Tonus Otot
            </label>
            <div className="flex ml-4">
              <div className="checkbox mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes("Mual")}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Mual"
                  value="Mual"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Sulit Menelan"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Sulit Menelan"
                  value="Sulit Menelan"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Inkontinensia Alvi"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Inkontinensia Alvi"
                  value="Inkontinensia Alvi"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
              <div className="checkbox mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Penurunan Pergerakan Tubuh"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Penurunan Pergerakan Tubuh"
                  value="Penurunan Pergerakan Tubuh"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Distensi Abdomen"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Distensi Abdomen"
                  value="Distensi Abdomen"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes("T.A.K")}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="T.A.K"
                  value="T.A.K"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
              <div className="checkbox mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Sulit Berbicara"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Sulit Berbicara"
                  value="Sulit Berbicara"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Inkomtimensia Urine"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Inkomtimensia Urine"
                  value="Inkomtimensia Urine"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
            </div>

            {/* pakai radio botton */}
            <label className="font-semibold ml-2">c. Nyeri</label>
            <div className="flex ml-4">
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes("Tidak")}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="nyeri"
                  label="Tidak"
                  value="Tidak"
                  class="form-checkbox h-3 w-3  text-emerald"
                />
              </span>
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Sulit Menelan"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Iya"
                  value="Sulit Menelan"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </span>
            </div>

            <label className="font-semibold ml-2">
              d. Perlambatan Sirkulasi
            </label>
            <div className="flex ml-4">
              <div className="checkbox mr-2">
                <Checkbox
                  checked={perlambatanSirkulasiSelected.includes(
                    "Bercak Dan Sianosis Pada Ekstremitas"
                  )}
                  onChange={handleCheckboxPerlambatanSirkulasiSelectedChange}
                  name="perlambatan_sirkulasi"
                  label="Bercak Dan Sianosis Pada Ekstremitas"
                  value="Bercak Dan Sianosis Pada Ekstremitas"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={perlambatanSirkulasiSelected.includes(
                    "Kulit Dingin dan Berkeringat"
                  )}
                  onChange={handleCheckboxPerlambatanSirkulasiSelectedChange}
                  name="perlambatan_sirkulasi"
                  label="Kulit Dingin dan Berkeringat"
                  value="Kulit Dingin dan Berkeringat"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
              <div className="checkbox mr-2">
                <Checkbox
                  checked={perlambatanSirkulasiSelected.includes("T.A.K")}
                  onChange={handleCheckboxPerlambatanSirkulasiSelectedChange}
                  name="perlambatan_sirkulasi"
                  label="T.A.K"
                  value="T.A.K"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={perlambatanSirkulasiSelected.includes("Gelisah")}
                  onChange={handleCheckboxPerlambatanSirkulasiSelectedChange}
                  name="perlambatan_sirkulasi"
                  label="Gelisah"
                  value="Gelisah"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
              <div className="checkbox mr-2">
                <Checkbox
                  checked={perlambatanSirkulasiSelected.includes(
                    "Nadi Lambat dan Lemah"
                  )}
                  onChange={handleCheckboxPerlambatanSirkulasiSelectedChange}
                  name="perlambatan_sirkulasi"
                  label="Nadi Lambat dan Lemah"
                  value="Nadi Lambat dan Lemah"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={perlambatanSirkulasiSelected.includes(
                    "Tekanan Darah Menurun"
                  )}
                  onChange={handleCheckboxPerlambatanSirkulasiSelectedChange}
                  name="perlambatan_sirkulasi"
                  label="Tekanan Darah Menurun"
                  value="Tekanan Darah Menurun"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
              <div className="checkbox mr-2">
                <Checkbox
                  checked={perlambatanSirkulasiSelected.includes("Lemas")}
                  onChange={handleCheckboxPerlambatanSirkulasiSelectedChange}
                  name="perlambatan_sirkulasi"
                  label="Lemas"
                  value="Lemas"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
            </div>
            <p className="font-semibold">
              2. Factor-faktor yang meningkatkan dan membangkitkan gejala fisik
              :
            </p>
            <div className="flex ml-4">
              <div className="checkbox mr-2">
                <Checkbox
                  checked={pembangkitGejalaFisikSelected.includes(
                    "Melakukan Aktivitas Fisik"
                  )}
                  onChange={handleCheckboxPembangkitGejalaFisikSelectedChange}
                  name="faktor_pembangkit_gejala_fisik"
                  label="Melakukan Aktivitas Fisik"
                  value="Melakukan Aktivitas Fisik"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={pembangkitGejalaFisikSelected.includes(
                    "Pindah Posisi"
                  )}
                  onChange={handleCheckboxPembangkitGejalaFisikSelectedChange}
                  name="faktor_pembangkit_gejala_fisik"
                  label="Pindah Posisi"
                  value="Pindah Posisi"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
            </div>

            <p className="font-semibold">
              3. Manajemen gejala saat ini pada respon pasien
            </p>
            <label className="font-semibold ml-2">a. Masalah Keperawatan</label>
            <div className="flex ml-4">
              <div className="checkbox mr-2">
                <Checkbox
                  checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                    "Mual"
                  )}
                  onChange={
                    handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                  }
                  name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                  label="Mual"
                  value="Mual"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                    "Perubahan Persepsi Sensori"
                  )}
                  onChange={
                    handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                  }
                  name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                  label="Perubahan Persepsi Sensori"
                  value="Perubahan Persepsi Sensori"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                    "Nyeri Akut"
                  )}
                  onChange={
                    handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                  }
                  name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                  label="Nyeri Akut"
                  value="Nyeri Akut"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
              <div className="checkbox mr-2">
                <Checkbox
                  checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                    "Pola Nafas Tidak Efektif"
                  )}
                  onChange={
                    handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                  }
                  name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                  label="Pola Nafas Tidak Efektif"
                  value="Pola Nafas Tidak Efektif"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                    "Konstipasi"
                  )}
                  onChange={
                    handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                  }
                  name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                  label="Konstipasi"
                  value="Konstipasi"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                    "Nyeri Kronis"
                  )}
                  onChange={
                    handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                  }
                  name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                  label="Nyeri Kronis"
                  value="Nyeri Kronis"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
              <div className="checkbox mr-2">
                <Checkbox
                  checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                    "Bersihan Jalan Nafas Tidak Efektif"
                  )}
                  onChange={
                    handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                  }
                  name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                  label="Bersihan Jalan Nafas Tidak Efektif"
                  value="Bersihan Jalan Nafas Tidak Efektif"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
                <Checkbox
                  checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                    "Defisit Perawatan Diri"
                  )}
                  onChange={
                    handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                  }
                  name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                  label="Defisit Perawatan Diri"
                  value="Defisit Perawatan Diri"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </div>
            </div>

            {/* pakai radio botton */}
            <p className="font-semibold">
              4. Orientasi spiritual pada pasien dan keluarga
            </p>
            <div className="flex ml-4">
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes("Tidak")}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="nyeri"
                  label="Tidak"
                  value="Tidak"
                  class="form-checkbox h-3 w-3  text-emerald"
                />
              </span>
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Sulit Menelan"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Iya"
                  value="Sulit Menelan"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </span>
            </div>

            <p className="font-semibold">
              5. Urusan dan kebutuhan spiritual pasien dan keluarga seperti
              putus asa, penderitan, rasa bersalah atau pengampunan
            </p>
            <label className="font-semibold ml-2">a. Perlu didoakan</label>
            <div className="flex ml-4">
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes("Tidak")}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="nyeri"
                  label="Tidak"
                  value="Tidak"
                  class="form-checkbox h-3 w-3  text-emerald"
                />
              </span>
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Sulit Menelan"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Iya"
                  value="Sulit Menelan"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </span>
            </div>
            <label className="font-semibold ml-2">
              b. Perlu bimbingan rohani
            </label>
            <div className="flex ml-4">
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes("Tidak")}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="nyeri"
                  label="Tidak"
                  value="Tidak"
                  class="form-checkbox h-3 w-3  text-emerald"
                />
              </span>
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Sulit Menelan"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Iya"
                  value="Sulit Menelan"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </span>
            </div>
            <label className="font-semibold ml-2">
              a. Perlu dampingan rohani
            </label>
            <div className="flex ml-4">
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes("Tidak")}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="nyeri"
                  label="Tidak"
                  value="Tidak"
                  class="form-checkbox h-3 w-3  text-emerald"
                />
              </span>
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Sulit Menelan"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Iya"
                  value="Sulit Menelan"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </span>
            </div>

            <p className="font-semibold">
              6. Status psikososial pasien dan keluarga{" "}
            </p>
            <label className="font-semibold ml-2">
              a. Apakah ada orang yang ingin dihubungi saat ini ?{" "}
            </label>
            <div className="flex ml-4">
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes("Tidak")}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="nyeri"
                  label="Tidak"
                  value="Tidak"
                  class="form-checkbox h-3 w-3  text-emerald"
                />
              </span>
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Sulit Menelan"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Iya"
                  value="Sulit Menelan"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </span>
            </div>

            <div className="container hidden">
              <div className="flex flex-col child-question ml-4">
                <div className="question">
                  <label>Siapa:</label>
                  <input />
                </div>
                <div className="question">
                  <label>Dimana:</label>
                  <input />
                </div>
                <div className="question">
                  <label>Status Hubungan Dengan Pasien:</label>
                  <input />
                </div>
                <div className="question">
                  <label>No HP Orang Yang Ingin Dihubungi Pasaien:</label>
                  <input />
                </div>
              </div>
            </div>

            {/* pada kolom dibawah ini masih ada pertanyaan bercabang, cek lagi file asesmen awal */}
            <label className="font-semibold ml-2">
              b. Bagaimana rencana perawatan selanjutnya ?{" "}
            </label>
            <div className="flex ml-4">
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes("Tidak")}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="nyeri"
                  label="Tetap dirawat di RS"
                  value="Tidak"
                  class="form-checkbox h-3 w-3  text-emerald"
                />
              </span>
              <span className="mr-2">
                <Checkbox
                  checked={kehilanganTonusOtotSelected.includes(
                    "Sulit Menelan"
                  )}
                  onChange={handleCheckboxKehilanganTonusOtotSelectedChange}
                  name="kehilangan_tonus_otot"
                  label="Dirawat dirumah"
                  value="Sulit Menelan"
                  class="form-checkbox h-3 w-3 mr-1 text-emerald"
                />
              </span>
            </div>

            <label className="font-semibold ml-2">
              c. Reaksi pasien atas penyakitnya
            </label>
            <div className="container">
              <label className="font-semibold ml-4">- Asesmen Informasi</label>
              <div className="flex ml-6">
                <div className="checkbox mr-2">
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Mual"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Menyangkal"
                    value="Mual"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Perubahan Persepsi Sensori"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Marah"
                    value="Perubahan Persepsi Sensori"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                </div>
                <div className="checkbox mr-2">
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Pola Nafas Tidak Efektif"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Takut"
                    value="Pola Nafas Tidak Efektif"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Konstipasi"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Sedih/Menangis"
                    value="Konstipasi"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                </div>
                <div className="checkbox mr-2">
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Bersihan Jalan Nafas Tidak Efektif"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Rasa Bersalah"
                    value="Bersihan Jalan Nafas Tidak Efektif"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Defisit Perawatan Diri"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Ketidakberdayaan"
                    value="Defisit Perawatan Diri"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <label className="font-semibold ml-4">
                - Masalah Keperawatan
              </label>
              <div className="flex ml-6">
                <span className="mr-2">
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Mual"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Ansietas"
                    value="Mual"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                </span>
                <span className="mr-2">
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Mual"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Distress Spiritual"
                    value="Mual"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                </span>
              </div>
            </div>

            <label className="font-semibold ml-2">
              d. Reaksi keluarga atas penyakit pasien{" "}
            </label>
            <div className="container">
              <label className="font-semibold ml-4">- Asesmen Informasi</label>
              <div className="flex ml-6">
                <div className="checkbox mr-2">
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Pola Nafas Tidak Efektif"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Marah"
                    value="Pola Nafas Tidak Efektif"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Konstipasi"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Gangguan tidur"
                    value="Konstipasi"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Konstipasi"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Penurunan konsentrasi"
                    value="Konstipasi"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Konstipasi"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Letih/Lelah"
                    value="Konstipasi"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Konstipasi"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Rasa bersalah"
                    value="Konstipasi"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                </div>
                <div className="checkbox mr-2">
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Mual"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Ketidakmampuan memenuhi peran yang diharapkan"
                    value="Mual"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Perubahan Persepsi Sensori"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Keluarga kurang berkomunikasi dengan pasien"
                    value="Perubahan Persepsi Sensori"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Perubahan Persepsi Sensori"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Perubahan kebiasaan pola komunikasi"
                    value="Perubahan Persepsi Sensori"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Perubahan Persepsi Sensori"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Keluarga kurang berpatisipasi membuat keputusan dalam perawatan pasien"
                    value="Perubahan Persepsi Sensori"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <label className="font-semibold ml-4">
                - Masalah Keperawatan
              </label>
              <div className="flex ml-6">
                <span className="mr-2">
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Mual"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Koping individu tidak efektif"
                    value="Mual"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                </span>
                <span className="mr-2">
                  <Checkbox
                    checked={masalahKeperawatanResponPasienTerhadapGejalakSelected.includes(
                      "Mual"
                    )}
                    onChange={
                      handleCheckboxMasalahKeperawatanResponPasienTerhadapGejalaSelectedChange
                    }
                    name="masalah_keperawatan_respon_pasien_terhadap_gejala"
                    label="Distress spiritual"
                    value="Mual"
                    class="form-checkbox h-3 w-3 mr-1 text-emerald"
                  />
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Asasmenawal;
