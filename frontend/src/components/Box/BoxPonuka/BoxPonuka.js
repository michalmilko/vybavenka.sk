import "./BoxPonuka.css"
import BoxMenuPonuka from "./BoxPonukaMenuObsah/BoxMenuPonuka"
import BoxObsahPonuka from "./BoxPonukaMenuObsah/BoxObsahPonuka"

const BoxPonuka = (props) =>{
   return(
       <section className="boxPonuka" key={props.id}>  
       {/* Zobrazenie v Menu inzeratu Ponuku */}
         <div className="boxFull">
         <BoxMenuPonuka PresunProfil={props.PresunProfil}/>
         </div>
         {/* Zobrazit obsah inzeratu v Ponuke*/}
         <div className="boxPonukaSlider">
         <BoxObsahPonuka Dataa={props.Dataa} id={props.id} nazov={props.nazov} kategoria={props.kategoria} image={props.image} kvalita={props.kvalita} popis={props.popis}/>
         </div>

      </section>
)
}

export default BoxPonuka