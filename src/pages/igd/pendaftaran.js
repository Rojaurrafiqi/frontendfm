import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from '../../component/Modal';

const Pendaftaran = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  
  const [datapasien, setDataPasien] = useState([]);
  const [formData, setFormData] = useState({});
  const [simpanid, setSimpanId] = useState();
  
  const [showModal, setShowModal] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);

  const [allpasienigd, setAllPasienIgd] = useState();





  useEffect(() => {
    axios.get('http://localhost:5000/igd/pasien/all')
      .then(response => setAllPasienIgd(response.data));
  }, [allpasienigd]);

 


    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const handleklik = (event, id) => {
    event.preventDefault();
    setSearchResult([]);
    setSearchQuery('');
    fetch(`http://localhost:5000/igd/pasien/search/${id}`)
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


    // punya delete

    const handleDeleteUser = async (PasienId) => {
 
    try {
      await axios.delete(`http://localhost:5000/igd/pasien/${PasienId}`);
      

    } catch (error) {
      console.error(error);
      alert("Failed to delete user.");
    }
  
};

    const handleConfirmDelete = () => {
    handleDeleteUser(deleteUserId);
    setIsDeleteOpen(false);
    setDeleteUserId(null);
    };

    const handleShowModal = (PasienId) => {
    setDeleteUserId(PasienId);
    setIsDeleteOpen(true);
    };

    const handleCloseModal = () => {
    setIsDeleteOpen(false);
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
    
     <div className="container border border-state-300 bg-white p-5 mt-5 mb-4 ">
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

      

<div class="overflow-x-auto my-5">
   <table class="table-auto">
   <thead>
  <tr>
    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Masuk</th>
    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jam</th>
    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No RM</th>
    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Pasien</th>
    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cara Masuk</th>
    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
  </tr>
</thead>
<tbody class="bg-white divide-y divide-gray-200">
  {allpasienigd && allpasienigd.map((pasien, index) => (

    <tr key={pasien.id}>
    <td class=" py-0.3 whitespace-nowrap">{index + 1}</td>
    <td class=" py-0.3 whitespace-nowrap">{pasien.tgl_masuk}</td>
    <td class=" py-0.3 whitespace-nowrap">{pasien.jam_masuk}</td>
    <td class=" py-0.3 whitespace-nowrap">{pasien.pasien_rm.no_rm}</td>
    <td class=" py-0.3 whitespace-nowrap">{pasien.pasien_rm.nama_lengkap}</td>
    <td class=" py-0.3 whitespace-nowrap">{pasien.cara_masuk}</td>
    <td class=" py-0.3 whitespace-nowrap">
      <Link to={`/igd/pasien/tangani/${pasien.id}`}  className='ml-1 py-0.1 my-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75' type='button'>Tangani</Link>
      <button onClick={() => handleShowModal(pasien.id)}  className='ml-1 py-0.1 px-1 mr-1 my-0.2 bg-red-600 text-white  hover:opacity-75' type='button'>Delete</button>
    </td>
  </tr>
    ))}


</tbody>

    </table>


    </div>
    </div>


{/* modal delete */}
<Modal isOpen={isDeleteOpen} onClose={handleCloseModal}>
     <div class="bg-white rounded-lg w-1/3 mt-10 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">

      <div class="bg-gray-50 p-6">

  
        <div class="flex flex-col md:flex-row">
            <div class="w-full">
                   <h2 class="text-xl font-bold py-4 ">Are you sure?</h2>
                        <p class="text-sm text-gray-500 px-8">Do you really want to delete this data? This process cannot be undone</p> 
                  <div className='mt-4'>
                   <button onClick={handleConfirmDelete} class="px-4 py-2 mr-2 bg-red-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">Yes</button>
                   <button onClick={() => setIsDeleteOpen(false)} class="px-4 py-2 ml-2 bg-gray-100 text-state-700 border border-black rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 mr-2">No</button>
                  </div>
            </div>
        </div>
        </div>
    </div>
</Modal>



    
    </>
  )
}

export default Pendaftaran