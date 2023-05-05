import React, { useState } from 'react';
import axios from 'axios';
import "./AddBook.css";
import Loading from "../../Loading"

const Add = ({setLoadingicon}) => {
  //UKLADANIE DAT Z INPUT
  const [MenoPriezvisko, setMenoPriezvisko] = useState('');
  const [Nazov, setNazov] = useState('');
  const [Kategoria, setKategoria] = useState('');
  const [Kvalita, setKvalita] = useState('');
  const [Image, setFile] = useState(null);
  const [Popis, setPopis] = useState('');
  const [Email, setEmail] = useState ('');
  const [deletePassword, setPassword]= useState ("");

  const handleSubmit = async (event) => {
   
   event.preventDefault();
 
  //VYTVORENIE OBJEKTU DAT
  const formData = new FormData();
formData.append('MenoPriezvisko', MenoPriezvisko);
formData.append('Nazov', Nazov);
formData.append('Image', Image);
formData.append('Kategoria', Kategoria);
formData.append('Kvalita', Kvalita);
formData.append('Popis', Popis);
formData.append('Email', Email);
formData.append('deletePassword', deletePassword);


//Poislanie data z formulara cez api do DB
axios.post('https://endpoint.vybavenka.sk/api/users', formData)
  .then((res)  => { 
    // Poslat
    console.log(res.data);
    // Reload stranku
    window.location.reload();
  })
    //Vypis chybu keby neposlal
  .catch((err) => console.log(err));
 };

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
       onChange={(event) => setNazov(event.target.value)} />
      </label>
      </div>
      <div className='addKategoriaKvalita'>
      <label>
      <h5>Kategoria</h5>
        <select className="addKategoria" value={Kategoria} required onChange={(event) => setKategoria(event.target.value)}>
          <option value=""></option>
          <option value={"Školske"}>Školske</option>
         <option value={"Román"}>Román</option>
         <option value={"Komedia"}>Komedia</option>
         <option value={"Sci fi"}>Sci fi</option>
         <option value={"Rozpravka"}>Rozpravka</option>
        </select>
      </label>
      
      <label>
      <h5>Kvalita</h5>
        <select className="addKvalita" value={Kvalita} required onChange={(event) => setKvalita(event.target.value)}>
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
      {/* Nahrat foto */}

      <div className='addFileUpload'>
      <label>
        <h5>Nahrať knihu</h5>
        <input className="addFile" type="file" required accept=".png, .jpg, .jpeg" onChange={(event) => setFile(event.target.files[0])} />
      </label>
      </div>
      <div className='addCenaPredaja'>
      <label>
      <h5>Cena predaja</h5>
        <input className="addCena"  type="number" min="0" required placeholder="Cena" value={Popis} onChange={(event) => setPopis(event.target.value)} />
      </label>
      </div>
        {/* Kontaktne udaje */}
      <div className="menoPasswordEmail">
      <h5>Kontaktne udaje</h5>
        {/* Meno */}
      <input className="menoPriezvisko" type="text" placeholder="Meno" required minLength={2} maxLength={25} value={MenoPriezvisko}
       onChange={(event) => setMenoPriezvisko(event.target.value)} />
        {/* Email */}
       <input className="Email" placeholder="E-mail" type="email" required minLength={2} maxLength={35} value={Email}
       onChange={(event) => setEmail(event.target.value)} />
        {/* Add heslo na zamzanie inzeratu */}
       <div className='deletePassword'>
       <h5>Heslo na zmazanie inzeratu</h5>
       <input className="Password" placeholder="Heslo" type="password" required minLength={5} maxLength={25} value={deletePassword}
       onChange={(event) => setPassword(event.target.value)} />
       </div>
      </div>
         {/* Button na poslanie inzeratu */}
      <div className='addButton'>
      <button className="addSubmit" onClick={()=>{setLoadingicon(<Loading/>)}} type="submit">Pridat Knihu</button>
      </div>
    </form>
    </div>
    </div>
  );

}
export default Add;