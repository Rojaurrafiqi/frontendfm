import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import editIcon from '../../../../images/edit2.png';

const Tandavital = (props) => {

  const {id} = useParams();
  const nilai = Number(id);


    // state tanda vital pasien
    const [pasienIgdTriaseTandaVital, setPasienIgdTriaseTandaVital] = useState([]);
    const [formSubmittedTandaVital, setFormSubmittedTandaVital] = useState(true);
    const [nilaiIdPasienIgd, setNilaiIdPasienIgd] = useState();
    const [isTandaVital, setIsTandaVital] = useState(true);
    const [isEditTandaVital, setIsEditTandaVital] = useState(false);
    const [dataTandaVital, setDataTandaVital] = useState(true);
    const [formUpdateTandaVital, setFormUpdateTandaVital] = useState(false);
    const [tandavitalvalue, setTandaVitalValue] = useState('');
    const [idTandaVitalValue, setIdTandaVitalValue] = useState();

    //fetch data tanda vital
    function fetchTriaseTandaVitalIgd(id) {
      axios
      .get(`http://localhost:5000/igd/pasien/penanganan/triase/tandavital/${id}`)
       .then(response => {
      const data = response.data; 
      setPasienIgdTriaseTandaVital(data); 
      setNilaiIdPasienIgd(data[0].id_pasien_igd);
      setIdTandaVitalValue(data[0].id);


      })
      .catch((error) => {
        console.error(error);
      });
    }

    useEffect(() => {
  if (formSubmittedTandaVital) {
    fetchTriaseTandaVitalIgd(id);
    setFormSubmittedTandaVital(false);

  }
}, [id, formSubmittedTandaVital]);


function handleTandaVital(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries())


  axios.post(`http://localhost:5000/igd/pasien/penanganan/triase/tandavital`, {
    ...data,
    id_pasien_igd: nilai
  })
  .then(response => {
    const updatedData = response.data;
     setFormSubmittedTandaVital(true);
  })
  .catch((error) => {
    console.error(error);
    setFormSubmittedTandaVital(false);
  });
}

function handleTampilanTandaVital (event) {
  setIsTandaVital(false);
  setIsEditTandaVital(true);
  setFormSubmittedTandaVital(false);

}

function handleTampilanEditTandaVital (event) {
  setIsTandaVital(true);
  setIsEditTandaVital(false);
  setFormSubmittedTandaVital(true);
}

function handleEditTandaVitalSubmit (event) {
  event.preventDefault();


  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries())

  axios.patch(`http://localhost:5000/igd/pasien/penanganan/triase/tandavital/${idTandaVitalValue}`, {
     ...data,
    id_pasien_igd: nilai


  })
    .then(response => {
    setNilaiIdPasienIgd(response.data.id_pasien_igd);
    setIsTandaVital(true);
    setFormSubmittedTandaVital(true);
    setIsEditTandaVital(false);
    
     // memperbarui data pada tampilan 
     axios.get(`http://localhost:5000/igd/pasien/penanganan/triase/tandavital/${id}`)
      .then(response => {
        setPasienIgdTriaseTandaVital(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  })
    .catch(error => {
      console.log(error);
    });
}


  return (
    <>
      <div className='text-left pl-2 bg-emerald300 font-semibold'>
        Tanda Vital
      </div>
      <div className='border border-state-300  bg-white text-left p-3 mb-5'>
    
    {isTandaVital && 
    
    <div className='tandavital'>
        {formSubmittedTandaVital  || nilai === nilaiIdPasienIgd  ? (
            <div className='tandavital'>
                <div className='relative'>
                     <button onClick={handleTampilanTandaVital}  className='absolute top-0 right-0 hover:opacity-75'><img src={editIcon} width="30px" /></button>
                </div>
                          {Array.isArray(pasienIgdTriaseTandaVital)  && pasienIgdTriaseTandaVital.map((data, index) => (
                            <div key={index}>
                                <tr >
                                    <td>Tekanan Darah</td>
                                    <td className='px-2'>:</td>
                                    <td>{data.tekanan_darah} mmHG</td>
                                </tr>
                                <tr >
                                    <td>Frekuensi Nadi</td>
                                    <td className='px-2'>:</td>
                                    <td>{data.frekuensi_nadi} x/mnt</td>
                                </tr>
                                <tr >
                                    <td>Frekuensi Nafas</td>
                                    <td className='px-2'>:</td>
                                    <td>{data.frekuensi_nafas} x/mnt</td>
                                </tr>
                                <tr >
                                    <td>Suhu</td>
                                    <td className='px-2'>:</td>
                                    <td>{data.suhu} C</td>
                                </tr>
                                <tr >
                                    <td>Saturasi Oksigen</td>
                                    <td className='px-2'>:</td>
                                    <td>{data.sat_o2} %</td>
                                </tr>
                                <tr >
                                    <td>Riwayat Alergi Makanan</td>
                                    <td className='px-2'>:</td>
                                    <td>{data.riwayat_alergi_makanan}</td>
                                </tr>
                                <tr >
                                    <td>Riwayat Alergi Obat</td>
                                    <td className='px-2'>:</td>
                                    <td>{data.riwayat_alergi_obat}</td>
                                </tr>
                                <tr >
                                    <td>Riwayat Alergi Lainya</td>
                                    <td className='px-2'>:</td>
                                    <td>{data.riwayat_alergi_lainya}</td>
                                </tr>
                                <tr >
                                    <td>Berat Badan</td>
                                    <td className='px-2'>:</td>
                                    <td>{data.berat_badan} Kg</td>
                                </tr>
                                <tr >
                                    <td>Tinggi Badan</td>
                                    <td className='px-2'>:</td>
                                    <td>{data.tinggi_badan} cm</td>
                                </tr>

                            </div>
                          ))}    
            </div>

        ) : (

        <div className='form mt-5'>
            <form onSubmit={handleTandaVital}>
                <tr>
                    <td>Tekanan Darah</td>
                    <td className='px-2'>:</td>
                    <td className='pb-1'><input type="text" name="tekanan_darah"  className='border border-black' /></td>
                </tr>             
                <tr >
                    <td>Frekuensi Nadi</td>
                    <td className='px-2'>:</td>
                    <td className='pb-1'><input type="text" name="frekuensi_nadi" className='border border-black' /></td>
                </tr>             
                <tr >
                    <td>Frekuensi Nafas</td>
                    <td className='px-2'>:</td>
                    <td className='pb-1'><input type="text" name="frekuensi_nafas" className='border border-black' /></td>
                </tr>             
                <tr >
                    <td>Tekanan Darah</td>
                    <td className='px-2'>:</td>
                    <td className='pb-1'><input type="text" name="suhu" className='border border-black' /></td>
                </tr>             
                <tr >
                    <td>Suhu</td>
                    <td className='px-2'>:</td>
                    <td className='pb-1'><input type="text" name="suhu" className='border border-black' /></td>
                </tr>             
                <tr >
                    <td>Saturasi Oksigen</td>
                    <td className='px-2'>:</td>
                    <td className='pb-1'><input type="text" name="sat_o2" className='border border-black' /></td>
                </tr>             
                <tr >
                    <td>Riwayat Alergi Makanan</td>
                    <td className='px-2'>:</td>
                    <td className='pb-1'><input type="text" name="riwayat_alergi_makanan" className='border border-black' /></td>
                </tr>             
                <tr >
                    <td>Riwayat Alergi Obat</td>
                    <td className='px-2'>:</td>
                    <td className='pb-1'><input type="text" name="riwayat_alergi_obat" className='border border-black' /></td>
                </tr>             
                <tr >
                    <td>Riwayat Alergi Lainya</td>
                    <td className='px-2'>:</td>
                    <td className='pb-1'><input type="text" name="riwayat_alergi_lainya" className='border border-black' /></td>
                </tr>             
                <tr >
                    <td>Berat Badan</td>
                    <td className='px-2'>:</td>
                    <td className='pb-1'><input type="text" name="berat_badan" className='border border-black' /></td>
                </tr>             
                <tr >
                    <td>Tinggi Badan</td>
                    <td className='px-2'>:</td>
                    <td className='pb-1'><input type="text" name="tinggi_badan" className='border border-black' /></td>
                </tr>             
              <div className='simpan'>
                <button className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
              </div>
            </form>
   
        </div>

        ) }
              


        </div>
    }

    {isEditTandaVital &&

        <div className='form mt-5'>
            <form onSubmit={handleEditTandaVitalSubmit}>
                <tr>
                    <td className='pr-4'>Tekanan Darah</td>
                    <td className='pb-1'><input type="text" name="tekanan_darah" defaultValue={pasienIgdTriaseTandaVital[0].tekanan_darah}  className='border border-black w-full pr-40 px-1' /></td>
                </tr>             
                <tr >
                    <td>Frekuensi Nadi</td>
                    <td className='pb-1'><input type="text" name="frekuensi_nadi" defaultValue={pasienIgdTriaseTandaVital[0].frekuensi_nadi}  className='border border-black w-full pr-40 px-1' /></td>
                </tr>             
                <tr >
                    <td>Frekuensi Nafas</td>
                    <td className='pb-1'><input type="text" name="frekuensi_nafas" defaultValue={pasienIgdTriaseTandaVital[0].frekuensi_nafas}  className='border border-black w-full pr-40 px-1' /></td>
                </tr>                       
                <tr >
                    <td>Suhu</td>
                    <td className='pb-1'><input type="text" name="suhu" defaultValue={pasienIgdTriaseTandaVital[0].suhu}  className='border border-black w-full pr-40 px-1' /></td>
                </tr>             
                <tr >
                    <td>Saturasi Oksigen</td>
                    <td className='pb-1'><input type="text" name="sat_o2" defaultValue={pasienIgdTriaseTandaVital[0].sat_o2} className='border border-black w-full pr-40 px-1' /></td>
                </tr>             
                <tr >
                    <td>Riwayat Alergi Makanan</td>
                    <td className='pb-1'><input type="text" name="riwayat_alergi_makanan" defaultValue={pasienIgdTriaseTandaVital[0].riwayat_alergi_makanan}  className='border border-black w-full pr-40 px-1' /></td>
                </tr>             
                <tr >
                    <td>Riwayat Alergi Obat</td>
                    <td className='pb-1'><input type="text" name="riwayat_alergi_obat" defaultValue={pasienIgdTriaseTandaVital[0].riwayat_alergi_obat}  className='border border-black w-full pr-40 px-1' /></td>
                </tr>             
                <tr >
                    <td>Riwayat Alergi Lainya</td>
                    <td className='pb-1'><input type="text" name="riwayat_alergi_lainya" defaultValue={pasienIgdTriaseTandaVital[0].riwayat_alergi_lainya}  className='border border-black w-full pr-40 px-1' /></td>
                </tr>             
                <tr >
                    <td>Berat Badan</td>
                    <td className='pb-1'><input type="text" name="berat_badan" defaultValue={pasienIgdTriaseTandaVital[0].berat_badan}  className='border border-black w-full pr-40 px-1' /></td>
                </tr>             
                <tr >
                    <td>Tinggi Badan</td>
                    <td className='pb-1'><input type="text" name="tinggi_badan" defaultValue={pasienIgdTriaseTandaVital[0].tinggi_badan}  className='border border-black w-full pr-40 px-1' /></td>
                </tr>             
              <div className='simpan text-right mt-2'>
                <button onClick={handleTampilanEditTandaVital}  className='ml-1 py-0.2 px-1 mr-1 bg-red-700 text-white hover:opacity-75' type='submit'>BATAL</button>
                <button className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75'  type='submit'>SIMPAN</button>
              </div>
            </form>
   
        </div>    

    
    }
    </div>

    
    </>
  )
}

export default Tandavital