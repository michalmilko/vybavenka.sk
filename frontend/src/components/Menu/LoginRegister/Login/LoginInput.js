import "./LoginInput.css"
import { useState } from "react"

const LoginInput = () =>{

   const [EmailLogin, setEmailLogin] = useState();
   const [PasswordLogin, setPasswordLogin] = useState();

   return(
      <div className="LoginEmailPassword">
         <div>
         {/* Email pri prihlaseni */}
         <h2 className="LoginName">Zadajte e-mail</h2>
       <input className="LoginEmail" placeholder="E-mail" type="email" required minLength={2} maxLength={35} value={EmailLogin}
       onChange={(event) => setEmailLogin(event.target.value)} />
         </div>
         <div>
        {/* Heslo pri prihlaseni */}
        <h2 className="LoginName">Zadajte heslo</h2>
       <input className="LoginPassword" placeholder="Heslo" type="password" required minLength={5} maxLength={25} value={PasswordLogin}
       onChange={(event) => setPasswordLogin(event.target.value)} />
      </div>
      {/* Button na resetnutie hesla */}
      <div className="ResetPassword">
         <h4>Zabudli ste heslo?</h4>
         <button className="ResetPasswordButton">Resetnuť heslo</button>
      </div>
      {/* Button na prihlasenie */}
      <div className="LoginProfil">
         <button className="LoginProfilButton">Prihlásiť sa</button>
      </div>
      </div>
   )
}
export default LoginInput