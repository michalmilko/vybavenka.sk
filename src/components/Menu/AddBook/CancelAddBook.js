import "./CancelAddBook.css"
import imageAdd from "../../../images/add.png"

const CancelAdd = ({setboolAddChange}) =>{
   
   const ChangeAdd=()=>{
      setboolAddChange(false);
   }

   return(
      <div className="fixedCeleAdd" onClick={()=>{ChangeAdd()}}>
         <img className="imageAdd" src={imageAdd} alt="" />
      </div>
   )
}
export default CancelAdd;