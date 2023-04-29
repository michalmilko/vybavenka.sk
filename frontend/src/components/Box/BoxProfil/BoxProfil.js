import "./BoxProfil.css"
import BoxMenuProfil from "./BoxProfilMenuObsah/BoxMenuProfil"
import BoxObsahProfil from "./BoxProfilMenuObsah/BoxObsahProfil"

const BoxProfil = (props) =>{

   
   return(
      <div className="boxProfil">
         {/* Zobrazenie v Menu inzeratu Profil */}
         <div className="boxMenuMenu">
         <BoxMenuProfil PresunPonuka={props.PresunPonuka}/>
         </div>
         {/* Zobrazit kontakte udaje v Profile */}
         <div className="boxFullProfil">
         <BoxObsahProfil prezivkaUser={props.prezivkaUser} userEmail={props.userEmail}/>
         </div>
         {/* Vymazanie inzeratu v Profile */}
         <div className="boxDeleteProfil">
         <button className="boxDeleteButton">Vymazať Inzerat</button>
         </div>
      </div>
   )
}
export default BoxProfil