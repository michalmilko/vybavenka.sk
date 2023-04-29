import "./BoxObsahPonuka.css"
import Categoria from "../../../../images/select.png"
import Kvalita from "../../../../images/kvalita.png"
import Euro from "../../../../images/euro.png"

const BoxSliderPonuka = (props) =>{
  
             return(
                  // Zobrazeny inzerat
            <div className="boxObsahPonuka">
                  {/* Nadpis inzratu */}
                  <div className="nadpisKnihy">
                         <h1>{props.nazov}</h1>
                  </div>
                  {/* Fotka inzeratu */}
                  <div className="ramPhoto">
                        <img src={props.image} className="ramImage"  alt="PhotoBook" />
                  </div>
                  {/* Kategoria a Kvalita inzeratu */}
                  <div className="kategoriaKvalita">
                    {/* Kategoria inzeratu*/}
                  <div className="imgKategoria">
                        <img className="categoriaKvalitaSlider" src={Categoria} alt="" />
                        <p className="textKategoriaKvalita">  {props.kategoria}</p>
                  </div>
                    {/* Kvalita inzeratu */}
                  <div className="imgKvalita">
                        <img className="categoriaKvalitaSlider" src={Kvalita} alt="" />
                        <p className="textKategoriaKvalita">{props.kvalita}</p>
                  </div>
                  </div>
                  {/* Cena inzeratu */}
                  <div className="cenaTextImage">                   
                        <p className="cenaSlider">Cena: {props.popis}</p>
                        <img className="cenaImage" src={Euro} alt="" />
                  </div>
            </div>

               )
             
}
export default BoxSliderPonuka