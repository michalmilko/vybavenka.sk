import "./Menu.css"
import AddBook from "./AddBook/AddBook"
import CelyFilter from "./SelectKategoria/CelyFilter"
import { useState} from "react"
import select from "../../images/select.png"
import add from "../../images/add.png"
import cancel from "../../images/cancel.png"

const Menu = ({setKategapas}) => {
   const [AddActive, setAddActive]=useState();
   const [ImageChange, setImageChange]=useState(add);
   const [ImageChangeKategoria, setImageChangeKategoria]=useState(select)
   const [SelectActive, setSelectActive]=useState();
   const [changer, setChange]=useState("showOff");

   const AddActiveFunk=()=>{
     
      if(!AddActive && changer==="showOff"){
      setAddActive(<AddBook/>);
      setImageChange(cancel);
   }else{
      setAddActive();
      setImageChange(add);
   }
   }
   const SelectActiveFunk=()=>{
     //zobrazenie Cely Filter kategorie
     if(!AddActive){
      setSelectActive( <CelyFilter setKategapas={setKategapas}/>);
      //zobrazenie a vypnutie v css select kategorie
      if(changer==="showOn"){
         setChange("showOff");
         setImageChangeKategoria(select);
      }else{
         setChange("showOn");
         setImageChangeKategoria(cancel);
         
      }
   }
   }
   
   return(
      <div>
      <div>
         {AddActive}
           <div className={changer}> 
           {SelectActive}
           </div>

      </div>
      <div className="downMenu">
      <img className="imageSelectButton" src={ImageChangeKategoria} alt="selectFoto" onClick={()=>{SelectActiveFunk()}}/>
      <img className="imageAddButton"src={ImageChange} alt="addFoto"onClick={()=>{AddActiveFunk()}} />
      </div>
      </div>
   )
}
export default Menu