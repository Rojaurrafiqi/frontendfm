import React, {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";


const Planning = () => {

const {id} = useParams();
const nilai = Number(id);

const [pasienIgdTriasePlanning, setPasienIgdTriasePlanning] = useState([]);
const [formSubmittedPlanning, setFormSubmittedPlanning] = useState(true);
const [nilaiIdPasienIgd, setNilaiIdPasienIgd] = useState();
const [isPlanning, setIsPlanning] = useState(true);
const [isTambahDataPlanning, setIsTambahDataPlanning] = useState(false);
const [isEditPlanning, setIsEditPlanning] = useState(false);
const [editData, setEditData] = useState({});
const [idPlanningValue, setIdPlanningValue] = useState([]); 






//fetch data planning
  function fetchIgdTriasePlanning(id) {
      axios
      .get(`http://localhost:5000/igd/pasien/penanganan/triase/planning/${id}`)
       .then(response => {
      const data = response.data; 
      setPasienIgdTriasePlanning(data); 
      setNilaiIdPasienIgd(data[0].id_pasien_igd);
     
      })

      .catch((error) => {
        console.error(error);
      });
    }
 
    useEffect(() => {
  if (formSubmittedPlanning) {
    fetchIgdTriasePlanning(id);
    setFormSubmittedPlanning(false);
  }
}, [id, formSubmittedPlanning]);


function handlePlanning(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries())


  axios.post(`http://localhost:5000/igd/pasien/penanganan/triase/planning`, {
    ...data,
    id_pasien_igd: nilai
  })
  .then(response => {
    const updatedData = response.data;
     setFormSubmittedPlanning(true);
     setIsPlanning(true);
     setIsTambahDataPlanning(false);
  })
  .catch((error) => {
    console.error(error);
    setFormSubmittedPlanning(false);
  });
}

// edit data
const handleEdit = (data) => {
    setEditData(data);
    setIsEditPlanning(true);
    setIsPlanning(false);
    setIsTambahDataPlanning(false);
    setFormSubmittedPlanning(false);      
    setIdPlanningValue(data.id);          
};

function handleTampilanEditPlanning (event) {
  setIsPlanning(true);
  setIsEditPlanning(false);
  setIsTambahDataPlanning(false);
  setFormSubmittedPlanning(true);
}

function handleTampilanTambahDataPlanning (event) {
    setIsPlanning(false);
    setIsEditPlanning(false);
    setIsTambahDataPlanning(true);
    setFormSubmittedPlanning(true);
}

function handleEditPlanningSubmit (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries())

  axios.patch(`http://localhost:5000/igd/pasien/penanganan/triase/planning/${idPlanningValue}`, {
     ...data,
    id_pasien_igd: nilai
  })

    .then(response => {
    setNilaiIdPasienIgd(response.data.id_pasien_igd);
    setIsPlanning(true);
    setFormSubmittedPlanning(true);
    setIsEditPlanning(false);
    
     // memperbarui data pada tampilan 
     axios.get(`http://localhost:5000/igd/pasien/penanganan/triase/planning/${id}`)
      .then(response => {
        setPasienIgdTriasePlanning(response.data);
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
    {isPlanning && 
    
    
        <div className='container'>

           {formSubmittedPlanning  || nilai === nilaiIdPasienIgd  ? (
            <div className='container'>
                <div className='flex justify-between mb-2'>
                    <button onClick={handleTampilanTambahDataPlanning} className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75 mr-1' type='submit'>ADD NEW</button>
                </div>
            <div className='container'>
            <table class="table-fixed ">
            <thead>
                <tr className='bg-emerald  text-sm'>
                    <th className='text-white px-4 py-0.5'>#</th>
                    <th className='text-white w-1/2 px-4 py-0.5 '>Planning</th>
                    <th className='text-white px-4 py-0.5 '></th>
                </tr>
            </thead>
            <tbody className='text-sm'>
                {pasienIgdTriasePlanning.map((data, index) => (
                <tr key={index}>
                    <td class="border px-4 py-0.2">{index + 1}</td>
                    <td class="border px-4 w-1/2 py-0.2">{data.planning}</td>
                    <td class="border px-4 py-0.2">
                        <button onClick={() => handleEdit(data)} className='py-0.2 px-1 my-0.5  bg-emerald text-white hover:opacity-75 mr-1'>EDIT</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            </div>
            </div>
            ):(
            <div className='container'>
                <form onSubmit={handlePlanning}>
                    <div className='input'>
                        <label>Planning</label>
                          <textarea name='planning'  class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea"></textarea>
                    </div>
                    <div className='flex justify-end pb-2'>
                        <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
                    </div>  
                </form>
            </div>
            )}
        </div>
  

    }

    {isEditPlanning &&
        <div className='container'>
            <form onSubmit={handleEditPlanningSubmit}>
                <div className='input'>
                    <label>Planning</label>
                        <textarea name='planning' defaultValue={editData.planning}  class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea"></textarea>
                </div>
                <div className='flex justify-end pb-2'>
                    <button onClick={handleTampilanEditPlanning} className='py-0.2 px-1 mr-2 mt-2 bg-red-700 text-white hover:opacity-75'>BATAL</button>
                    <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
                </div>  
            </form>
        </div>
    
}


    {isTambahDataPlanning &&
    
        <div className='container'>
            <form onSubmit={handlePlanning}>
                <div className='input'>
                    <label>Planning</label>
                        <textarea name='planning'  class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea"></textarea>
                    </div>
                <div className='flex justify-end pb-2'>
                    <button onClick={handleTampilanEditPlanning} className='py-0.2 px-1 mr-2 mt-2 bg-red-700 text-white hover:opacity-75'>BATAL</button>
                    <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
                </div>  
            </form>
        </div>    
    
    
    }
    
    
    
    
    
    </>
  )
}

export default Planning