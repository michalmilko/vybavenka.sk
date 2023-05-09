import "./LoginRegistracia.css";
import  cancelImage from "../../../images/cancel2.png"

const LoginRegistracia = ({setSwitchRegLog}) =>{
   return(
      <div className="RegLogAll">
         <div className="RegLogForm">
            <div>
             <h1>Register/Login</h1>
            </div>
            <div className="CancelRegLogImage" onClick={()=>{setSwitchRegLog("RegLogFalse")}}>
           <img src={cancelImage} alt="Cancel" />
          </div>

         </div>
         
      </div>
   )
}
export default LoginRegistracia