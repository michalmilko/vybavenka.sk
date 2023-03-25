import "./MenuAddBook.css"
import AddBook from "../Menu/AddBook/AddBook"
import {  useState, useEffect } from "react"
import CancelAdd from "../Menu/AddBook/CancelAddBook"

const MenuAddBook = () =>{
   
   const[addChange, setaddChange]=useState(<CancelAdd/>);
   const[boolAddChange, setboolAddChange]=useState(true);
   useEffect(()=>{
   if(boolAddChange){
        setaddChange(<CancelAdd setboolAddChange={setboolAddChange}/>);
      
  }else{
   setaddChange(<AddBook setboolAddChange={setboolAddChange}/>);

      }
   },[boolAddChange])

   return(
      <div className="skuska">
   
        {addChange}
      
      </div>
   )
}
export default MenuAddBook