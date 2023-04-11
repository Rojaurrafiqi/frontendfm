import React, {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import editIcon from '../../../../images/edit2.png';
import humanImages from '../../../../images/human.jpg';



const Pemeriksaanfisik = () => {





  const {id} = useParams();
  const nilai = Number(id);

  const [pasienIgdTriasePemeriksaanFisik, setPasienIgdTriasePemeriksaanFisik] = useState([]);
  const [formSubmittedPemeriksaanFisik, setFormSubmittedPemeriksaanFisik] = useState(true);
  const [nilaiIdPasienIgd, setNilaiIdPasienIgd] = useState();
  const [isPemeriksaanFisik, setIsPemeriksaanFisik] = useState(true);
  const [isEditPemeriksaanFisik, setIsEditPemeriksaanFisik] = useState(false);
  const [idPemeriksaanFisikValue, setIdPemeriksaanFisikValue] = useState();  

  //fetch data tanda vital
  function fetchIgdTriasePemeriksaanFisik(id) {
      axios
      .get(`http://localhost:5000/igd/pasien/penanganan/triase/pemeriksaanfisik/${id}`)
       .then(response => {
      const data = response.data; 
      setPasienIgdTriasePemeriksaanFisik(data); 
      setNilaiIdPasienIgd(data[0].id_pasien_igd);
      setIdPemeriksaanFisikValue(data[0].id);

      })
      .catch((error) => {
        console.error(error);
      });
    }


    useEffect(() => {
  if (formSubmittedPemeriksaanFisik) {
    fetchIgdTriasePemeriksaanFisik(id);
    setFormSubmittedPemeriksaanFisik(false);

  }
}, [id, formSubmittedPemeriksaanFisik]);

function handleTampilanPemeriksaanFisik (event) {
  setIsPemeriksaanFisik(false);
  setIsEditPemeriksaanFisik(true);
  setFormSubmittedPemeriksaanFisik(false);

}

function handleTampilanEditPemeriksaanFisik (event) {
  setIsPemeriksaanFisik(true);
  setIsEditPemeriksaanFisik(false);
  setFormSubmittedPemeriksaanFisik(true);
}


function handleEditPemeriksaanFisikSubmit (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries())

  axios.patch(`http://localhost:5000/igd/pasien/penanganan/triase/pemeriksaanfisik/${idPemeriksaanFisikValue}`, {
     ...data,
    id_pasien_igd: nilai


  })
    .then(response => {
    setNilaiIdPasienIgd(response.data.id_pasien_igd);
    setIsPemeriksaanFisik(true);
    setFormSubmittedPemeriksaanFisik(true);
    setIsEditPemeriksaanFisik(false);
    
     // memperbarui data pada tampilan 
     axios.get(`http://localhost:5000/igd/pasien/penanganan/triase/pemeriksaanfisik/${id}`)
      .then(response => {
        setPasienIgdTriasePemeriksaanFisik(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  })
    .catch(error => {
      console.log(error);
    });
}



// // react canvas
// const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     // draw a rectangle
//     context.fillStyle = 'green';
//     context.fillRect(10, 10, 100, 100);

//     // add event listeners
//     canvas.addEventListener('click', handleClick);
//     canvas.addEventListener('mousemove', handleMouseMove);

//     // cleanup function to remove event listeners
//     return () => {
//       canvas.removeEventListener('click', handleClick);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   function handleClick(event) {
//     // handle click event
//   }

//   function handleMouseMove(event) {
//     // handle mouse move event
//   }
  

 const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawing = useRef(false);

 useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    const image = new Image();
    image.src = humanImages; // Ganti dengan path ke gambar yang ingin digunakan sebagai background
    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height); // Menggambar gambar sebagai background pada canvas
    };
  }, []);

  const startDrawing = (e) => {
    isDrawing.current = true;
    const ctx = ctxRef.current;
    const { offsetX, offsetY } = e.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    const ctx = ctxRef.current;
    const { offsetX, offsetY } = e.nativeEvent;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };



  return (
    <>
    <div className='text-left px-1 bg-emerald300 font-semibold'>
        Pemeriksaan Fisik Pasien
    </div>

    <div className='container border border-state-300  bg-white p-2 text-left'>

    <canvas
      ref={canvasRef}
      width={400}
      height={300}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
    
    >
      Canvas tidak didukung
    </canvas>

{isPemeriksaanFisik &&
    <div className='container'>
        {formSubmittedPemeriksaanFisik  || nilai === nilaiIdPasienIgd  ? 

        (

        <div className='container'>
            <div className='relative'>
                     <button onClick={handleTampilanPemeriksaanFisik}  className='absolute top-0 right-0 hover:opacity-75'><img src={editIcon} width="30px" /></button>
            </div>
             {Array.isArray(pasienIgdTriasePemeriksaanFisik)  && pasienIgdTriasePemeriksaanFisik.map((data, index) => (
                 <div key={index}>
                    <div className='flex'>
                        <div className='container'>
                            <tr>
                                <td>Mata</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.mata}</td>
                            </tr>
                            <tr>
                                <td>Telinga</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.telinga}</td>
                            </tr>
                            <tr>
                                <td>Hidung</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.hidung}</td>
                            </tr>
                            <tr>
                                <td>Mulut</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.mulut}</td>
                            </tr>
                            <tr>
                                <td>Tenggorokan</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.tenggorokan}</td>
                            </tr>
                            <tr>
                                <td>Leher</td>
                                <td className='px-2'>:</td>
                                <td  className='pr-7'>{data.leher}</td>
                            </tr>
                        </div>        
                        <div className='container'>
                            <tr>
                                <td>Paru</td>
                                <td className='px-2'>:</td>
                                <td className='pr-7'>{data.paru}</td>
                            </tr>
                            <tr>
                                <td>Jantung</td>
                                <td className='px-2'>:</td>
                                <td className='pr-7'>{data.jantung}</td>
                            </tr>
                            <tr>
                                <td>Abdomen</td>
                                <td className='px-2'>:</td>
                                <td className='pr-7'>{data.abdomen}</td>
                            </tr>
                            <tr>
                                <td>Kandungan</td>
                                <td className='px-2'>:</td>
                                <td className='pr-7'>{data.kandungan}</td>
                            </tr>
                            <tr>
                                <td>Kemaluan</td>
                                <td className='px-2'>:</td>
                                <td className='pr-7'>{data.kemaluan}</td>
                            </tr>
                            <tr>
                                <td>Exstremitas</td>
                                <td className='px-2'>:</td>
                                <td className='pr-7'>{data.exstremitas}</td>
                            </tr>
                        </div>      
                    </div>  
                </div>
            
            ))}
        </div>

        )
        :
        (

        <div className='flex'>
            <div className='container'>
                form
            </div>
            <div className='container'>
                form
            </div>
        </div>

        )
        }
        </div>
}

{isEditPemeriksaanFisik &&

<form onSubmit={handleEditPemeriksaanFisikSubmit}>
<div className='container overflow-x-hidden'>
<div className='flex'>
    <div className='container'>
        <tr>
            <td className='pr-4'>Mata</td>
            <td className='pb-1'>
                <input type="text" name="mata" defaultValue={pasienIgdTriasePemeriksaanFisik[0].mata}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
        <tr>
            <td className='pr-4'>Telinga</td>
            <td className='pb-1'>
                <input type="text" name="telinga" defaultValue={pasienIgdTriasePemeriksaanFisik[0].telinga}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
        <tr>
            <td className='pr-4'>Hidung</td>
            <td className='pb-1'>
                <input type="text" name="hidung" defaultValue={pasienIgdTriasePemeriksaanFisik[0].hidung}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
        <tr>
            <td className='pr-4'>Mulut</td>
            <td className='pb-1'>
                <input type="text" name="mulut" defaultValue={pasienIgdTriasePemeriksaanFisik[0].mulut}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
        <tr>
            <td className='pr-4'>Tenggorokan</td>
            <td className='pb-1'>
                <input type="text" name="tenggorokan" defaultValue={pasienIgdTriasePemeriksaanFisik[0].tenggorokan}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
        <tr>
            <td className='pr-4'>Leher</td>
            <td className='pb-1'>
                <input type="text" name="leher" defaultValue={pasienIgdTriasePemeriksaanFisik[0].leher}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
    </div>
    <div className='container max-w-sm'>
        <tr>
            <td className='pr-4'>Paru</td>
            <td className='pb-1'>
                <input type="text" name="paru" defaultValue={pasienIgdTriasePemeriksaanFisik[0].paru}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
        <tr>
            <td className='pr-4'>Jantung</td>
            <td className='pb-1'>
                <input type="text" name="jantung" defaultValue={pasienIgdTriasePemeriksaanFisik[0].jantung}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
        <tr>
            <td className='pr-4'>Abdomen</td>
            <td className='pb-1'>
                <input type="text" name="abdomen" defaultValue={pasienIgdTriasePemeriksaanFisik[0].abdomen}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
        <tr>
            <td className='pr-4'>Kandungan</td>
            <td className='pb-1'>
                <input type="text" name="kandungan" defaultValue={pasienIgdTriasePemeriksaanFisik[0].kandungan}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
        <tr>
            <td className='pr-4'>Kemaluan</td>
            <td className='pb-1'>
                <input type="text" name="kemaluan" defaultValue={pasienIgdTriasePemeriksaanFisik[0].kemaluan}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
        <tr>
            <td className='pr-4'>Exstremitas</td>
            <td className='pb-1'>
                <input type="text" name="exstremitas" defaultValue={pasienIgdTriasePemeriksaanFisik[0].exstremitas}  className='border border-black w-full px-1 mr-40' />
            </td>             
        </tr>
    </div>  
</div>
    <div className='flex justify-end pb-2'>
        <button onClick={handleTampilanEditPemeriksaanFisik} className='py-0.2 px-1 mt-2 mr-1  bg-red-700 text-white hover:opacity-75'>BATAL</button>
        <button className='py-0.2 px-1 mt-2 bg-emerald text-white hover:opacity-75' type='submit'>SIMPAN</button>
    </div>    
</div>
</form>


}

{/* <canvas ref={canvasRef} width={300} height={300}></canvas> */}


    </div>
    
    
    </>
  )
}

export default Pemeriksaanfisik