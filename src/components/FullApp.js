import "./FullApp.css"
import BoxPonuka from "./Box/BoxPonuka/BoxPonuka"
import BoxProfil from "./Box/BoxProfil/BoxProfil"
import { useState } from "react"

const FullApp = (props) =>{


  const PreklikPonuka=()=>{
      setCheckPonuka(<BoxPonuka PresunProfil={PreklikProfil} Dataa={props.Data} id={props.id} nazov={props.nazov} kategoria={props.kategoria} image={props.image} kvalita={props.kvalita} popis={props.popis}/>)
   }
   const PreklikProfil=()=>{
      setCheckPonuka(<BoxProfil PresunPonuka={PreklikPonuka} prezivkaUser={props.prezivkaUser} />)
   }
   const[checkPonuka,setCheckPonuka]=useState(<BoxPonuka PresunProfil={PreklikProfil} Dataa={props.Data} id={props.id} prezivkaUser={props.prezivkaUser} nazov={props.nazov} kategoria={props.kategoria} image={props.image} kvalita={props.kvalita} popis={props.popis}/>);

    return(
      <div className="FullApp">
         {checkPonuka}
        
       </div>
   )
}
export default FullApp