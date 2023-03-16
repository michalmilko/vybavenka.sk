import "./BoxSliderPonuka.css"
import image1 from "../../../images/image1.png"
import image2 from "../../../images/image2.png"
import image3 from "../../../images/image3.png"
import image4 from "../../../images/image4.png"
import image5 from "../../../images/image5.png"
import image6 from "../../../images/image6.png"



const BoxSliderPonuka = (props) =>{
             return(
               <div className="boxSlider">
                  <h1>{props.nazov}</h1>
                  <img src={props.image} alt="" />
                  <img src="image3" alt="" />
                  {console.log(image4)}
                  <div className="kategoriaKvalita">
                  <p>{"Kategoria:"} {props.kategoria}</p>
                  <p>{"Kvalita Knihy:"} {props.kvalita}</p>
                  </div>
                  <button className="buttonBuy">Objednať</button>
               </div>
               )
             
}
export default BoxSliderPonuka