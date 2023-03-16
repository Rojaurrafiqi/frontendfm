import React, {useState, useEffect} from 'react'
// import { useState } from 'react';

const Contohwilayah = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  // bikin state untuk menyimpan data
  const [pekerjaan, setPekerjaan] = useState([]);
  const [selectedPekerjaan, setSelectedPekerjaan] = useState('');

  // fetch data menggunakan useEffect
    useEffect(() => {
    fetch('http://localhost:5000/pekerjaan')
      .then(response => response.json())
      .then(data => setPekerjaan(data))
  }, []);

  // handle setiap ada perubahan value
    const handleChange = (event) => {
    setSelectedPekerjaan(event.target.value);
  };

  const options = {
  Aceh: [
    { value: 'option1-1', label: 'Kab Aceh Besar' },
    { value: 'option1-2', label: 'Kab Pidie' },
    { value: 'option1-3', label: 'Kab Meulaboh' }
  ],
  Bali: [
    { value: 'option2-1', label: 'Option 2 - 1' },
    { value: 'option2-2', label: 'Option 2 - 2' },
    { value: 'option2-3', label: 'Option 2 - 3' }
  ],
  Kecamatan: [
    { value: 'option3-1', label: 'Option 3 - 1' },
    { value: 'option3-2', label: 'Option 3 - 2' },
    { value: 'option3-3', label: 'Option 3 - 3' }
  ]
};

function handleOption1Change(selectedOption1) {
  setSelectedOption1(selectedOption1);
  setSelectedOption2('');
}

function handleOption2Change(selectedOption2) {
  setSelectedOption2(selectedOption2);
}

  
  return (
    <>
<select value={selectedOption1} onChange={(e) => handleOption1Change(e.target.value)}>
  <option value="">Select Option 1</option>
  {Object.keys(options).map((key) => (
    <option key={key} value={key}>
      {key}
    </option>
  ))}
</select>
<br/>
<br/>
<br/>
<select
  value={selectedOption2}
  onChange={(e) => handleOption2Change(e.target.value)}
  disabled={!selectedOption1}
>
  <option value="">Select Option 2</option>
  {options[selectedOption1] &&
    options[selectedOption1].map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
</select>

<br/>
<br/>
<br/>

 <h1>Dropdown Example</h1>
      <select value={selectedPekerjaan} onChange={handleChange}>
        <option value="">Select an option</option>
        {pekerjaan.map(option => (
          <option key={option.id} value={option.id}>{option.nama_pekerjaan}</option>
        ))}
      </select>
      <p>You have selected: {selectedPekerjaan}</p>


<br/>
<br/>
<br/>

    </>
  )
}

export default Contohwilayah