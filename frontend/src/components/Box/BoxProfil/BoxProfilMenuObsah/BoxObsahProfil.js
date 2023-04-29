import "./BoxObsahProfil.css"

const BoxObsahProfil = (props) =>{
   return(
      // Obsah kontaktu v Profile
      <section>
      <div className="boxObsahProfil">
         <p>{props.prezivkaUser}</p>
      </div>
      <div className="boxObsahProfil">
         <p>{props.userEmail}</p>
      </div>
      </section> 
   )
}
export default BoxObsahProfil