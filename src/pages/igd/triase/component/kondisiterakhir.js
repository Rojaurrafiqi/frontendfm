import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import editIcon from '../../../../images/edit2.png';

const Kondisiterakhir = () => {

  const {id} = useParams();
  const nilai = Number(id);

  const [pasienIgdTriaseKondisiTerakhir, setPasienIgdTriaseKondisiTerakhir] = useState([]);
  const [formSubmittedKondisiTerakhir, setFormSubmittedKondisiTerakhir] = useState(true);
  const [nilaiIdPasienIgd, setNilaiIdPasienIgd] = useState();
  const [isKondisiTerakhir, setIsKondisiTerakhir] = useState(true);
  const [isEditKondisiTerakhir, setIsEditKondisiTerakhir] = useState(false);
  const [idKondisiTerakhirValue, setIdKondisiTerakhirValue] = useState();  

 function fetchIgdTriaseKondisiTerakhir(id) {
      axios
      .get(`http://localhost:5000/igd/pasien/penanganan/triase/kondisiterakhir/${id}`)
       .then(response => {
      const data = response.data; 
      setPasienIgdTriaseKondisiTerakhir(data); 
      setNilaiIdPasienIgd(data[0].id_pasien_igd);
      setIdKondisiTerakhirValue(data[0].id);

      })
      .catch((error) => {
        console.error(error);
      });
    }

    useEffect(() => {
  if (formSubmittedKondisiTerakhir) {
    fetchIgdTriaseKondisiTerakhir(id);
    setFormSubmittedKondisiTerakhir(false);

  }
}, [id, formSubmittedKondisiTerakhir]);

function handleKondisiTerakhir(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries())


  axios.post(`http://localhost:5000/igd/pasien/penanganan/triase/kondisiterakhir`, {
    ...data,
    id_pasien_igd: nilai
  })
  .then(response => {
    const updatedData = response.data;
     setFormSubmittedKondisiTerakhir(true);
  })
  .catch((error) => {
    console.error(error);
    setFormSubmittedKondisiTerakhir(false);
  });
}

function handleTampilanKondisiTerakhir (event) {
  setIsKondisiTerakhir(false);
  setIsEditKondisiTerakhir(true);
  setFormSubmittedKondisiTerakhir(false);

}

function handleTampilanEditKondisiTerakhir (event) {
  setIsKondisiTerakhir(true);
  setIsEditKondisiTerakhir(false);
  setFormSubmittedKondisiTerakhir(true);
}

function handleEditKondisiTerakhirSubmit (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries())

  axios.patch(`http://localhost:5000/igd/pasien/penanganan/triase/kondisiterakhir/${idKondisiTerakhirValue}`, {
     ...data,
    id_pasien_igd: nilai


  })
    .then(response => {
    setNilaiIdPasienIgd(response.data.id_pasien_igd);
    setIsKondisiTerakhir(true);
    setFormSubmittedKondisiTerakhir(true);
    setIsEditKondisiTerakhir(false);
    
     // memperbarui data pada tampilan 
     axios.get(`http://localhost:5000/igd/pasien/penanganan/triase/kondisiterakhir/${id}`)
      .then(response => {
        setPasienIgdTriaseKondisiTerakhir(response.data);
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
        Kondisi Terakhir Pasien IGD
    </div>
    <div className='border border-state-300  bg-white text-left p-3 mb-5'>
        {isKondisiTerakhir &&
        
        <div className='container'>      
      
        {formSubmittedKondisiTerakhir  || nilai === nilaiIdPasienIgd  ? (
            <div className='kondisiterkahir'>
                <div className='relative'>
                     <button onClick={handleTampilanKondisiTerakhir}  className='absolute top-0 right-0 hover:opacity-75'><img src={editIcon} width="30px" /></button>
                </div>
                          {Array.isArray(pasienIgdTriaseKondisiTerakhir)  && pasienIgdTriaseKondisiTerakhir.map((data, index) => (
                            <div key={index}>
                                <tr>
                                    <td>Keadaan Umum</td>
                                    <td className='px-2'>:</td>
                                    <td  className='pr-7'>{data.keadaan_umum}</td>
                                </tr>
                                <tr >
                                    <td>Kesadaran</td>
                                    <td className='px-2'>:</td>
                                    <td className='pr-7'>{data.kesadaran} </td>
                                </tr>
                                <tr >
                                    <td>Tekanan Darah</td>
                                    <td className='px-2'>:</td>
                                    <td className='pr-7'>{data.tekanan_darah} </td>
                                </tr>
                                <tr >
                                    <td>Frekuensi Nadi</td>
                                    <td className='px-2'>:</td>
                                    <td className='pr-7'>{data.frekuensi_nadi}</td>
                                </tr>
                                <tr >
                                    <td>Frekuensi Nafas</td>
                                    <td className='px-2'>:</td>
                                    <td className='pr-7'>{data.frekuensi_nafas}</td>
                                </tr>
                                <tr >
                                    <td>Temperature</td>
                                    <td className='px-2'>:</td>
                                    <td className='pr-7'>{data.temperature}</td>
                                </tr>
                               

                            </div>
                          ))}    
            </div>

        ) : (

        <div className='form mt-1 text-sm'>
            <form onSubmit={handleKondisiTerakhir}>
                <tr >
                    <td>Keadaan Umum</td>
                    <td className='pb-1  '>
                     <input type="text" name="keadaan_umum"  className='border border-black w-full ml-1 px-1 mr-40' />
                    </td>               
                </tr>             
                <tr >
                    <td>Kesadaran</td>
                    <td className='pb-1'>
                        <input type="text" name="kesadaran"  className='border border-black ml-1 w-full px-1 mr-40' />
                    </td>
                
                </tr>             
                <tr >
                    <td>Tekanan Darah</td>
                    <td className='pb-1'>
                     <input type="text" name="tekanan_darah"  className='border border-black ml-1 w-full px-1 mr-40' />
                    </td>                    
               
                </tr>             
                <tr >
                    <td>Frekuensi Nadi</td>
                    <td className='pb-1'>
                     <input type="text" name="frekuensi_nadi"  className='border border-black ml-1 w-full px-1 mr-40' />
                    </td>                    
               
                </tr>             
                <tr >
                    <td>Frekuensi Nafas</td>
                    <td className='pb-1'>
                     <input type="text" name="frekuensi_nafas"  className='border border-black ml-1 w-full px-1 mr-40' />
                    </td>                 
                </tr>             
                <tr >
                    <td>Temperature</td>
                    <td className='pb-1'>
                     <input type="text" name="temperature"  className='border border-black ml-1 w-full px-1 mr-40' />
                    </td>                 
                </tr>             
                            
              <div className='flex justify-end'>
                <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
              </div>
            </form>
   
        </div>

        ) }

    </div>
    }

    {isEditKondisiTerakhir &&
    
    <div className='form mt-1 text-sm'>
            <form onSubmit={handleEditKondisiTerakhirSubmit}>
                <tr >
                    <td>Keadaan Umum</td>
                    <td className='pb-1  '>
                     <input type="text" name="keadaan_umum" defaultValue={pasienIgdTriaseKondisiTerakhir[0].keadaan_umum}  className='border border-black w-full ml-1 px-1 mr-40' />
                    </td>               
                </tr>             
                <tr >
                    <td>Kesadaran</td>
                    <td className='pb-1'>
                        <input type="text" name="kesadaran" defaultValue={pasienIgdTriaseKondisiTerakhir[0].kesadaran}  className='border border-black ml-1 w-full px-1 mr-40' />
                    </td>
                
                </tr>             
                <tr >
                    <td>Tekanan Darah</td>
                    <td className='pb-1'>
                     <input type="text" name="tekanan_darah" defaultValue={pasienIgdTriaseKondisiTerakhir[0].tekanan_darah}  className='border border-black ml-1 w-full px-1 mr-40' />
                    </td>                    
               
                </tr>             
                <tr >
                    <td>Frekuensi Nadi</td>
                    <td className='pb-1'>
                     <input type="text" name="frekuensi_nadi" defaultValue={pasienIgdTriaseKondisiTerakhir[0].frekuensi_nadi}  className='border border-black ml-1 w-full px-1 mr-40' />
                    </td>                    
               
                </tr>             
                <tr >
                    <td>Frekuensi Nafas</td>
                    <td className='pb-1'>
                     <input type="text" name="frekuensi_nafas" defaultValue={pasienIgdTriaseKondisiTerakhir[0].frekuensi_nafas}  className='border border-black ml-1 w-full px-1 mr-40' />
                    </td>                 
                </tr>             
                <tr >
                    <td>Temperature</td>
                    <td className='pb-1'>
                     <input type="text" name="temperature" defaultValue={pasienIgdTriaseKondisiTerakhir[0].temperature}  className='border border-black ml-1 w-full px-1 mr-40' />
                    </td>                 
                </tr>             
                            
              <div className='flex justify-end'>
                 <button onClick={handleTampilanEditKondisiTerakhir} className='py-0.2 px-1 mt-2 mr-1  bg-red-700 text-white hover:opacity-75'>BATAL</button>
                <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
              </div>
            </form>
   
        </div>
    
    }


    </div>
    
    
    
    
    </>
  )
}

export default Kondisiterakhir