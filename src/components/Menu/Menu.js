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
   const [SelectActive, setSelectActive]=useState();

   const AddActiveFunk=()=>{
      if(!AddActive && !SelectActive){
      setAddActive(<AddBook/>);
      setImageChange(cancel);
   }else{
      setAddActive();
      setImageChange(add);
   }
   }
   const SelectActiveFunk=()=>{
      if(!SelectActive && !AddActive){
      setSelectActive(<CelyFilter setKategapas={setKategapas}/>);
   }else{
      setSelectActive();
   }
   }

   return(
      <div>
      <div>
         {AddActive}
         {SelectActive}
      </div>
      <div className="downMenu">
      <img className="imageSelectButton" src={select} onClick={()=>{SelectActiveFunk()}}/>
      <img className="imageAddButton"src={ImageChange} onClick={()=>{AddActiveFunk()}} />
      </div>
      </div>
   )
}
export default Menu