import React, { useState } from 'react';
import "./AddBook.css";

const Add = ({setboolAddChange}) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [file, setFile] = useState(null);

  

  const handleSubmit  = async (event) => {
   
    const formData = new FormData();
    formData.append('Nazov', text1);
    formData.append('Kategoria', option1);
    formData.append('Kvalita', option2);
    formData.append('Cena', text2);
    formData.append('Image', file);
 
    // Odoslanie dát na server
    try {
      const response = await fetch('http://localhost:3005/data', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Data inserted successfully', data);
    } catch (error) {
      console.error(error);
    }
    event.preventDefault();
  }

  return (
    <div className='fixedCeleCancel'>
    <div className="addCelyObsah">
   
    <form onSubmit={handleSubmit}>
      
       <div>
      <h2 className="addNadpisCely">PRIDAJ KNIHU NA PREDAJ</h2>
      </div>
      <div className='addNadpisNazov'>
      <label>
      <h5>Nazov Knihy</h5>
        <input className="addNazov" placeholder="Nazov" type="text" required minLength={2} maxLength={25} value={text1}
       onChange={(event) => setText1(event.target.value)} />
  
      </label>
      </div>
      <div className='addKategoriaKvalita'>
      <label>
      <h5>Kategoria</h5>
        <select className="addKategoria" value={option1} required onChange={(event) => setOption1(event.target.value)}>
          <option value=""></option>
          <option value={"Školske"}>Školske</option>
         <option value={"Roman"}>Roman</option>
         <option value={"Komedia"}>Komedia</option>
         <option value={"Scifi"}>Scifi</option>
         <option value={"Rozpravka"}>Rozpravka</option>
        </select>
      </label>
      <label>
      <h5>Kvalita</h5>
        <select className="addKvalita" value={option2} required onChange={(event) => setOption2(event.target.value)}>
          <option value=""></option>
          <option value={"100%"} >100%</option>
         <option value={"80%"}>80%</option>
         <option value={"60%"}>60%</option>
         <option value={"50%"}>50%</option>
         <option value={"40%"}>40%</option>
         <option value={"20%"}>20%</option>
        </select>
      </label>
      </div>
      <div className='addFileUpload'>
      <label>
        <h5>Nahrať knihu</h5>
        <input className="addFile" type="file" required accept=".png, .jpg, .jpeg" onChange={(event) => setFile(event.target.files[0])} />
      </label>
      </div>
      <div className='addCenaPredaja'>
      <label>
      <h5>Cena predaja</h5>
        <input className="addCena"  type="number" min="0" required placeholder="Cena" value={text2} onChange={(event) => setText2(event.target.value)} />
      </label>
      </div>
      <div className='addButton'>
      <button className="addSubmit" type="submit">Pridat Knihu</button>
      </div>
    </form>
    </div>
    </div>
  );
  
}
export default Add;