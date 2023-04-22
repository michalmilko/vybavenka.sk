import React, { useState } from 'react';
import axios from 'axios';
import "./AddBook.css";

const Add = () => {
  const [Nazov, setText1] = useState('');
  const [Image, setFile] = useState(null);
  const [Kategoria, setOption1] = useState('');
  const [Kvalita, setOption2] = useState('');
  const [Popis, setText2] = useState('');

  const handleSubmit = async (event) => {
   event.preventDefault();

  const formData = new FormData();
formData.append('Nazov', Nazov);
formData.append('Image', Image);
formData.append('Kategoria', Kategoria);
formData.append('Kvalita', Kvalita);
formData.append('Popis', Popis);

axios.post('https://endpoint.vybavenka.sk/api/users', formData)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));


 };

 const Restartusestate = () =>{
  setText1('');
  setFile(null);
  setOption1('');
  setOption2('');
  setText2('');
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
        <input className="addNazov" placeholder="Nazov" type="text" required minLength={2} maxLength={25} value={Nazov}
       onChange={(event) => setText1(event.target.value)} />
  
      </label>
      </div>
      <div className='addKategoriaKvalita'>
      <label>
      <h5>Kategoria</h5>
        <select className="addKategoria" value={Kategoria} required onChange={(event) => setOption1(event.target.value)}>
          <option value=""></option>
          <option value={"Školske"}>Školske</option>
         <option value={"Roman"}>Roman</option>
         <option value={"Komedia"}>Komedia</option>
         <option value={"Sci fi"}>Sci fi</option>
         <option value={"Rozpravka"}>Rozpravka</option>
        </select>
      </label>
      <label>
      <h5>Kvalita</h5>
        <select className="addKvalita" value={Kvalita} required onChange={(event) => setOption2(event.target.value)}>
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
        <input className="addCena"  type="number" min="0" required placeholder="Cena" value={Popis} onChange={(event) => setText2(event.target.value)} />
      </label>
      </div>
      <div className='addButton'>
      <button className="addSubmit" onClick={()=>{Restartusestate()}} type="submit">Pridat Knihu</button>
      </div>
    </form>
    </div>
    </div>
  );
  
}
export default Add;