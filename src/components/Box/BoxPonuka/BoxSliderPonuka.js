import "./BoxSliderPonuka.css"
import { useState } from "react";

const BoxSliderPonuka = (props) =>{
   const[changeZoomPhoto,setChangeZoomPhoto]=useState("ramPhoto");
   
   const zoomPhoto = () =>{
      if(changeZoomPhoto==="ramZoomPhoto"){
         setChangeZoomPhoto("ramPhoto");
      }else{
         setChangeZoomPhoto("ramZoomPhoto");
        }
     }
             return(
               <div className="boxSlider">
                  <div className="nadpisKnihy">
                      <h1>{props.nazov}</h1>
                  </div>
                  <div className={changeZoomPhoto}>
                      <img src={props.image} className="ramImage" onClick={()=>{zoomPhoto()}} alt="PhotoBook" />
                  </div>
                  <div className="kategoriaKvalita">
                     <p>Kategoria: {props.kategoria}</p>
                     <p>Kvalita Knihy: {props.kvalita}</p>
                  </div>
                     <p className="cenaSlider">Cena: {props.popis}{"€"}</p>
                  <button className="buttonBuy">Objednať</button>
               </div>
               )
             
}
export default BoxSliderPonuka