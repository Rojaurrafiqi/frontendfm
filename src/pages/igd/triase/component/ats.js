import React, {useState, useEffect} from 'react';
import { API_URL } from '../../../../config';
import {useParams} from "react-router-dom";
import axios from "axios";
import editIcon from '../../../../images/edit2.png';
import Checkbox from '../../../../component/checkbox/Checkbox';

const Ats = () => {

const {id} = useParams();
const nilai = Number(id);
const [nilaiIdPasienIgd, setNilaiIdPasienIgd] = useState();
const [formSubmittedAts, setFormSubmittedAts] = useState(true);
const [isTampilanAts, setIsTampilanAts] = useState(true);
const [isTampilanEditAts, setIsTampilanEditAts] = useState(false);

// state table
const [dataAts, setDataAts] = useState([]);

const [jalanNafasSelected, setJalanNafasSelected] = useState([]);
const [jalanNafasEditSelected, setJalanNafasEditSelected] = useState([]);
const jalanNafasString = jalanNafasSelected.join(', ');
const jalanNafasEditString = jalanNafasEditSelected.join(', ');

const [pernafasanDewasaSelected, setPernafasanDewasaSelected] = useState([]);
const [pernafasanDewasaEditSelected, setPernafasanDewasaEditSelected] = useState([]);
const pernafasanDewasaString = pernafasanDewasaSelected.join(', ');
const pernafasanDewasaEditString = pernafasanDewasaEditSelected.join(', ');

const [pernafasanAnakSelected, setPernafasanAnakSelected] = useState([]);
const [pernafasanAnakEditSelected, setPernafasanAnakEditSelected] = useState([]);
const pernafasanAnakString = pernafasanAnakSelected.join(', ');
const pernafasanAnakEditString = pernafasanAnakEditSelected.join(', ');

const [sirkulasiDewasaSelected, setSirkulasiDewasaSelected] = useState([]);
const [sirkulasiDewasaEditSelected, setSirkulasiDewasaEditSelected] = useState([]);
const sirkulasiDewasaString = sirkulasiDewasaSelected.join(', ');
const sirkulasiDewasaEditString = sirkulasiDewasaEditSelected.join(', ');

const [sirkulasiAnakSelected, setSirkulasiAnakSelected] = useState([]);
const [sirkulasiAnakEditSelected, setSirkulasiAnakEditSelected] = useState([]);
const sirkulasiAnakString = sirkulasiAnakSelected.join(', ');
const sirkulasiAnakEditString = sirkulasiAnakEditSelected.join(', ');

const [mentalStatusSelected, setMentalStatusSelected] = useState([]);
const [mentalStatusEditSelected, setMentalStatusEditSelected] = useState([]);
const mentalStatusString = mentalStatusSelected.join(', ');
const mentalStatusEditString = mentalStatusEditSelected.join(', ');

const [skorNyeriSelected, setSkorNyeriSelected] = useState([]);
const [skorNyeriEditSelected, setSkorNyeriEditSelected] = useState([]);
const skorNyeriString = skorNyeriSelected.join(', ');
const skorNyeriEditString = skorNyeriEditSelected.join(', ');

const [assesmentTriaseSelected, setAssesmentTriaseSelected] = useState([]);
const [assesmentTriaseEditSelected, setAssesmentTriaseEditSelected] = useState([]);
const assesmentTriaseString = assesmentTriaseSelected.join(', ');
const assesmentTriaseEditString = assesmentTriaseEditSelected.join(', ');

const [planSelected, setPlanSelected] = useState('Zona Merah');
const [planEditSelected, setPlanEditSelected] = useState({plan: ''});


const [idAtsValue, setIdAtsValue] = useState();

// fetch data ATS
 function fetchIgdTriaseAts(id) {
      axios
      .get(`${API_URL}/igd/pasien/penanganan/triase/ats/${id}`)
       .then(response => {
      const data = response.data; 
      setDataAts(data); 
      setNilaiIdPasienIgd(data[0].id_pasien_igd);
      setIdAtsValue(data[0].id);


      })
      .catch((error) => {
        console.error(error);
      });
    }

    useEffect(() => {
  if (formSubmittedAts) {
    fetchIgdTriaseAts(id);
    setFormSubmittedAts(false);

  }
}, [id, formSubmittedAts]);


const handleCheckboxJalanNafasChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setJalanNafasSelected([...jalanNafasSelected, value]);
    } else {
      setJalanNafasSelected(jalanNafasSelected.filter(item => item !== value));
    }
  };

const handleCheckboxEditJalanNafasChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setJalanNafasEditSelected([...jalanNafasEditSelected, value]);
    } else {
      setJalanNafasEditSelected(jalanNafasEditSelected.filter(item => item !== value));
    }
  };

const handleCheckboxPernafasanDewasaChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setPernafasanDewasaSelected([...pernafasanDewasaSelected, value]);
    } else {
      setPernafasanDewasaSelected(pernafasanDewasaSelected.filter(item => item !== value));
    }
  };

const handleCheckboxEditPernafasanDewasaChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setPernafasanDewasaEditSelected([...pernafasanDewasaEditSelected, value]);
    } else {
      setPernafasanDewasaEditSelected(pernafasanDewasaEditSelected.filter(item => item !== value));
    }
  };

const handleCheckboxPernafasanAnakChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setPernafasanAnakSelected([...pernafasanAnakSelected, value]);
    } else {
      setPernafasanAnakSelected(pernafasanAnakSelected.filter(item => item !== value));
    }
  };

const handleCheckboxEditPernafasanAnakChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setPernafasanAnakEditSelected([...pernafasanAnakEditSelected, value]);
    } else {
      setPernafasanAnakEditSelected(pernafasanAnakEditSelected.filter(item => item !== value));
    }
  };

const handleCheckboxSirkulasiDewasaChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSirkulasiDewasaSelected([...sirkulasiDewasaSelected, value]);
    } else {
      setSirkulasiDewasaSelected(sirkulasiDewasaSelected.filter(item => item !== value));
    }
  };

const handleCheckboxEditSirkulasiDewasaChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSirkulasiDewasaEditSelected([...sirkulasiDewasaEditSelected, value]);
    } else {
      setSirkulasiDewasaEditSelected(sirkulasiDewasaEditSelected.filter(item => item !== value));
    }
  };

const handleCheckboxSirkulasiAnakChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSirkulasiAnakSelected([...sirkulasiAnakSelected, value]);
    } else {
      setSirkulasiAnakSelected(sirkulasiAnakSelected.filter(item => item !== value));
    }
  };

const handleCheckboxEditSirkulasiAnakChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSirkulasiAnakEditSelected([...sirkulasiAnakEditSelected, value]);
    } else {
      setSirkulasiAnakEditSelected(sirkulasiAnakEditSelected.filter(item => item !== value));
    }
  };

const handleCheckboxMentalStatusChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setMentalStatusSelected([...mentalStatusSelected, value]);
    } else {
      setMentalStatusSelected(mentalStatusSelected.filter(item => item !== value));
    }
  };

const handleCheckboxEditMentalStatusChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setMentalStatusEditSelected([...mentalStatusEditSelected, value]);
    } else {
      setMentalStatusEditSelected(mentalStatusEditSelected.filter(item => item !== value));
    }
  };

const handleCheckboxSkorNyeriChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSkorNyeriSelected([...skorNyeriSelected, value]);
    } else {
      setSkorNyeriSelected(skorNyeriSelected.filter(item => item !== value));
    }
  };

const handleCheckboxEditSkorNyeriChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSkorNyeriEditSelected([...skorNyeriEditSelected, value]);
    } else {
      setSkorNyeriEditSelected(skorNyeriEditSelected.filter(item => item !== value));
    }
  };

const handleCheckboxAssesmentTriaseChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setAssesmentTriaseSelected([...assesmentTriaseSelected, value]);
    } else {
      setAssesmentTriaseSelected(assesmentTriaseSelected.filter(item => item !== value));
    }
  };

const handleCheckboxEditAssesmentTriaseChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setAssesmentTriaseEditSelected([...assesmentTriaseEditSelected, value]);
    } else {
      setAssesmentTriaseEditSelected(assesmentTriaseEditSelected.filter(item => item !== value));
    }
  };


  
const handleSubmit = async (event) => {
  event.preventDefault();

    try {
      const response = await fetch(`${API_URL}/igd/pasien/penanganan/triase/ats/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          id_pasien_igd:nilai,
          jalan_nafas: jalanNafasString, 
          pernafasan_dewasa:pernafasanDewasaString,
          pernafasan_anak:pernafasanAnakString,
          sirkulasi_dewasa:sirkulasiDewasaString,
          sirkulasi_anak:sirkulasiAnakString,
          mental_status:mentalStatusString,
          skor_nyeri:skorNyeriString,
          assesment_triase:assesmentTriaseString,
          plan:planSelected,

        }),
      });

      const data = await response.json();
      setFormSubmittedAts(true);
    
    } catch (error) {
      console.error(error);
    }
       
    };



    const handleTampilanAts = () => {
      setIsTampilanEditAts(true);
      setIsTampilanAts(false);
      setJalanNafasEditSelected(dataAts[0].jalan_nafas.split(','));
      setPernafasanDewasaEditSelected(dataAts[0].pernafasan_dewasa.split(','))
      setPernafasanAnakEditSelected(dataAts[0].pernafasan_anak.split(','))
      setSirkulasiDewasaEditSelected(dataAts[0].sirkulasi_dewasa.split(','))
      setSirkulasiAnakEditSelected(dataAts[0].sirkulasi_anak.split(','))
      setMentalStatusEditSelected(dataAts[0].mental_status.split(','))
      setSkorNyeriEditSelected(dataAts[0].skor_nyeri.split(','))
      setAssesmentTriaseEditSelected(dataAts[0].assesment_triase.split(','))
      setPlanEditSelected(dataAts[0]);
    
    };


function handleEditAtsSubmit (event) {
  event.preventDefault();


  axios.patch(`${API_URL}/igd/pasien/penanganan/triase/ats/${idAtsValue}`, {

    id_pasien_igd: nilai,
    jalan_nafas: jalanNafasEditString, 
    pernafasan_dewasa:pernafasanDewasaEditString,
    pernafasan_anak:pernafasanAnakEditString,
    sirkulasi_dewasa:sirkulasiDewasaEditString,
    sirkulasi_anak:sirkulasiAnakEditString,
    mental_status:mentalStatusEditString,
    skor_nyeri:skorNyeriEditString,
    assesment_triase:assesmentTriaseEditString,
    plan:planEditSelected.plan,


  })
    .then(response => {
    setNilaiIdPasienIgd(response.data.id_pasien_igd);
    setIsTampilanAts(true);
    setFormSubmittedAts(true);
    setIsTampilanEditAts(false);
    
     // memperbarui data pada tampilan 
     axios.get(`${API_URL}/igd/pasien/penanganan/triase/ats/${id}`)
      .then(response => {
        setDataAts(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  })
    .catch(error => {
      console.log(error);
    });
}

    const handleOptionPlanChange = (event) => {
        setPlanSelected(event.target.value);
       

        const { name, value } = event.target;
        setPlanEditSelected((prevState) => ({
            ...prevState,
            [name]: value,
        }));
  };


    return(
    <>
    
    <div className='text-left px-1 bg-emerald300 font-semibold'>
        Australian Triage Scale (ATS)
    </div>

    <div className='container border border-state-300  bg-white p-2 text-left'>
    <div class="w-full overflow-hidden">

{isTampilanAts && 
  <div className='tampilanAts'>
       {formSubmittedAts  || nilai === nilaiIdPasienIgd  ? (
        <div className='container'>
           <div className='relative'>
              <button onClick={handleTampilanAts}  className='absolute top-0 right-0 hover:opacity-75'><img src={editIcon} width="30px" /></button>
            </div>
            
            {Array.isArray(dataAts)  && dataAts.map((data, index) => (
                 <div key={index}>
                    <div className='flex'>
                        <div className='container'>
                            <tr>
                                <td>Jalan Nafas</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.jalan_nafas}</td>
                            </tr>
                            <tr>
                                <td>Pernafasan Dewasa</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.pernafasan_dewasa}</td>
                            </tr>
                            <tr>
                                <td>Pernafasan Anak</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.pernafasan_anak}</td>
                            </tr>
                            <tr>
                                <td>Sirkulasi Dewasa</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.sirkulasi_dewasa}</td>
                            </tr>

                        </div>        
                        <div className='container'>
                            <tr>
                                <td>Sirkulasi Anak</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.sirkulasi_anak}</td>
                            </tr>
                            <tr>
                                <td>Mental Status</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.mental_status}</td>
                            </tr>
                            <tr>
                                <td>Assesment Triase</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.assesment_triase}</td>
                            </tr>
                            <tr>
                                <td>Plan</td>
                                <td className='px-2'>:</td>
                                <td className={`pr-7 py-0.3 pl-1 ${data.plan === 'Zona Merah' ? 'bg-red-600 text-white' : data.plan === 'Zona Kuning' ? 'bg-yellow-300' : data.plan === 'Zona Hijau' ? 'bg-green-500' : ''}`}>
                                  {data.plan}
                                </td>
                            </tr>  
                            
                                                  
                          </div>      
                    </div>  
                </div>
            
            ))}
        </div>
      ):(
    <form onSubmit={handleSubmit}>
    <table class="w-full border border-black">
        <thead>
        <tr class=" text-black uppercase text-sm leading-normal">
            <th class="bg-neutral-300 py-3 px-1 text-left text-sm">PEMERIKSAAN</th>
            <th class="bg-red-500 py-3 px-1 text-center text-sm">IMMEDIATE <br/> (Segera)</th>
            <th class="bg-amber-600 py-3 px-1 text-center text-sm">EMERGENT <br/> (10 Mnt)</th>
            <th class="bg-yellow-300 py-3 px-1 text-center text-sm">URGENT <br/> (30 Mnt)</th>
            <th class="bg-green-500 py-3 px-1 text-center text-sm">SEMI URGENT <br/> (60 Mnt)</th>
            <th class="bg-blue-300 py-3 px-1 text-center text-sm">NON URGENT <br/> (120 Mnt)</th>
        </tr>
        </thead>
        <tbody class="text-black text-xs text-left ">
        <tr class="border border-black ">
            <td className='py-1 px-1 text-left'>JALAN NAFAS</td>
            <td className='bg-red-500 py-1 px-1 text-left'><Checkbox  checked={jalanNafasSelected.includes('sumbatan total')} onChange={handleCheckboxJalanNafasChange} name="jalan_nafas" label="sumbatan total" value="sumbatan total" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600 py-1 px-1 text-left'><Checkbox checked={jalanNafasSelected.includes('sumbatan parsial')} onChange={handleCheckboxJalanNafasChange} name="jalan_nafas" label="sumbatan parsial" value="sumbatan parsial" class="form-checkbox h-3 w-3 mr-1 text-emerald" /></td>
            <td className='bg-yellow-300 py-1 px-1 text-left'><Checkbox checked={jalanNafasSelected.includes('bebas(urgent)')} onChange={handleCheckboxJalanNafasChange}  name="jalan_nafas" label="bebas" value="bebas(urgent)"  class="form-checkbox h-3 w-3 mr-1 text-emerald" /></td>
            <td className='bg-green-500 py-1 px-1 text-left'><Checkbox checked={jalanNafasSelected.includes('bebas(semi urgent)')} onChange={handleCheckboxJalanNafasChange} name="jalan_nafas" label="bebas" value="bebas(semi urgent)"  class="form-checkbox h-3 w-3 mr-1 text-emerald" /></td>
            <td className='bg-blue-300 py-1 px-1 text-left'><Checkbox checked={jalanNafasSelected.includes('bebas(non urgent)')} onChange={handleCheckboxJalanNafasChange} name="jalan_nafas" label="bebas" value="bebas(non urgent)"  class="form-checkbox h-3 w-3 mr-1 text-emerald" /></td>
        </tr>
        <tr class="border border-black  ">
            <td className='py-1 px-1 text-left'>PERNAFASAN DEWASA</td>
            <td className='bg-red-500    py-1 px-1 text-left'><Checkbox  checked={pernafasanDewasaSelected.includes('Henti nafas Frekuensi nafas dibawah 10 x/menit')} onChange={handleCheckboxPernafasanDewasaChange} name="pernafasan_dewasa" label="Henti nafas Frekuensi nafas dibawah 10 x/menit" value="Henti nafas Frekuensi nafas dibawah 10 x/menit" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600  py-1 px-1 text-left'><Checkbox  checked={pernafasanDewasaSelected.includes('Ada nafas')} onChange={handleCheckboxPernafasanDewasaChange} name="pernafasan_dewasa" label="Ada nafas" value="Ada nafas" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-yellow-300  py-1 px-1 text-left'><Checkbox  checked={pernafasanDewasaSelected.includes('Frekuensi nafas 24-40x/mnt')} onChange={handleCheckboxPernafasanDewasaChange} name="pernafasan_dewasa" label="Frekuensi nafas 24-40x/mnt" value="Frekuensi nafas 24-40x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-green-500   py-1 px-1 text-left'><Checkbox  checked={pernafasanDewasaSelected.includes('Frekuensi nafas 20-23x/mnt')} onChange={handleCheckboxPernafasanDewasaChange} name="pernafasan_dewasa" label="Frekuensi nafas 20-23x/mnt" value="Frekuensi nafas 20-23x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300    py-1 px-1 text-left'><Checkbox  checked={pernafasanDewasaSelected.includes('Frekuensi nafas 12-20x/mnt')} onChange={handleCheckboxPernafasanDewasaChange} name="pernafasan_dewasa" label="Frekuensi nafas 12-20x/mnt" value="Frekuensi nafas 12-20x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>
        <tr class="border border-black">
            <td className='py-3 px-1 text-left'>PERNAFASAN ANAK</td>
            <td className='bg-red-500 py-1  text-left'>
                <tr><td className='px-1'><Checkbox  checked={pernafasanAnakSelected.includes('Henti nafas')} onChange={handleCheckboxPernafasanAnakChange} name="pernafasan_anak" label="Henti nafas" value="Henti nafas" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
                <tr><td className='px-1'><Checkbox  checked={pernafasanAnakSelected.includes('Retraksi berat & sianosi')} onChange={handleCheckboxPernafasanAnakChange} name="pernafasan_anak" label="Retraksi berat & sianosi" value="Retraksi berat & sianosi" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
            </td>
            <td className='bg-amber-600 py-1 px-1 text-left'><Checkbox  checked={pernafasanAnakSelected.includes('Retraksi sedang')} onChange={handleCheckboxPernafasanAnakChange} name="pernafasan_anak" label="Retraksi sedang" value="Retraksi sedang" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-yellow-300 py-1 px-1 text-left'><Checkbox  checked={pernafasanAnakSelected.includes('Retraksi ringan')} onChange={handleCheckboxPernafasanAnakChange} name="pernafasan_anak" label="Retraksi ringan" value="Retraksi ringan" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-green-500 py-1 px-1 text-left'><Checkbox  checked={pernafasanAnakSelected.includes('Tidak ada retraksi (semi urgent)')} onChange={handleCheckboxPernafasanAnakChange} name="pernafasan_anak" label="Tidak ada retraksi" value="Tidak ada retraksi (semi urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300 py-1 px-1 text-left'><Checkbox  checked={pernafasanAnakSelected.includes('Tidak ada retraksi (non urgent)')} onChange={handleCheckboxPernafasanAnakChange} name="pernafasan_anak" label="Tidak ada retraksi" value="Tidak ada retraksi (non urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>
        <tr class="border border-black ">
            <td className='py-1 px-1 text-left'>SIRKULASI DEWASA</td>
            <td className='bg-red-500 py-1 px-1 text-left'> <Checkbox  checked={sirkulasiDewasaSelected.includes('Nadi karotis tidak teraba')} onChange={handleCheckboxSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Nadi karotis tidak teraba" value="Nadi karotis tidak teraba" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600 py-1   text-left'>
                <tr><td className='px-1'> <Checkbox  checked={sirkulasiDewasaSelected.includes('Nadi perifer tidak teraba')} onChange={handleCheckboxSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Nadi perifer tidak teraba" value="Nadi perifer tidak teraba" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
                <tr><td className='px-1'> <Checkbox  checked={sirkulasiDewasaSelected.includes('CRT > 2dtk')} onChange={handleCheckboxSirkulasiDewasaChange} name="sirkulasi_dewasa" label="CRT > 2dtk" value="CRT > 2dtk" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
                <tr><td className='px-1'> <Checkbox  checked={sirkulasiDewasaSelected.includes('Akral dingin')} onChange={handleCheckboxSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Akral dingin" value="Akral dingin" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
                <tr><td className='px-1'> <Checkbox  checked={sirkulasiDewasaSelected.includes('Pucat')} onChange={handleCheckboxSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Pucat" value="Pucat" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
            </td>
            <td className='bg-yellow-300 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiDewasaSelected.includes('Nadi 121-150x/mnt')} onChange={handleCheckboxSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Nadi 121-150x/mnt" value="Nadi 121-150x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiDewasaSelected.includes('Sistolik160-200 mmHg')} onChange={handleCheckboxSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Sistolik160-200 mmHg" value="Sistolik160-200 mmHg" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiDewasaSelected.includes('Akral hangat')} onChange={handleCheckboxSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Akral hangat" value="Akral hangat" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-green-500 py-1 px-1 text-left'> <Checkbox  checked={sirkulasiDewasaSelected.includes('Nadi 81/120x/mnt')} onChange={handleCheckboxSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Nadi 81/120x/mnt" value="Nadi 81/120x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300 py-1 px-1 text-left'> <Checkbox  checked={sirkulasiDewasaSelected.includes('Nadi 60/80x/mnt')} onChange={handleCheckboxSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Nadi 60/80x/mnt" value="Nadi 60/80x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>
        <tr class="border border-black ">
            <td className=' py-1 px-1 text-left'>SIRKULASI ANAK</td>
            <td className='bg-red-500 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Nadi karotis tidak teraba')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Nadi karotis tidak teraba" value="Nadi karotis tidak teraba" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Pucat (immediate)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Pucat" value="Pucat (immediate)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Akral dingin (immediate)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Akral dingin" value="Akral dingin (immediate)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('CRT > 4dtk')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="CRT > 4dtk" value="CRT > 4dtk" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-amber-600 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Nadi parifer tidak teraba')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Nadi parifer tidak teraba" value="Nadi parifer tidak teraba" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Pucat (emergent)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Pucat" value="Pucat (emergent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Akral dingin (emergent)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Akral dingin" value="Akral dingin (emergent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('CRT 2-4 dtk')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="CRT 2-4 dtk" value="CRT 2-4 dtk" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-yellow-300 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Nadi parifer teraba (urgent)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Nadi parifer teraba" value="Nadi parifer teraba (urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Pucat (urgent)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Pucat" value="Pucat (urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Hangat (urgent)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Hangat" value="Hangat (urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-green-500 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Nadi parifer teraba (semi urgent)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Nadi parifer teraba" value="Nadi parifer teraba (semi urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Merah muda (semi urgent)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Merah muda" value="Merah muda (semi urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Hangat (semi urgent)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Hangat" value="Hangat (semi urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-blue-300 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Nadi parifer teraba (non urgent)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Nadi parifer teraba" value="Nadi parifer teraba (non urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Merah muda (non urgent)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Merah muda" value="Merah muda (non urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakSelected.includes('Hangat (non urgent)')} onChange={handleCheckboxSirkulasiAnakChange} name="sirkulasi_anak" label="Hangat" value="Hangat (non urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
        </tr>
        <tr class="border-b border-black ">
            <td className='py-1 px-1 text-left'>MENTAL STATUS</td>
            <td className='bg-red-500    py-1 px-1 text-left'> <Checkbox  checked={mentalStatusSelected.includes('Tidak respon (GCS < 8)')} onChange={handleCheckboxMentalStatusChange} name="mental_status" label="Tidak respon (GCS < 8)" value="Tidak respon (GCS < 8)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600  py-1 px-1 text-left'> <Checkbox  checked={mentalStatusSelected.includes('Respon terhadap nyeri (GCS 9-12)')} onChange={handleCheckboxMentalStatusChange} name="mental_status" label="Respon terhadap nyeri (GCS 9-12)" value="Respon terhadap nyeri (GCS 9-12)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-yellow-300 py-1 px-1 text-left'> <Checkbox  checked={mentalStatusSelected.includes('Respon terhadap verbal (GCS 13-14)')} onChange={handleCheckboxMentalStatusChange} name="mental_status" label="Respon terhadap verbal (GCS 13-14)" value="Respon terhadap verbal (GCS 13-14)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-green-500  py-1 px-1 text-left'> <Checkbox  checked={mentalStatusSelected.includes('Sadar penuh (GCS 15) (semi urgent)')} onChange={handleCheckboxMentalStatusChange} name="mental_status" label="Sadar penuh (GCS 15)" value="Sadar penuh (GCS 15) (semi urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300   py-1 px-1 text-left'> <Checkbox  checked={mentalStatusSelected.includes('Sadar penuh (GCS 15) (non urgent)')} onChange={handleCheckboxMentalStatusChange} name="mental_status" label="Sadar penuh (GCS 15)" value="Sadar penuh (GCS 15) (non urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>
        <tr class="border-b border-black">
            <td className='py-1 px-1 text-left'>SKOR NYERI</td>
            <td className='bg-red-500    py-1 px-1 text-left'> <Checkbox  checked={skorNyeriSelected.includes('Nyeri jantung Vas 10')} onChange={handleCheckboxSkorNyeriChange} name="skor_nyeri" label="Nyeri jantung Vas 10" value="Nyeri jantung Vas 10" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600  py-1 px-1 text-left'> <Checkbox  checked={skorNyeriSelected.includes('Nyeri jantung Vas 7-9')} onChange={handleCheckboxSkorNyeriChange} name="skor_nyeri" label="Nyeri jantung Vas 7-9" value="Nyeri jantung Vas 7-9" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-yellow-300 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={skorNyeriSelected.includes('Nyeri jantung Vas 1-6 (urgent)')} onChange={handleCheckboxSkorNyeriChange} name="skor_nyeri" label="Nyeri jantung Vas 1-6" value="Nyeri jantung Vas 1-6 (urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={skorNyeriSelected.includes('Nyeri selain jantung Vas 7-10')} onChange={handleCheckboxSkorNyeriChange} name="skor_nyeri" label="Nyeri selain jantung Vas 7-10" value="Nyeri selain jantung Vas 7-10" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-green-500  py-1 px-1 text-left'> <Checkbox  checked={skorNyeriSelected.includes('Nyeri jantung Vas 1-6 (semi urgent)')} onChange={handleCheckboxSkorNyeriChange} name="skor_nyeri" label="Nyeri jantung Vas 1-6" value="Nyeri jantung Vas 1-6 (semi urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300   py-1 px-1 text-left'> <Checkbox  checked={skorNyeriSelected.includes('Tidak ada nyeri')} onChange={handleCheckboxSkorNyeriChange} name="skor_nyeri" label="Tidak ada nyeri" value="Tidak ada nyeri" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>
        <tr class="border border-black ">
            <td className='py-1 px-1 text-left'>ASSESMENT TRIASE</td>
            <td className='bg-red-500    py-1 px-1 text-left'> <Checkbox  checked={assesmentTriaseSelected.includes('Immediate/segera')} onChange={handleCheckboxAssesmentTriaseChange} name="assesment_triase" label="Immediate/segera" value="Immediate/segera" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600  py-1 px-1 text-left'> <Checkbox  checked={assesmentTriaseSelected.includes('Emergent/Gawat Darurat')} onChange={handleCheckboxAssesmentTriaseChange} name="assesment_triase" label="Emergent/Gawat Darurat" value="Emergent/Gawat Darurat" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-yellow-300 py-1 px-1 text-left'> <Checkbox  checked={assesmentTriaseSelected.includes('Urgent/mendesak')} onChange={handleCheckboxAssesmentTriaseChange} name="assesment_triase" label="Urgent/mendesak" value="Urgent/mendesak" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-green-500  py-1 px-1 text-left'> <Checkbox  checked={assesmentTriaseSelected.includes('Semi Urgent/semi mendesak')} onChange={handleCheckboxAssesmentTriaseChange} name="assesment_triase" label="Semi Urgent/semi mendesak" value="Semi Urgent/semi mendesak" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300   py-1 px-1 text-left'> <Checkbox  checked={assesmentTriaseSelected.includes('Non Urgent/tidak mendesak')} onChange={handleCheckboxAssesmentTriaseChange} name="assesment_triase" label="Non Urgent/tidak mendesak" value="Non Urgent/tidak mendesak" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>

        <tr class="border-b border-black">
            <td className='py-1 px-1 text-left'>PLAN</td>
            <td className='bg-red-500    py-1 px-1 text-left' colSpan="2"> 
              <input 
                        id="plan1"
                        name="plan"
                        type="radio"
                        checked={planSelected === 'Zona Merah'}
                        class="form-radio h-3 w-3 mr-1 text-indigo-600" 
                        value="Zona Merah"
                        onChange={handleOptionPlanChange}
          
                    />
                <label for="plan">Zona Merah</label>
            </td>
            <td className='bg-yellow-300 py-1 px-1 text-left'> 
                          <input 
                        id="plan2"
                        name="plan"
                        type="radio"
                        checked={planSelected === 'Zona Kuning'}
                        class="form-radio h-3 w-3 mr-1 text-indigo-600" 
                        value="Zona Kuning"
                        onChange={handleOptionPlanChange}
          
                    />
                <label for="plan">Zona Kuning</label>
            </td>
            <td className='bg-green-500  py-1 px-1 text-left' colSpan="2"> 
                <input 
                        id="plan3"
                        name="plan"
                        type="radio"
                        checked={planSelected === 'Zona Hijau'}
                        class="form-radio h-3 w-3 mr-1 text-indigo-600" 
                        value="Zona Hijau"
                        onChange={handleOptionPlanChange}
          
                    />
                <label for="plan">Zona Hijau</label>
            </td>
        </tr>
        
        </tbody>
    </table>
    <div className='flex justify-end'>
        <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
    </div>
    
    </form>


      )}
  
  </div>
}

{isTampilanEditAts &&
<div>
   <form onSubmit={handleEditAtsSubmit}>
    <table class="w-full border border-black">
        <thead>
        <tr class=" text-black uppercase text-sm leading-normal">
            <th class="bg-neutral-300 py-3 px-1 text-left text-sm">PEMERIKSAAN</th>
            <th class="bg-red-500 py-3 px-1 text-center text-sm">IMMEDIATE <br/> (Segera)</th>
            <th class="bg-amber-600 py-3 px-1 text-center text-sm">EMERGENT <br/> (10 Mnt)</th>
            <th class="bg-yellow-300 py-3 px-1 text-center text-sm">URGENT <br/> (30 Mnt)</th>
            <th class="bg-green-500 py-3 px-1 text-center text-sm">SEMI URGENT <br/> (60 Mnt)</th>
            <th class="bg-blue-300 py-3 px-1 text-center text-sm">NON URGENT <br/> (120 Mnt)</th>
        </tr>
        </thead>
        <tbody class="text-black text-xs text-left ">
        <tr class="border border-black ">
            <td className='py-1 px-1 text-left'>JALAN NAFAS</td>
            <td className='bg-red-500 py-1 px-1 text-left'><Checkbox  checked={jalanNafasEditSelected.includes('sumbatan total')} onChange={handleCheckboxEditJalanNafasChange} name="jalan_nafas" label="sumbatan total" value="sumbatan total" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600 py-1 px-1 text-left'><Checkbox checked={jalanNafasEditSelected.includes('sumbatan parsial')} onChange={handleCheckboxEditJalanNafasChange} name="jalan_nafas" label="sumbatan parsial" value="sumbatan parsial" class="form-checkbox h-3 w-3 mr-1 text-emerald" /></td>
            <td className='bg-yellow-300 py-1 px-1 text-left'><Checkbox checked={jalanNafasEditSelected.includes('bebas(urgent)')} onChange={handleCheckboxEditJalanNafasChange}  name="jalan_nafas" label="bebas" value="bebas(urgent)"  class="form-checkbox h-3 w-3 mr-1 text-emerald" /></td>
            <td className='bg-green-500 py-1 px-1 text-left'><Checkbox checked={jalanNafasEditSelected.includes('bebas(semi urgent)')} onChange={handleCheckboxEditJalanNafasChange} name="jalan_nafas" label="bebas" value="bebas(semi urgent)"  class="form-checkbox h-3 w-3 mr-1 text-emerald" /></td>
            <td className='bg-blue-300 py-1 px-1 text-left'><Checkbox checked={jalanNafasEditSelected.includes('bebas(non urgent)')} onChange={handleCheckboxEditJalanNafasChange} name="jalan_nafas" label="bebas" value="bebas(non urgent)"  class="form-checkbox h-3 w-3 mr-1 text-emerald" /></td>
        </tr>
        <tr class="border border-black  ">
            <td className='py-1 px-1 text-left'>PERNAFASAN DEWASA</td>
            <td className='bg-red-500    py-1 px-1 text-left'><Checkbox  checked={pernafasanDewasaEditSelected.includes('Henti nafas Frekuensi nafas dibawah 10 x/menit')} onChange={handleCheckboxEditPernafasanDewasaChange} name="pernafasan_dewasa" label="Henti nafas Frekuensi nafas dibawah 10 x/menit" value="Henti nafas Frekuensi nafas dibawah 10 x/menit" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600  py-1 px-1 text-left'><Checkbox  checked={pernafasanDewasaEditSelected.includes('Ada nafas')} onChange={handleCheckboxEditPernafasanDewasaChange} name="pernafasan_dewasa" label="Ada nafas" value="Ada nafas" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-yellow-300  py-1 px-1 text-left'><Checkbox  checked={pernafasanDewasaEditSelected.includes('Frekuensi nafas 24-40x/mnt')} onChange={handleCheckboxEditPernafasanDewasaChange} name="pernafasan_dewasa" label="Frekuensi nafas 24-40x/mnt" value="Frekuensi nafas 24-40x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-green-500   py-1 px-1 text-left'><Checkbox  checked={pernafasanDewasaEditSelected.includes('Frekuensi nafas 20-23x/mnt')} onChange={handleCheckboxEditPernafasanDewasaChange} name="pernafasan_dewasa" label="Frekuensi nafas 20-23x/mnt" value="Frekuensi nafas 20-23x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300    py-1 px-1 text-left'><Checkbox  checked={pernafasanDewasaEditSelected.includes('Frekuensi nafas 12-20x/mnt')} onChange={handleCheckboxEditPernafasanDewasaChange} name="pernafasan_dewasa" label="Frekuensi nafas 12-20x/mnt" value="Frekuensi nafas 12-20x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>
        <tr class="border border-black">
            <td className='py-3 px-1 text-left'>PERNAFASAN ANAK</td>
            <td className='bg-red-500 py-1  text-left'>
                <tr><td className='px-1'><Checkbox  checked={pernafasanAnakEditSelected.includes('Henti nafas')} onChange={handleCheckboxEditPernafasanAnakChange} name="pernafasan_anak" label="Henti nafas" value="Henti nafas" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
                <tr><td className='px-1'><Checkbox  checked={pernafasanAnakEditSelected.includes('Retraksi berat & sianosi')} onChange={handleCheckboxEditPernafasanAnakChange} name="pernafasan_anak" label="Retraksi berat & sianosi" value="Retraksi berat & sianosi" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
            </td>
            <td className='bg-amber-600 py-1 px-1 text-left'><Checkbox  checked={pernafasanAnakEditSelected.includes('Retraksi sedang')} onChange={handleCheckboxEditPernafasanAnakChange} name="pernafasan_anak" label="Retraksi sedang" value="Retraksi sedang" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-yellow-300 py-1 px-1 text-left'><Checkbox  checked={pernafasanAnakEditSelected.includes('Retraksi ringan')} onChange={handleCheckboxEditPernafasanAnakChange} name="pernafasan_anak" label="Retraksi ringan" value="Retraksi ringan" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-green-500 py-1 px-1 text-left'><Checkbox  checked={pernafasanAnakEditSelected.includes('Tidak ada retraksi (semi urgent)')} onChange={handleCheckboxEditPernafasanAnakChange} name="pernafasan_anak" label="Tidak ada retraksi" value="Tidak ada retraksi (semi urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300 py-1 px-1 text-left'><Checkbox  checked={pernafasanAnakEditSelected.includes('Tidak ada retraksi (non urgent)')} onChange={handleCheckboxEditPernafasanAnakChange} name="pernafasan_anak" label="Tidak ada retraksi" value="Tidak ada retraksi (non urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>
        <tr class="border border-black ">
            <td className='py-1 px-1 text-left'>SIRKULASI DEWASA</td>
            <td className='bg-red-500 py-1 px-1 text-left'> <Checkbox  checked={sirkulasiDewasaEditSelected.includes('Nadi karotis tidak teraba')} onChange={handleCheckboxEditSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Nadi karotis tidak teraba" value="Nadi karotis tidak teraba" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600 py-1   text-left'>
                <tr><td className='px-1'> <Checkbox  checked={sirkulasiDewasaEditSelected.includes('Nadi perifer tidak teraba')} onChange={handleCheckboxEditSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Nadi perifer tidak teraba" value="Nadi perifer tidak teraba" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
                <tr><td className='px-1'> <Checkbox  checked={sirkulasiDewasaEditSelected.includes('CRT > 2dtk')} onChange={handleCheckboxEditSirkulasiDewasaChange} name="sirkulasi_dewasa" label="CRT > 2dtk" value="CRT > 2dtk" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
                <tr><td className='px-1'> <Checkbox  checked={sirkulasiDewasaEditSelected.includes('Akral dingin')} onChange={handleCheckboxEditSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Akral dingin" value="Akral dingin" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
                <tr><td className='px-1'> <Checkbox  checked={sirkulasiDewasaEditSelected.includes('Pucat')} onChange={handleCheckboxEditSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Pucat" value="Pucat" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td></tr>
            </td>
            <td className='bg-yellow-300 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiDewasaEditSelected.includes('Nadi 121-150x/mnt')} onChange={handleCheckboxEditSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Nadi 121-150x/mnt" value="Nadi 121-150x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiDewasaEditSelected.includes('Sistolik160-200 mmHg')} onChange={handleCheckboxEditSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Sistolik160-200 mmHg" value="Sistolik160-200 mmHg" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiDewasaEditSelected.includes('Akral hangat')} onChange={handleCheckboxEditSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Akral hangat" value="Akral hangat" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-green-500 py-1 px-1 text-left'> <Checkbox  checked={sirkulasiDewasaEditSelected.includes('Nadi 81/120x/mnt')} onChange={handleCheckboxEditSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Nadi 81/120x/mnt" value="Nadi 81/120x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300 py-1 px-1 text-left'> <Checkbox  checked={sirkulasiDewasaEditSelected.includes('Nadi 60/80x/mnt')} onChange={handleCheckboxEditSirkulasiDewasaChange} name="sirkulasi_dewasa" label="Nadi 60/80x/mnt" value="Nadi 60/80x/mnt" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>
        <tr class="border border-black ">
            <td className=' py-1 px-1 text-left'>SIRKULASI ANAK</td>
            <td className='bg-red-500 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Nadi karotis tidak teraba')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Nadi karotis tidak teraba" value="Nadi karotis tidak teraba" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Pucat (immediate)')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Pucat" value="Pucat (immediate)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Akral dingin')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Akral dingin" value="Akral dingin" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('CRT > 4dtk')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="CRT > 4dtk" value="CRT > 4dtk" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-amber-600 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Nadi parifer tidak teraba')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Nadi parifer tidak teraba" value="Nadi parifer tidak teraba" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Pucat (emergent)')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Pucat" value="Pucat (emergent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Akral dingin')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Akral dingin" value="Akral dingin" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('CRT 2-4 dtk')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="CRT 2-4 dtk" value="CRT 2-4 dtk" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-yellow-300 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Nadi parifer teraba (urgent)')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Nadi parifer teraba" value="Nadi parifer teraba (urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Pucat (urgent)')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Pucat" value="Pucat (urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Hangat (urgent)')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Hangat" value="Hangat (urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-green-500 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Nadi parifer teraba (semi urgent)')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Nadi parifer teraba" value="Nadi parifer teraba (semi urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Merah muda (semi urgent)')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Merah muda" value="Merah muda (semi urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Hangat (semi urgent)')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Hangat" value="Hangat (semi urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-blue-300 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Nadi parifer teraba (non urgent)')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Nadi parifer teraba" value="Nadi parifer teraba (non urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Merah muda (non urgent)')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Merah muda" value="Merah muda (non urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={sirkulasiAnakEditSelected.includes('Hangat (non urgent)')} onChange={handleCheckboxEditSirkulasiAnakChange} name="sirkulasi_anak" label="Hangat" value="Hangat (non urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
        </tr>
        <tr class="border-b border-black ">
            <td className='py-1 px-1 text-left'>MENTAL STATUS</td>
            <td className='bg-red-500    py-1 px-1 text-left'> <Checkbox  checked={mentalStatusEditSelected.includes('Tidak respon (GCS < 8)')} onChange={handleCheckboxEditMentalStatusChange} name="mental_status" label="Tidak respon (GCS < 8)" value="Tidak respon (GCS < 8)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600  py-1 px-1 text-left'> <Checkbox  checked={mentalStatusEditSelected.includes('Respon terhadap nyeri (GCS 9-12)')} onChange={handleCheckboxEditMentalStatusChange} name="mental_status" label="Respon terhadap nyeri (GCS 9-12)" value="Respon terhadap nyeri (GCS 9-12)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-yellow-300 py-1 px-1 text-left'> <Checkbox  checked={mentalStatusEditSelected.includes('Respon terhadap verbal (GCS 13-14)')} onChange={handleCheckboxEditMentalStatusChange} name="mental_status" label="Respon terhadap verbal (GCS 13-14)" value="Respon terhadap verbal (GCS 13-14)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-green-500  py-1 px-1 text-left'> <Checkbox  checked={mentalStatusEditSelected.includes('Sadar penuh (GCS 15)')} onChange={handleCheckboxEditMentalStatusChange} name="mental_status" label="Sadar penuh (GCS 15)" value="Sadar penuh (GCS 15)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300   py-1 px-1 text-left'> <Checkbox  checked={mentalStatusEditSelected.includes('Sadar penuh (GCS 15)')} onChange={handleCheckboxEditMentalStatusChange} name="mental_status" label="Sadar penuh (GCS 15)" value="Sadar penuh (GCS 15)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>
        <tr class="border-b border-black">
            <td className='py-1 px-1 text-left'>SKOR NYERI</td>
            <td className='bg-red-500    py-1 px-1 text-left'> <Checkbox  checked={skorNyeriEditSelected.includes('Nyeri jantung Vas 10')} onChange={handleCheckboxEditSkorNyeriChange} name="skor_nyeri" label="Nyeri jantung Vas 10" value="Nyeri jantung Vas 10" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600  py-1 px-1 text-left'> <Checkbox  checked={skorNyeriEditSelected.includes('Nyeri jantung Vas 7-9')} onChange={handleCheckboxEditSkorNyeriChange} name="skor_nyeri" label="Nyeri jantung Vas 7-9" value="Nyeri jantung Vas 7-9" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-yellow-300 py-1 px-1 text-left'>
                <tr> <Checkbox  checked={skorNyeriEditSelected.includes('Nyeri jantung Vas 1-6 (urgent)')} onChange={handleCheckboxEditSkorNyeriChange} name="skor_nyeri" label="Nyeri jantung Vas 1-6" value="Nyeri jantung Vas 1-6 (urgent)" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
                <tr> <Checkbox  checked={skorNyeriEditSelected.includes('Nyeri selain jantung Vas 7-10')} onChange={handleCheckboxEditSkorNyeriChange} name="skor_nyeri" label="Nyeri selain jantung Vas 7-10" value="Nyeri selain jantung Vas 7-10" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></tr>
            </td>
            <td className='bg-green-500  py-1 px-1 text-left'> <Checkbox  checked={skorNyeriEditSelected.includes('Nyeri jantung Vas 1-6 (semi urgent)')} onChange={handleCheckboxEditSkorNyeriChange} name="skor_nyeri" label="Nyeri jantung Vas 1-6 (semi urgent)" value="Nyeri jantung Vas 1-6" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300   py-1 px-1 text-left'> <Checkbox  checked={skorNyeriEditSelected.includes('Tidak ada nyeri')} onChange={handleCheckboxEditSkorNyeriChange} name="skor_nyeri" label="Tidak ada nyeri" value="Tidak ada nyeri" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>
        <tr class="border border-black ">
            <td className='py-1 px-1 text-left'>ASSESMENT TRIASE</td>
            <td className='bg-red-500    py-1 px-1 text-left'> <Checkbox  checked={assesmentTriaseEditSelected.includes('Immediate/segera')} onChange={handleCheckboxEditAssesmentTriaseChange} name="assesment_triase" label="Immediate/segera" value="Immediate/segera" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-amber-600  py-1 px-1 text-left'> <Checkbox  checked={assesmentTriaseEditSelected.includes('Emergent/Gawat Darurat')} onChange={handleCheckboxEditAssesmentTriaseChange} name="assesment_triase" label="Emergent/Gawat Darurat" value="Emergent/Gawat Darurat" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-yellow-300 py-1 px-1 text-left'> <Checkbox  checked={assesmentTriaseEditSelected.includes('Urgent/mendesak')} onChange={handleCheckboxEditAssesmentTriaseChange} name="assesment_triase" label="Urgent/mendesak" value="Urgent/mendesak" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-green-500  py-1 px-1 text-left'> <Checkbox  checked={assesmentTriaseEditSelected.includes('Semi Urgent/semi mendesak')} onChange={handleCheckboxEditAssesmentTriaseChange} name="assesment_triase" label="Semi Urgent/semi mendesak" value="Semi Urgent/semi mendesak" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
            <td className='bg-blue-300   py-1 px-1 text-left'> <Checkbox  checked={assesmentTriaseEditSelected.includes('Non Urgent/tidak mendesak')} onChange={handleCheckboxEditAssesmentTriaseChange} name="assesment_triase" label="Non Urgent/tidak mendesak" value="Non Urgent/tidak mendesak" class="form-checkbox h-3 w-3 mr-1 text-emerald"  /></td>
        </tr>
        <tr class="border-b border-black">
            <td className='py-1 px-1 text-left'>PLAN</td>
            <td className='bg-red-500    py-1 px-1 text-left' colSpan="2"> 
              <input 
                        id="plan1"
                        name="plan"
                        type="radio"
                        checked={planEditSelected.plan === 'Zona Merah'}
                        class="form-radio h-3 w-3 mr-1 text-indigo-600" 
                        value="Zona Merah"
                        onChange={handleOptionPlanChange}
          
                    />
                <label for="plan">Zona Merah</label>
            </td>
            <td className='bg-yellow-300 py-1 px-1 text-left'> 
                          <input 
                        id="plan2"
                        name="plan"
                        type="radio"
                        checked={planEditSelected.plan === 'Zona Kuning'}
                        class="form-radio h-3 w-3 mr-1 text-indigo-600" 
                        value="Zona Kuning"
                        onChange={handleOptionPlanChange}
          
                    />
                <label for="plan">Zona Kuning</label>
            </td>
            <td className='bg-green-500  py-1 px-1 text-left' colSpan="2"> 
                <input 
                        id="plan3"
                        name="plan"
                        type="radio"
                        checked={planEditSelected.plan === 'Zona Hijau'}
                        class="form-radio h-3 w-3 mr-1 text-indigo-600" 
                        value="Zona Hijau"
                        onChange={handleOptionPlanChange}
          
                    />
                <label for="plan">Zona Hijau</label>
            </td>
        </tr>
        
        </tbody>
    </table>
    <div className='flex justify-end'>
        <button onClick="{handleTampilanEditAnamnesa}" className='py-0.2 mr-1 px-1 mt-2 bg-red-700 text-white hover:opacity-75' >BATAL</button>
        <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
    </div>
    
    </form>

</div>

}

  





    </div>

    </div>   
    
    </>
    )
}

export default Ats