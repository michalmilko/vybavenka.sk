import "./DeleteBox.css"
import axios from 'axios';
import { useState } from "react";

const DeleteBox = (props) =>{
   //useState ukladanie hodnot.. id, heslo z id a input heslo
  const [id, setId] = useState(props.id); 
  const [dataPass, setDataPass] = useState("");
  const [inputPassword, setinputPassword]= useState("");
  //Zistenie podla api endpoint heslo podla id
    fetch("https://endpoint.vybavenka.sk/api/users")
    .then(zistit=>zistit.json())
    .then(data=>data.filter(potvrdenie=>potvrdenie.id===props.id))
    .then(dataa=>console.log(setDataPass(dataa[0].deletePassword)));


    //Funkcia na spustenie mazania inzeratu.. a kontrola.. hesla
   const buttonDelete = async (event) => {
    event.preventDefault();
    //Zistovanie hesla
    if(dataPass===inputPassword){
      //Polsanie poziadavky na server s mazanim inzeratu
     try {
       await axios.delete(`https://endpoint.vybavenka.sk/api/users/${id}`, {
             data: {
               id: id
                 }
            });
       setId();
       window.location.reload();
     } catch (error) {
       console.log(error);
     }
   };
  }
   return(
      <div>
         <form onSubmit={buttonDelete}>     
         <div className="boxProfilDeleteFull">
           <h4 className="nadpisDeleteHeslo">Vymazat inzerat</h4>
       <div className="divdeleteInput">      
        <input className="deleteInput" type="password" placeholder="Vaše Heslo"  onChange={(event) => setinputPassword(event.target.value)}/>
        </div>
       {/* Vymazanie inzeratu v Profile */}
       <div className="boxDeleteProfil">
         <button className="boxDeleteButton" type="submit">Vymazať</button>
       </div>
     </div>
     </form>
      </div>
   )
}
export default DeleteBox