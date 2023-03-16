import "./BoxProfil.css"
import BoxMenuProfil from "../BoxProfil/BoxMenuProfil"
import BoxPhotoProfil from "./BoxPhotoProfil"

const BoxProfil = (props) =>{
   return(
      <div className="box">
         <div className="boxFull">
         <BoxMenuProfil PresunPonuka={props.PresunPonuka}/>
         <BoxPhotoProfil prezivkaUser={props.prezivkaUser}/>
         </div>
      </div>
   )
}
export default BoxProfil