import "./BoxSliderPonuka.css"


const BoxSliderPonuka = (props) =>{
             return(
               <div className="boxSlider">
                  <div className="nadpisKnihy">
                  <h1>{props.nazov}</h1>
                  </div>
                  <div className="ramPhoto">
                  <img src={props.image} alt="" />
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