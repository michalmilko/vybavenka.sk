import "./Menu.css"
import Add from "./Add"
import CelyFilter from "./CelyFilter"
import imageAdd from "../../images/add.png"
import imageCancel from "../../images/cancel.png"
import { useState} from "react"
import { debounce } from "lodash"



const Menu = (props) => {
const[celyFilter, setcelyFilter]=useState(<CelyFilter setKategapas={props.setKategapas}/>);
const[addChangeBool, setaddChangeBool]=useState(true);
const[zmenaIcon, setzmenaIcon]=useState(imageAdd);


const SwitchAdd = debounce(() => {
    if(addChangeBool){
         setcelyFilter(<Add/>)
         setaddChangeBool(false);
         setzmenaIcon(imageCancel);
   }else{
      setcelyFilter(<CelyFilter setKategapas={props.setKategapas}/>)
      setaddChangeBool(true);
      setzmenaIcon(imageAdd);
   }

},100);
   let zmenacss;
   if(addChangeBool){
      zmenacss="menuPridatKnihu";
   }else{
      zmenacss="menuPridatKnihuvypnut"
   }

   return(
      <div className="addMenu">
         
         {celyFilter}
         <div className="addMenuImage">
         <img className="addMenuButton" src={zmenaIcon} alt=""  onClick={()=>{
         SwitchAdd();
      }} />
        
         <h2 className={zmenacss}>Pridať knihu</h2>
         
         </div>
      </div>
   )
}
export default Menu