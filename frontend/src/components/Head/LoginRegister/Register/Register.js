import "./Register.css"

const Register = (props) =>{
   return(
      <div className="RegisterWindow">
         <p href="" className="RegisterLogin" onClick={()=>{props.changeToLog()}}>Prihlasenie</p>
         <p href="" className="RegisterRegister">Registracia</p>
      </div>
   )
}
export default Register