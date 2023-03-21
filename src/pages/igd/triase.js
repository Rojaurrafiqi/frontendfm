import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link, useNavigate , useParams} from "react-router-dom";



const Triase = (props) => {
  const {id} = useParams();
  const nilai = Number(id);

    const [pasienigdtriase, setPasienIgdTriase] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(true);
    const [formEditted, setFormEditted] = useState(false);
    const [isKeluhan, setIsKeluhan] = useState(true);
    const [isEditKeluhan, setIsEditKeluhan] = useState(false);
    const [keluhanvalue, setkeluhanvalue] = useState('');
    const [idkeluhanvalue, setIdkeluhanvalue] = useState();
    const [nilaiIdPasienIgd, setNilaiIdPasienIgd] = useState();
    const [formDataKu, setFormData] = useState(true);
    const [formUpdate, setFormUpdate] = useState(false);
    
    
    // state tanda vital pasien
    const [pasienIgdTriaseTandaVital, setPasienIgdTriaseTandaVital] = useState([]);
    const [isTandaVital, setIsTandaVital] = useState(true);
    const [isEditTandaVital, setIsEditTandaVital] = useState(false);
    const [formSubmittedTandaVital, setFormSubmittedTandaVital] = useState(true);
    const [dataTandaVital, setDataTandaVital] = useState(true);
    const [formUpdateTandaVital, setFormUpdateTandaVital] = useState(false);
    const [tandavitalvalue, setTandaVitalValue] = useState('');

    
    function fetchTriaseIgd(id) {
      axios
      .get(`http://localhost:5000/igd/pasien/penanganan/triase/${id}`)
       .then(response => {
      const data = response.data; 
      setPasienIgdTriase(data); 
      setkeluhanvalue(data[0].keluhan_utama);
      setIdkeluhanvalue(data[0].id);
      setNilaiIdPasienIgd(data[0].id_pasien_igd);

      })
      .catch((error) => {
        console.error(error);
      });
    }


    useEffect(() => {
  if (formSubmitted || formEditted) {
    fetchTriaseIgd(id);
    setFormSubmitted(false);
    setFormEditted(false);
  }
}, [id, formSubmitted, formEditted]);
  
console.log(pasienigdtriase);

  function handleKeluhan(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newKeluhan = formData.get('keluhan_utama');

  axios.post(`http://localhost:5000/igd/pasien/penanganan/triase`, {
    keluhan_utama: newKeluhan,
    id_pasien_igd: nilai
  })
  .then(response => {
    const updatedData = response.data;
     setPasienIgdTriase(prevData => [...prevData, updatedData]); // update the state with an array of objects
     setFormSubmitted(true);
  })
  .catch((error) => {
    console.error(error);
    setFormSubmitted(false);
  });
}

function handleTampilanKeluhan (event) {
  setIsKeluhan(false);
  setIsEditKeluhan(true);
  setFormSubmitted(false);
}
function handleTampilanEditKeluhan (event) {
  setIsKeluhan(true);
  setIsEditKeluhan(false);
  setFormSubmitted(true);
  
}

function handleEditChange (event) {
   setkeluhanvalue(event.target.value);
}


function handleEditSubmit (event) {
   event.preventDefault();
  
 
  axios.patch(`http://localhost:5000/igd/pasien/penanganan/triase/${idkeluhanvalue}`, {
    keluhan_utama: keluhanvalue,
    id_pasien_igd: nilai,
  })
  .then(response => {
    setNilaiIdPasienIgd(response.data.id_pasien_igd);
    setIsKeluhan(true);
    setFormSubmitted(true);
    setIsEditKeluhan(false);
    setFormUpdate(true);
    setFormData(false);

    // memperbarui data pada tampilan 
     axios.get(`http://localhost:5000/igd/pasien/penanganan/triase/${idkeluhanvalue}`)
      .then(response => {
        setPasienIgdTriase(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  })
  .catch(error => {
    console.error(error);
  });
}


// tanda vital

//     function fetchTriaseTandaVitalIgd(id) {
//       axios
//       .get(`http://localhost:5000/igd/pasien/penanganan/triase/tandavital/${id}`)
//        .then(response => {
//       const data = response.data; 
//       setPasienIgdTriaseTandaVital(data); 
//       setIdTandaVitalValue(data[0].id);
//       setNilaiIdPasienIgd(data[0].id_pasien_igd);
//       setkeluhanvalue(data[0].keluhan_utama);

//       })
//       .catch((error) => {
//         console.error(error);
//       });
//     }

//     console.log(pasienIgdTriaseTandaVital);


//     useEffect(() => {
//   if (formSubmittedTandaVital) {
//     fetchTriaseTandaVitalIgd(id);
//     setFormSubmittedTandaVital(false);

//   }
// }, [id, formSubmittedTandaVital]);
  

//   function handleTandaVital(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const newKeluhan = formData.get('keluhan_utama');

//   axios.post(`http://localhost:5000/igd/pasien/penanganan/triase`, {
//     keluhan_utama: newKeluhan,
//     id_pasien_igd: nilai
//   })
//   .then(response => {
//     const updatedData = response.data;
//      setPasienIgdTriase(prevData => [...prevData, updatedData]); // update the state with an array of objects
//      setFormSubmittedTandaVital(true);
//   })
//   .catch((error) => {
//     console.error(error);
//     setFormSubmitted(false);
//   });
// }

// function handleTampilanTandaVital (event) {
//   setIsTandaVital(false);
//   setIsEditTandaVital(true);
//   setFormSubmittedTandaVital(false);
// }
// function handleTampilanEditTandaVital (event) {
//   setIsTandaVital(true);
//   setIsEditTandaVital(false);
//   setFormSubmittedTandaVital(true);
// }

// function handleEditTandaVitalChange (event) {
//    setTandaVitalValue(event.target.value);
// }


// function handleEditTandaVitalSubmit (event) {
//    event.preventDefault();
  
 
//   axios.patch(`http://localhost:5000/igd/pasien/penanganan/triase/${idkeluhanvalue}`, {
//     keluhan_utama: keluhanvalue,
//     id_pasien_igd: nilai,
//   })
//   .then(response => {
//     setNilaiIdPasienIgd(response.data.id_pasien_igd);
//     setIsKeluhan(true);
//     setFormSubmitted(true);
//     setIsEditKeluhan(false);
//     setFormUpdate(true);
//     setFormData(false);

//     // memperbarui data pada tampilan 
//      axios.get(`http://localhost:5000/igd/pasien/penanganan/triase/${idkeluhanvalue}`)
//       .then(response => {
//         setPasienIgdTriase(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });

//   })
//   .catch(error => {
//     console.error(error);
//   });
// }


    
  return (
<>
      <div className='text-left px-1 bg-emerald300 font-semibold'>
        Triase Pasien Gawat Darurat
      </div>
    <div className='container border border-state-300  bg-white p-5 text-left'>
    {isKeluhan && 

    <div className='keluhan '>
    {formSubmitted  || nilai === nilaiIdPasienIgd  ? (
        <div className='keluhan'>
          <button onClick={handleTampilanKeluhan} className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75' type='button'>EDIT</button>
         
                  {formDataKu &&
                    <>
                    {Array.isArray(pasienIgdTriaseTandaVital)  && pasienIgdTriaseTandaVital.map((data, index) => (
                      <div key={index}>
                        <span>Keluhan: </span>{data.keluhan_utama}
                      </div>
                    ))}
                    </>
                  }

                  {formUpdate &&
                  <>
                    {pasienIgdTriaseTandaVital.map((data, index) => (
                    <div key={index}>
                      <span> Keluhan: </span>{data.keluhan_utama}
                    </div>
                   ))}
                  </>
                  }
        </div>
    ) : (
      <form onSubmit={handleKeluhan}>
        Keluhan : <input type="text" name="keluhan_utama" className='border border-black' />
        <button className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
      </form>
    )}
  </div>
    
  }

  {isEditKeluhan &&
  
  <div>
    <button onClick={handleTampilanEditKeluhan} className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75' type='button'>BATAL</button>
    <form onSubmit={handleEditSubmit}>
   <span> Keluhan : </span><input type="text" name="keluhan_utama" value={keluhanvalue} onChange={handleEditChange} className='border border-black' />
    <button className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
    
    </form>
    
  </div>
  
  
  }
  </div>

  <div className='flex mt-5'>
    <div className='container mr-2'>
      <div className='text-left pl-2 bg-emerald300 font-semibold'>
        Tanda Vital
      </div>
      <div className='border border-state-300  bg-white text-left p-3 mb-5'>
 
      {/* {isTandaVital && 

          <div className='tandavital '>
          {formSubmittedTandaVital  || nilai === nilaiIdPasienIgd  ? (
              <div className='keluhan'>
                <button onClick={handleTampilanTandaVital} className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75' type='button'>EDIT</button>
              
                        {dataTandaVital &&
                          <>
                          {Array.isArray(pasienigdtriase)  && pasienigdtriase.map((data, index) => (
                            <div key={index}>
                              <span>Keluhan: </span>{data.keluhan_utama}
                            </div>
                          ))}
                          </>
                        }

                        {formUpdateTandaVital &&
                        <>
                          {pasienigdtriase.map((data, index) => (
                          <div key={index}>
                            <span> Keluhan: </span>{data.keluhan_utama}
                          </div>
                        ))}
                        </>
                        }
              </div>
          ) : (
            <form onSubmit={handleTandaVital}>
              Keluhan : <input type="text" name="keluhan_utama" className='border border-black' />
              <button className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
            </form>
          )}
        </div>
          
        }

        {isEditTandaVital &&
        
        <div>
          <button onClick={handleTampilanEditTandaVital} className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75' type='button'>BATAL</button>
          <form onSubmit={handleEditTandaVitalSubmit}>
        <span> Keluhan : </span><input type="text" name="keluhan_utama" value={tandavitalvalue} onChange={handleEditTandaVitalChange} className='border border-black' />
          <button className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
          
          </form>
          
        </div>

      } */}

      </div>
    </div>

    <div className='container ml-2'>
      <div className='text-left pl-2 bg-emerald300 font-semibold'>
        Anamnesa
      </div>
      <div className='border border-state-300  bg-white text-left p-3 mb-5'>
        nadjnskdjnakjdn
      </div>
    </div>

  </div>

</>
  )
}

export default Triase