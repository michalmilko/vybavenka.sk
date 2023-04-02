import "./BoxSliderPonuka.css"
import { useState } from "react";
import Categoria from "../../../images/select.png"
import Kvalita from "../../../images/kvalita.png"
import Euro from "../../../images/euro.png"

const BoxSliderPonuka = (props) =>{

   
  
             return(
            <div className="boxSlider">
                  <div className="nadpisKnihy">
                         <h1>{props.nazov}</h1>
                  </div>
                  <div className="ramPhoto">
                        <img src={props.image} className="ramImage"  alt="PhotoBook" />
                  </div>
                  <div className="kategoriaKvalita">
                  <div className="imgKategoria">
                        <img className="categoriaKvalitaSlider" src={Categoria} alt="" />
                        <p className="textKategoriaKvalita">  {props.kategoria}</p>
                  </div>
                  <div className="imgKvalita">
                        <img className="categoriaKvalitaSlider" src={Kvalita} alt="" />
                        <p className="textKategoriaKvalita">{props.kvalita}</p>
                  </div>
                  </div>
                  <div className="cenaTextImage">                   
                        <p className="cenaSlider">Cena: {props.popis}</p>
                        <img className="cenaImage" src={Euro} alt="" />
                  </div>
            </div>

               )
             
}
export default BoxSliderPonuka