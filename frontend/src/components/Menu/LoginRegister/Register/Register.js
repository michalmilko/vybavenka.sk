import "./Register.css"
import RegisterInput from "./RegisterInput"
const Register = (props) =>{
   return(
      <div className="RegisterWindowAll">
      <div className="RegisterWindow">
         <p href="" className="RegisterLogin" onClick={()=>{props.changeToLog()}}>Prihlásenie</p>
         <p href="" className="RegisterRegister">Registrácia</p>
      </div>
      <RegisterInput/>
      </div>
   )
}
export default Register