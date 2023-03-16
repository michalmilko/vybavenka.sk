import "./BoxPonuka.css"
import BoxMenuPonuka from "./BoxMenuPonuka"
import BoxSliderPonuka from "./BoxSliderPonuka"
import ButtonBuyPonuka from "./ButtonBuyPonuka"

const BoxPonuka = (props) =>{
   return(
       <section className="box" key={props.id}>  
         <div className="boxFull">
         <BoxMenuPonuka PresunProfil={props.PresunProfil}/>
         </div>
         <div className="boxSlider">
         <BoxSliderPonuka Dataa={props.Dataa} id={props.id} nazov={props.nazov} kategoria={props.kategoria} image={props.image} kvalita={props.kvalita} popis={props.popis}/>
         </div>

      </section>
)
}

export default BoxPonuka