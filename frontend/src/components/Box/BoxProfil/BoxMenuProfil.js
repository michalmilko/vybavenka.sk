import "./BoxMenuProfil.css"

const BoxMenuProfil = (props) =>{
   return(
         <div className="boxMenu">
         <p href="" className="boxPonukaProfil" onClick={props.PresunPonuka}>Pounka</p>
         <p href="" className="boxProfilProfil">Profil</p>
      </div>
      
   )
}
export default BoxMenuProfil