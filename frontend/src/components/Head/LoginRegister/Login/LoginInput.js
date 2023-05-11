import "./LoginInput.css"
import { useState } from "react"

const LoginInput = () =>{

   const [EmailLogin, setEmailLogin] = useState();
   const [PasswordLogin, setPasswordLogin] = useState();

   return(
      <div className="LoginEmailPassword">
         <div>
         {/* Email */}
         <h2 className="LoginName">Zadajte váš e-mail</h2>
       <input className="LoginEmail" placeholder="E-mail" type="email" required minLength={2} maxLength={35} value={EmailLogin}
       onChange={(event) => setEmailLogin(event.target.value)} />
         </div>
         <div>
        {/* Add heslo na zamzanie inzeratu */}
        <h2 className="LoginName">Zadajte váše heslo</h2>
       <input className="LoginPassword" placeholder="Heslo" type="password" required minLength={5} maxLength={25} value={PasswordLogin}
       onChange={(event) => setPasswordLogin(event.target.value)} />
      </div>
      <div className="ResetPassword">
         <h4>Zabudli ste vaše heslo?</h4>
         <button className="ResetPasswordButton">Resetnuť heslo</button>
      </div>
      </div>
   )
}
export default LoginInput