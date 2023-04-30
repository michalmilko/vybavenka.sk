import "./BoxObsahProfil.css"

const BoxObsahProfil = (props) =>{
   return(
      // Obsah kontaktu v Profile
      <section>
      <div className="boxObsahProfil">
      <h4 className="nadpisDeleteHeslo">Meno</h4>
         <p>{props.prezivkaUser}</p>
      </div>
      <div className="boxObsahProfil">
      <h4 className="nadpisDeleteHeslo">E-mail</h4>
         <p>{props.userEmail}</p>
      </div>
      </section> 
   )
}
export default BoxObsahProfil