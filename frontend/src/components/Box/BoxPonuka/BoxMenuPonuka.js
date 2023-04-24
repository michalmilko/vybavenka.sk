import "./BoxMenuPonuka.css"

const BoxMenuPonuka = (props) =>{
   return(
       <div className="boxMenu">
         <p href="" className="boxPonukaPonuka">Pounka</p>
         <p href="" className="boxProfilPonuka" onClick={props.PresunProfil}>Profil</p>
      </div>
   
   )
}
export default BoxMenuPonuka