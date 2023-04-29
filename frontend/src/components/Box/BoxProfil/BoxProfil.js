import "./BoxProfil.css"
import BoxMenuProfil from "./BoxProfilMenuObsah/BoxMenuProfil"
import BoxObsahProfil from "./BoxProfilMenuObsah/BoxObsahProfil"
import axios from 'axios';
import { useState } from "react";

const BoxProfil = (props) => {
   const [id, setId] = useState(props.id);
 
   const buttonDelete = async () => {
     try {
       console.log(id);
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
 
   return (
     <div className="boxProfil">
       {/* Zobrazenie v Menu inzeratu Profil */}
       <div className="boxMenuMenu">
         <BoxMenuProfil PresunPonuka={props.PresunPonuka} />
       </div>
       {/* Zobrazit kontakte udaje v Profile */}
       <div className="boxFullProfil">
         <BoxObsahProfil prezivkaUser={props.prezivkaUser} userEmail={props.userEmail} />
       </div>
       {/* Vymazanie inzeratu v Profile */}
       <div className="boxDeleteProfil">
         <button className="boxDeleteButton" onClick={buttonDelete}>Vymazať Inzerat</button>
       </div>
     </div>
   );
 };
 
 export default BoxProfil;
 