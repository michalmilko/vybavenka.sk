import "./BoxMenuProfil.css"

const BoxMenuProfil = (props) =>{
   return(
      // Menu v profile nastavenie na Profil
         <div className="boxMenu">
         <p href="" className="boxPonukaProfil" onClick={props.PresunPonuka}>Pounka</p>
         <p href="" className="boxProfilProfil">Profil</p>
      </div>
      
   )
}
export default BoxMenuProfil