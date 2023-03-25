import "./Menu.css"
import CelyFilter from "./CelyFilter"
import { useState} from "react"


const Menu = ({setKategapas}) => {
const[celyFilter, setcelyFilter]=useState(<CelyFilter setKategapas={setKategapas}/>);

   return(
      <div className="addMenus">
         {celyFilter}
      </div>
   )
}
export default Menu