import './App.css';
import Rekammedis from './pages/rekammedis/Rekammedis.js';
import Igd from './pages/igd/Igd.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Penangangan from './pages/igd/penangangan';


function App() {
  return (

   <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Rekammedis />}/>
        <Route path='/pasien' element={<Rekammedis />}/>
        <Route path='/igd' element={<Igd />}/>
        <Route path='/igd/pasien/tangani/:id' element={<Penangangan />}/>
      </Routes>
    </div>
   </BrowserRouter>

  );
}

export default App;
