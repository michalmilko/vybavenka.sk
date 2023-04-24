import "./BoxPhotoProfil.css"

const BoxPhotoProfil = (props) =>{
   return(
      <section>
      <div className="BoxPhoto">
         <p>{props.prezivkaUser}</p>
      </div>
      <div className="BoxPhoto">
         <p>{props.userEmail}</p>
      </div>
      </section> 
   )
}
export default BoxPhotoProfil