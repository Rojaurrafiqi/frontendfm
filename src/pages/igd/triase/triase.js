import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useParams} from "react-router-dom";
import Tandavital from './component/tandavital';
import Anamnesa from './component/anamnesa';
import Pemeriksaanfisik from './component/pemeriksaanfisik';
import Ats from './component/ats';
import Pemeriksaanpenunjang from './component/pemeriksaanpenunjang';
import Planning from './component/planning';
import Permasalahan from './component/permasalahan';
import Kondisiterakhir from './component/kondisiterakhir';
import editIcon from '../../../images/edit2.png';
import closeIcon from '../../../images/close.png';



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



    
  return (
<>
    <div className='text-left px-1 bg-emerald300 font-semibold'>
        Triase Pasien Gawat Darurat
    </div>
    <div className='container border border-state-300  bg-white p-5 text-left'>
    {isKeluhan && 
    <div className='container'>
    <div className='relative'>
      <button onClick={handleTampilanKeluhan}  className='absolute top-0 right-0 hover:opacity-75'><img src={editIcon} width="30px" /></button>
    </div>

    <div className='keluhan '>
    {formSubmitted  || nilai === nilaiIdPasienIgd  ? (
        <div className='keluhan'>
      
                  {formDataKu &&
                    <>
                    {Array.isArray(pasienigdtriase)  && pasienigdtriase.map((data, index) => (
                      <div key={index}>
                        <span>Keluhan: </span>{data.keluhan_utama}
                      </div>
                    ))}
                    </>
                  }

                  {formUpdate &&
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
      <form onSubmit={handleKeluhan}>
        Keluhan : <input type="text" name="keluhan_utama" className='border border-black' />
        <button className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
      </form>
    )}
  </div>
  </div>
    
  }
  {isEditKeluhan &&
  <div className='container'>
    <div className='relative'>
      <button onClick={handleTampilanEditKeluhan}  className='absolute top-0 right-0 hover:opacity-75'><img src={closeIcon} width="30px" /></button>
    </div>
  <div>
    <form onSubmit={handleEditSubmit}>
      <span> Keluhan : </span><input type="text" name="keluhan_utama" value={keluhanvalue} onChange={handleEditChange} className='border border-black' />
    <button className='ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
    </form>
  </div>
  </div>
  
  }
  </div>


  <div className='container my-4'>
    <Ats id={id} />
  </div>

  <div className='flex '>
    <div className='container mr-2'>
      <Tandavital id={id}/>
    </div>

    <div className='container ml-2'>
      <Anamnesa id={id} />
    </div>

  </div>

  <div className='container mt-1 pb-5'>
    <Pemeriksaanfisik id={id} />
  </div>
 
  <div className='container mt-1 pb-5'>
    <Pemeriksaanpenunjang id={id} />
  </div>

  <div className='container mt-1 pb-5'>
    <div className='text-left px-1 bg-emerald300 font-semibold'>
        Tatalaksana/Planning
    </div>

    <div className='container border border-state-300  bg-white p-2 text-left'>
      <div className='flex'>
        <div className='container mr-2'>
          <Planning id={id} />
        </div>
        <div className='container ml-2'>
          <Permasalahan id={id} />
        </div>
      </div>
    </div>
 
  </div>

  
  <div className='flex '>
    <div className='container mr-2'>
      <Kondisiterakhir id={id} />
    </div>
    <div className='container ml-2'>
      <Kondisiterakhir id={id} />
    </div>
  </div>

</>
  )
}

export default Triase