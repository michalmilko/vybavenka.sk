import "./Login.css"

const Login = (props) =>{
   return(
      <div className="LoginWindow">
         <p href="" className="LoginLogin">Prihlasenie</p>
         <p href="" className="LoginRegister" onClick={()=>{props.changeToReg()}}>Registracia</p>
      </div>
   )
}
export default Login