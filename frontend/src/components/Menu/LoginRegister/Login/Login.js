import "./Login.css"
import LoginInput from "./LoginInput"

const Login = (props) =>{
   return(
      <div className="LoginWindowAll">
         <div className="LoginWindow">         
         <p href="" className="LoginLogin">Prihlasenie</p>
         <p href="" className="LoginRegister" onClick={()=>{props.changeToReg()}}>Registracia</p>
      </div>
      <LoginInput/>
      </div>
   )
}
export default Login