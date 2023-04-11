import React, {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import editIcon from '../../../../images/edit2.png';

const Pemeriksaanpenunjang = () => {

  const {id} = useParams();
  const nilai = Number(id);

  const [pasienIgdTriasePemeriksaanPenunjang, setPasienIgdTriasePemeriksaanPenunjang] = useState([]);
  const [formSubmittedPemeriksaanPenunjang, setFormSubmittedPemeriksaanPenunjang] = useState(true);
  const [nilaiIdPasienIgd, setNilaiIdPasienIgd] = useState();
  const [isPemeriksaanPenunjang, setIsPemeriksaanPenunjang] = useState(true);
  const [isEditPemeriksaanPenunjang, setIsEditPemeriksaanPenunjang] = useState(false);
  const [isTambahDataPemeriksaanPenunjang, setIsTambahDataPemeriksaanPenunjang] = useState(false); 
  const [idPemeriksaanPenunjangValue, setIdPemeriksaanPenunjangValue] = useState([]); 
//   const [idPemeriksaanPenujang, setIdEditPemeriksaanPenunjang] = useState(); 
  
  const [editData, setEditData] = useState({});

  const [pilihJenisPemeriksaan, setPilihJenisPemeriksaan] = useState('Laboratorium'); 
  const [editPilihJenisPemeriksaan, setEditPilihJenisPemeriksaan] = useState({jenis_pemeriksaan: '', });




  //fetch data tanda vital
  function fetchIgdTriasePemeriksaanPenunjang(id) {
      axios
      .get(`http://localhost:5000/igd/pasien/penanganan/triase/pemeriksaanpenunjang/${id}`)
       .then(response => {
      const data = response.data; 
      setPasienIgdTriasePemeriksaanPenunjang(data); 
      setNilaiIdPasienIgd(data[0].id_pasien_igd);
     
      })

      .catch((error) => {
        console.error(error);
      });
    }
 
    useEffect(() => {
  if (formSubmittedPemeriksaanPenunjang) {
    fetchIgdTriasePemeriksaanPenunjang(id);
    setFormSubmittedPemeriksaanPenunjang(false);
  }
}, [id, formSubmittedPemeriksaanPenunjang]);

const handleJenisPemeriksaanChange = (event) => {
        setPilihJenisPemeriksaan(event.target.value);
         
        // setPilihKelamin(value);
        const { name, value } = event.target;
        setEditPilihJenisPemeriksaan((prevState) => ({
            ...prevState,
            [name]: value,
        }));
}



function handlePemeriksaanPenunjang(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries())


  axios.post(`http://localhost:5000/igd/pasien/penanganan/triase/pemeriksaanpenunjang`, {
    ...data,
    pilihJenisPemeriksaan,
    id_pasien_igd: nilai
  })
  .then(response => {
    const updatedData = response.data;
     setFormSubmittedPemeriksaanPenunjang(true);
     setIsPemeriksaanPenunjang(true);
     setIsTambahDataPemeriksaanPenunjang(false);
  })
  .catch((error) => {
    console.error(error);
    setFormSubmittedPemeriksaanPenunjang(false);
  });
}

function handleTampilanEditPemeriksaanPenunjang (event) {
  setIsPemeriksaanPenunjang(true);
  setIsEditPemeriksaanPenunjang(false);
  setIsTambahDataPemeriksaanPenunjang(false);
  setFormSubmittedPemeriksaanPenunjang(true);
}

function handleTampilanTambahDataPemeriksaanPenunjang (event) {
    setIsPemeriksaanPenunjang(false);
    setIsEditPemeriksaanPenunjang(false);
    setIsTambahDataPemeriksaanPenunjang(true);
    setFormSubmittedPemeriksaanPenunjang(true);
}

// edit data
const handleEdit = (data) => {
    setEditData(data);
    setEditPilihJenisPemeriksaan(data);
    setIsEditPemeriksaanPenunjang(true);
    setIsPemeriksaanPenunjang(false);
    setIsTambahDataPemeriksaanPenunjang(false);
    setFormSubmittedPemeriksaanPenunjang(false);      
    setIdPemeriksaanPenunjangValue(data.id);          
};

function handleEditPemeriksaanPenunjangSubmit (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries())

  axios.patch(`http://localhost:5000/igd/pasien/penanganan/triase/pemeriksaanpenunjang/${idPemeriksaanPenunjangValue}`, {
     ...data,
     pemeriksaan_penunjang:editPilihJenisPemeriksaan,
    id_pasien_igd: nilai
  })

    .then(response => {
    setNilaiIdPasienIgd(response.data.id_pasien_igd);
    setIsPemeriksaanPenunjang(true);
    setFormSubmittedPemeriksaanPenunjang(true);
    setIsEditPemeriksaanPenunjang(false);
    
     // memperbarui data pada tampilan 
     axios.get(`http://localhost:5000/igd/pasien/penanganan/triase/pemeriksaanpenunjang/${id}`)
      .then(response => {
        setPasienIgdTriasePemeriksaanPenunjang(response.data);
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
    <div className='text-left px-1 bg-emerald300 font-semibold'>
        Pemeriksaan Penunjang Pasien
    </div>

    <div className='container border border-state-300  bg-white p-2 text-left'>
    {isPemeriksaanPenunjang &&
    <div className='container'>
    {formSubmittedPemeriksaanPenunjang  || nilai === nilaiIdPasienIgd  ? (
        <div className='container'>
            <div className='flex justify-between mb-2'>
                <button onClick={handleTampilanTambahDataPemeriksaanPenunjang} className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75 mr-1' type='submit'>ADD NEW</button>
            </div>
            <div class="overflow-x-auto">
            <table class="table-auto">
                <thead>
                <tr className='bg-emerald text-sm'>
                    <th className='text-white px-4 py-0.5'>#</th>
                    <th className='text-white px-4 py-0.5 '>Pemeriksaan</th>
                    <th className='text-white px-4 py-0.5  '>Diagnosa Sementara</th>
                    <th className='text-white px-4 py-0.5  '>Diagnosa Tambahan</th>
                    <th className='text-white px-4 py-0.5 '></th>
                </tr>
                </thead>
                <tbody className='text-sm'>
                {pasienIgdTriasePemeriksaanPenunjang.map((data, index) => (
                <tr key={index}>
                    <td class="border px-4 py-0.2">{index + 1}</td>
                    <td class="border px-4 py-0.2">{data.jenis_pemeriksaan}</td>
                    <td class="border px-4 py-0.2">{data.diagnosa_sementara}</td>
                    <td class="border px-4 py-0.2">{data.diagnosa_tambahan}</td>
                    <td class="border px-4 py-0.2">
                        <button onClick={() => handleEdit(data)} className='py-0.2 px-1 my-0.5 bg-emerald text-white hover:opacity-75 mr-1'>EDIT</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>

    ):(

        <form onSubmit={handlePemeriksaanPenunjang}>
            <label>Jenis Pemeriksaan</label>
            <div className='flex'>
                <div className='radio1 mr-2'>
                    <input
                        id="jenispemeriksaan"
                        name="jenis_pemeriksaan"
                        value="Laboratorium"
                        type="radio"
                        checked={pilihJenisPemeriksaan === 'Laboratorium'}
                        class="form-radio h-3 w-4"
                        onChange={handleJenisPemeriksaanChange}
                    />
                    <label  class=" text-gray-700">Laboratorium</label>
                </div>
                <div className='radio1 mr-2'>
                    <input
                        id="jenispemeriksaan"
                        name="jenis_pemeriksaan"
                        value="ECG"
                        type="radio"
                        checked={pilihJenisPemeriksaan === 'ECG'}
                        class="form-radio h-3 w-4"
                        onChange={handleJenisPemeriksaanChange}
                    />
                    <label  class=" text-gray-700">ECG</label>
                </div>
                <div className='radio1 mr-2'>
                    <input
                        id="jenispemeriksaan"
                        name="jenis_pemeriksaan"
                        value="Radiologi"
                        type="radio"
                        checked={pilihJenisPemeriksaan === 'Radiologi'}
                        class="form-radio h-3 w-4"
                        onChange={handleJenisPemeriksaanChange}
                    />
                    <label  class="text-gray-700">Radiologi</label>
                </div>
            </div>

            <div className='diagnosa'>
                <label>Diagnosa Sementara</label>
                <textarea name='diagnosa_sementara'  class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea" ></textarea>
            </div>
            <div className='diagnosa'>
                <label>Diagnosa Tambahan</label>
                <textarea name='diagnosa_tambahan' class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea"></textarea>
            </div>
            <div className='flex justify-end pb-2'>
                <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
            </div>    
        </form>

    )}
    </div>
    }

    {isEditPemeriksaanPenunjang &&
    
    <div>
        <form onSubmit={handleEditPemeriksaanPenunjangSubmit}>
            <label>Jenis Pemeriksaan</label>
            <div className='flex'>
                <div className='radio1 mr-2'>
                    <input
                        id="jenispemeriksaan"
                        name="jenis_pemeriksaan"
                        value="Laboratorium"
                        type="radio"
                        checked={editPilihJenisPemeriksaan.jenis_pemeriksaan === 'Laboratorium'}
                        class="form-radio h-3 w-4"
                        onChange={handleJenisPemeriksaanChange}
                    />
                    <label  class=" text-gray-700">Laboratorium</label>
                </div>
                <div className='radio1 mr-2'>
                    <input
                        id="jenispemeriksaan"
                        name="jenis_pemeriksaan"
                        value="ECG"
                        type="radio"
                        checked={editPilihJenisPemeriksaan.jenis_pemeriksaan === 'ECG'}
                        class="form-radio h-3 w-4"
                        onChange={handleJenisPemeriksaanChange}
                    />
                    <label  class=" text-gray-700">ECG</label>
                </div>
                <div className='radio1 mr-2'>
                    <input
                        id="jenispemeriksaan"
                        name="jenis_pemeriksaan"
                        value="Radiologi"
                        type="radio"
                        checked={editPilihJenisPemeriksaan.jenis_pemeriksaan === 'Radiologi'}
                        class="form-radio h-3 w-4"
                        onChange={handleJenisPemeriksaanChange}
                    />
                    <label  class="text-gray-700">Radiologi</label>
                </div>
            </div>

            <div className='diagnosa'>
                <label>Diagnosa Sementara</label>
                <textarea name='diagnosa_sementara' defaultValue={editData.diagnosa_sementara}  class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea" ></textarea>
            </div>
            <div className='diagnosa'>
                <label>Diagnosa Tambahan</label>
                <textarea name='diagnosa_tambahan' defaultValue={editData.diagnosa_tambahan} class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea"></textarea>
            </div>
            <div className='flex justify-end pb-2'>
                 <button onClick={handleTampilanEditPemeriksaanPenunjang} className='py-0.2 px-1 mr-2 mt-2 bg-red-700 text-white hover:opacity-75'>BATAL</button>
                <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
            </div>    
        </form>
    



   
    </div>
       
}

    {isTambahDataPemeriksaanPenunjang &&
    <form>
            <label>Jenis Pemeriksaan</label>
            <div className='flex'>
                <div className='radio1 mr-2'>
                    <input
                        id="jenispemeriksaan"
                        name="jenis_pemeriksaan"
                        value="Laboratorium"
                        type="radio"
                        checked={editPilihJenisPemeriksaan === 'Laboratorium'}
                        class="form-radio h-3 w-4"
                        onChange={handleJenisPemeriksaanChange}
                    />
                    <label  class=" text-gray-700">Laboratorium</label>
                </div>
                <div className='radio1 mr-2'>
                    <input
                        id="jenispemeriksaan"
                        name="jenis_pemeriksaan"
                        value="ECG"
                        type="radio"
                        checked={editPilihJenisPemeriksaan === 'ECG'}
                        class="form-radio h-3 w-4"
                        onChange={handleJenisPemeriksaanChange}
                    />
                    <label  class=" text-gray-700">ECG</label>
                </div>
                <div className='radio1 mr-2'>
                    <input
                        id="jenispemeriksaan"
                        name="jenis_pemeriksaan"
                        value="Radiologi"
                        type="radio"
                        checked={editPilihJenisPemeriksaan === 'Radiologi'}
                        class="form-radio h-3 w-4"
                        onChange={handleJenisPemeriksaanChange}
                    />
                    <label  class="text-gray-700">Radiologi</label>
                </div>
            </div>

            <div className='diagnosa'>
                <label>Diagnosa Sementara</label>
                <textarea name='diagnosa_sementara'  class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea" ></textarea>
            </div>
            <div className='diagnosa'>
                <label>Diagnosa Tambahan</label>
                <textarea name='diagnosa_tambahan' class="form-textarea mt-1 block w-full border border-black rounded-md py-1 px-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald300 focus:border-emerald300 sm:text-sm" id="textarea"></textarea>
            </div>
            <div className='flex justify-end pb-2'>
                <button onClick={handleTampilanEditPemeriksaanPenunjang} className='py-0.2 mr-2 px-1 mt-2 bg-red-700 text-white hover:opacity-75'>BATAL</button>
                <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
            </div>    
        </form>
    
    }

</div>

    </>
  )
}

export default Pemeriksaanpenunjang