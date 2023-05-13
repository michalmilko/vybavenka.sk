import "./Menu.css"
import AddBook from "./AddBook/AddBook"
import CelyFilter from "./SelectKategoria/CelyFilter"
import { useState} from "react"
import select from "../../images/select.png"
import add from "../../images/add.png"
import cancel from "../../images/cancel.png"
import LoginIcon from "../../images/LoginIcon.gif"

const Menu = ({setLoadingicon, setKategapas, setHeadLoginIcon}) => {

   const [AddActive, setAddActive]=useState();
   const [ImageChange, setImageChange]=useState(add);
   const [ImageChangeKategoria, setImageChangeKategoria]=useState(select);
   const [SelectActive, setSelectActive]=useState();
   const [changer, setChange]=useState("showOff");
  

   const AddActiveFunk=()=>{
      //Zobrazenie Add stranky
      if(!AddActive && changer==="showOff"){
      setAddActive(<AddBook setLoadingicon={setLoadingicon}/>);
      setImageChange(cancel);
      //Vypnutie Add stranky
   }else{
      setAddActive();
      setImageChange(add);
   }
   }

   const SelectActiveFunk=()=>{
     //Zobrazenie kategorie stranky
     if(!AddActive){
      setSelectActive( <CelyFilter setKategapas={setKategapas}/>);
      //Zobrazenie a vypnutie v css select kategorie
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
            {/* Dole ikony menu */}
            <div className="downMenu">
               <img className="imageSelectButton" src={ImageChangeKategoria} alt="selectFoto" onClick={()=>{SelectActiveFunk()}}/>
               <img className="imageAddButton"src={ImageChange} alt="addFoto"onClick={()=>{AddActiveFunk()}} />
            {/* Ikona Prihlasenia/Registracii v Menu */}
            <div className="MenuLogin" onClick={()=>{setHeadLoginIcon(true)}}>
               <img className="MenuLoginIcon" src={LoginIcon} alt="Login/Register"  />
            </div>
           </div>
      </div>
   )
}
export default Menu  