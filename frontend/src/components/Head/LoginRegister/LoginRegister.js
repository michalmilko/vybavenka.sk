import { useState } from "react";
import "./LoginRegister.css";
import  cancelImage from "../../../images/cancel2.png";
import Login from "./Login/Login"
import Register from "./Register/Register"

const LoginRegister = ({setSwitchRegLog}) =>{

const changeToLog = () =>{
   setLogRegSwitch(<Register changeToLog={changeToReg}/>)
}

const changeToReg = () =>{
   setLogRegSwitch(<Login changeToReg={changeToLog}/>)
}

 const [LogRegSwitch, setLogRegSwitch]= useState(<Login changeToReg={changeToLog}/>);
   return(
      <div className="RegLogAll">
         <div className="RegLogForm">
            <div>
             {LogRegSwitch}
            </div>
            <div className="CancelRegLogImage" onClick={()=>{setSwitchRegLog("RegLogFalse")}}>
           <img className="CancelRegLogIcon" src={cancelImage} alt="Cancel" />
          </div>

         </div>
         
      </div>
   )
}
export default LoginRegister