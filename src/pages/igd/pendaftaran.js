import React, {useState, useEffect} from 'react'
import axios from "axios";

const Pendaftaran = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  
  const [datapasien, setDataPasien] = useState([]);
  const [formData, setFormData] = useState({});
  const [simpanid, setSimpanId] = useState();
  


    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const handleklik = (event, id) => {
    event.preventDefault();
    setSearchResult([]);
    setSearchQuery('');
    fetch(`http://localhost:5000/igd/pasien/${id}`)
      .then((response) => response.json())
      .then((datak) => {
        setDataPasien([datak]);
        setSimpanId(parseInt(datak.id));
      
      })
      .catch((error) => console.log(error));
    
  };

 

   const handleSubmit = async (event) => {
        event.preventDefault();
        // mengambil data dari API berdasarkan input pencarian pengguna
        fetch(`http://localhost:5000/igd/pasien?search=${searchQuery}&page=&limit=10`)
      .then((response) => response.json())
      .then((data) => setSearchResult(data.data))
      .catch((error) => console.log(error));

    
    };

   const handleRegisterPasien = async (event) => {
        event.preventDefault();
         const dataToSend = {
    ...formData, 
    id_pasien_rm: simpanid,
  };
   try {
     const response = await axios.post('http://localhost:5000/igd/pasien/register', dataToSend);
     
    
   } catch (error) {
    console.error(error);
   }
  };

     const handleFormChange = (event) => {
  
    setFormData({ ...formData, [event.target.name]: event.target.value });
    
    //  const { name, value } = event.target;
    // setEditData(prevState => ({
    //     ...prevState,
    //     [name]: value
    // }));

    };


     useEffect(() => {
    if (searchQuery !== '') {
    
      fetch(`http://localhost:5000/igd/pasien?search=${searchQuery}&page=&limit=5`)
        .then(response => response.json())
        .then(data => setSearchResult(data.data))
        .catch(error => console.error(error));
    } else {
      setSearchResult([]);
    }
  }, [searchQuery]);



  
  
  return (
    <>
    
     <div className="container border border-state-300 bg-white p-5">
    <div className='search text-left flex'>
        <form onSubmit={handleSubmit}>
            <input className='border border-black pl-0.5 py-0.4  ' type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search..." autoFocus/>
           <button className="ml-1 py-0.2 px-1 bg-emerald text-white rounded hover:opacity-75"  >
                Submit
           </button>
        </form>
    </div>

  

      <ul className='text-left'>
        {searchResult.map((item) => (
          <li key={item.id}>
            <div className='container w-30 bg-white border border-state-300'>
              <a href='#' className='hover:bg-grey-500 pr-5 pl-1 py-1' onClick={(event) => handleklik(event, item.id)}><span className='font-sm'> {item.nama_lengkap} </span></a>
           
            </div>

        </li>

  
        ))}
      </ul>
   
   
   
 <div className="flex mt-5">
    <div className='container border border-state-300 w-2/3 mr-5 p-2'>
      {datapasien.map((pasien) => (
        <div className='text-left' key={pasien.id}>
          <p>no rm :{pasien.no_rm}</p>
          <p>nik :{pasien.no_kitas}</p>
          <p>nama :{pasien.nama_lengkap}</p>
          <p>tanggal lahir :{pasien.tanggal_lahir}</p>
          <p>kelamin :{pasien.kelamin}</p>
        </div>
       ))}
    </div>
    <div className='container border border-state-300 w-2/3'>
      <form onSubmit={handleRegisterPasien}>
        <div className='flex p-1'>
          <label className='ml-1'>Tanggal masuk</label>
          {/* <input type="text" name='id_pasien_rm' value={simpanid} onChange={handleFormChange} className='border border-black ml-1 pl-0.5 py-0.4'/> */}
          <input type="text" name='tgl_masuk' onChange={handleFormChange} className='border border-black ml-1 pl-0.5 py-0.4'/>
        </div>
        <div className='flex p-1'>
          <label className='ml-1'>Jam masuk</label>
          <input type="text" name='jam_masuk' onChange={handleFormChange} className='border border-black ml-1 pl-0.5 py-0.4'/>
        </div>
        <div className='flex p-1'>
          <label className='ml-1'>Cara masuk</label>
          <input type="text" name='cara_masuk' onChange={handleFormChange} className='border border-black ml-1 pl-0.5 py-0.4'/>
        </div>
        <div className='flex p-1'>
          <label className='ml-1'>Pembayaran</label>
          <input type="text" name='pembayaran_igd' onChange={handleFormChange} className='border border-black ml-1 pl-0.5 py-0.4'/>
        </div>
            <button className="ml-1 mr-2 mb-2 py-0.2 px-1 bg-emerald text-white rounded hover:opacity-75"  >
                Submit
           </button>
      </form>
    </div>
</div>
    </div>




    
    </>
  )
}

export default Pendaftaran