import React, {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";

const Permasalahan = () => {

const {id} = useParams();
const nilai = Number(id);

const [pasienIgdTriasePermasalahan, setPasienIgdTriasePermasalahan] = useState([]);
const [formSubmittedPermasalahan, setFormSubmittedPermasalahan] = useState(true);
const [nilaiIdPasienIgd, setNilaiIdPasienIgd] = useState();
const [isPermasalahan, setIsPermasalahan] = useState(true);
const [isTambahDataPermasalahan, setIsTambahDataPermasalahan] = useState(false);
const [isEditPermasalahan, setIsEditPermasalahan] = useState(false);
const [editData, setEditData] = useState({});
const [idPermasalahanValue, setIdPermasalahanValue] = useState([]); 



//fetch data Permasalahan
  function fetchIgdTriasePermasalahan(id) {
      axios
      .get(`http://localhost:5000/igd/pasien/penanganan/triase/permasalahan/${id}`)
       .then(response => {
      const data = response.data; 
      setPasienIgdTriasePermasalahan(data); 
      setNilaiIdPasienIgd(data[0].id_pasien_igd);
     
      })

      .catch((error) => {
        console.error(error);
      });
    }
 
    useEffect(() => {
  if (formSubmittedPermasalahan) {
    fetchIgdTriasePermasalahan(id);
    setFormSubmittedPermasalahan(false);
  }
}, [id, formSubmittedPermasalahan]);


function handlePermasalahan(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries())


  axios.post(`http://localhost:5000/igd/pasien/penanganan/triase/permasalahan`, {
    ...data,
    id_pasien_igd: nilai
  })
  .then(response => {
    const updatedData = response.data;
     setFormSubmittedPermasalahan(true);
     setIsPermasalahan(true);
     setIsTambahDataPermasalahan(false);
  })
  .catch((error) => {
    console.error(error);
    setFormSubmittedPermasalahan(false);
  });
}

// edit data
const handleEdit = (data) => {
    setEditData(data);
    setIsEditPermasalahan(true);
    setIsPermasalahan(false);
    setIsTambahDataPermasalahan(false);
    setFormSubmittedPermasalahan(false);      
    setIdPermasalahanValue(data.id);          
};

function handleTampilanEditPermasalahan (event) {
  setIsPermasalahan(true);
  setIsEditPermasalahan(false);
  setIsTambahDataPermasalahan(false);
  setFormSubmittedPermasalahan(true);
}

function handleTampilanTambahDataPermasalahan (event) {
    setIsPermasalahan(false);
    setIsEditPermasalahan(false);
    setIsTambahDataPermasalahan(true);
    setFormSubmittedPermasalahan(true);
}

function handleEditPermasalahanSubmit (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries())

  axios.patch(`http://localhost:5000/igd/pasien/penanganan/triase/permasalahan/${idPermasalahanValue}`, {
     ...data,
    id_pasien_igd: nilai
  })

    .then(response => {
    setNilaiIdPasienIgd(response.data.id_pasien_igd);
    setIsPermasalahan(true);
    setFormSubmittedPermasalahan(true);
    setIsEditPermasalahan(false);
    
     // memperbarui data pada tampilan 
     axios.get(`http://localhost:5000/igd/pasien/penanganan/triase/permasalahan/${id}`)
      .then(response => {
        setPasienIgdTriasePermasalahan(response.data);
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
   {isPermasalahan && 
    
    
        <div className='Permasalahan'>

           {formSubmittedPermasalahan  || nilai === nilaiIdPasienIgd  ? (
            <div className='container'>
                <div className='flex justify-between mb-2'>
                    <button onClick={handleTampilanTambahDataPermasalahan} className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75 mr-1' type='submit'>ADD NEW</button>
                </div>
            <table class="table-auto ">
            <thead>
                <tr className='bg-emerald text-sm'>
                    <th className='text-white px-4 py-0.5'>#</th>
                    <th className='text-white  py-0.5 '>Permasalahan yang dikonsulkan Pasien</th>
                    <th className='text-white px-4 py-0.5 '></th>
                </tr>
            </thead>
            <tbody className='text-sm'>
                {pasienIgdTriasePermasalahan.map((data, index) => (
                <tr key={index}>
                    <td class="border px-4 py-0.2">{index + 1}</td>
                    <td class="border px-4 py-0.2">{data.permasalahan_yang_dikonsulkan}</td>
                    <td class="border px-4 py-0.2">
                        <button onClick={() => handleEdit(data)} className='py-0.2 px-1 my-0.5  bg-emerald text-white hover:opacity-75 mr-1'>EDIT</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            </div>
            ):(
            <div className='container'>
                <form onSubmit={handlePermasalahan}>
                    <div className='input'>
                        <label>Permasalahan</label>
                          <textarea name='permasalahan_yang_dikonsulkan'  class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea"></textarea>
                    </div>
                    <div className='flex justify-end pb-2'>
                        <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
                    </div>  
                </form>
            </div>
            )}
        </div>
  

    }

    {isEditPermasalahan &&
        <div className='container'>
            <form onSubmit={handleEditPermasalahanSubmit}>
                <div className='input'>
                    <label>Permasalahan yang dikonsulkan</label>
                        <textarea name='permasalahan_yang_dikonsulkan' defaultValue={editData.permasalahan_yang_dikonsulkan}  class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea"></textarea>
                </div>
                <div className='flex justify-end pb-2'>
                    <button onClick={handleTampilanEditPermasalahan} className='py-0.2 px-1 mr-2 mt-2 bg-red-700 text-white hover:opacity-75'>BATAL</button>
                    <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
                </div>  
            </form>
        </div>
    
}


    {isTambahDataPermasalahan &&
    
        <div className='container'>
            <form onSubmit={handlePermasalahan}>
                <div className='input'>
                    <label>Permasalahan yang dikonsulkan</label>
                        <textarea name='permasalahan_yang_dikonsulkan'  class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea"></textarea>
                    </div>
                <div className='flex justify-end pb-2'>
                    <button onClick={handleTampilanEditPermasalahan} className='py-0.2 px-1 mr-2 mt-2 bg-red-700 text-white hover:opacity-75'>BATAL</button>
                    <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
                </div>  
            </form>
        </div>    
    
    
    }
      
    
    
    
    
    </>
  )
}

export default Permasalahan