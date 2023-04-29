import "./Box.css"
import BoxPonuka from "./BoxPonuka/BoxPonuka"
import BoxProfil from "./BoxProfil/BoxProfil"
import { useState } from "react"

const Box = (props) =>{

   //Zobrazenie Ponuky
  const PreklikPonuka=()=>{
      setCheckPonuka(<BoxPonuka PresunProfil={PreklikProfil} Dataa={props.Data} id={props.id} nazov={props.nazov} kategoria={props.kategoria} image={props.image} kvalita={props.kvalita} popis={props.popis}/>)
   }
   //Zobrazenie Profilu
   const PreklikProfil=()=>{
      setCheckPonuka(<BoxProfil PresunPonuka={PreklikPonuka} id={props.id} prezivkaUser={props.prezivkaUser} userEmail={props.userEmail}/>)
   }
   //Prednastavene zobrazenie Ponuky
   const[checkPonuka,setCheckPonuka]=useState(<BoxPonuka PresunProfil={PreklikProfil} Dataa={props.Data} id={props.id} prezivkaUser={props.prezivkaUser} nazov={props.nazov} kategoria={props.kategoria} image={props.image} kvalita={props.kvalita} popis={props.popis}/>);

    return(
      <div className="FullApp">
         {checkPonuka}
       </div>
   )
}
export default Box