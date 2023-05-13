import "./RegisterInput.css"
import { useState } from "react"

const RegisterInput = () =>{
   const [MenoRegister, setMenoRegister] = useState();
   const [EmailRegister, setEmailRegister] = useState();
   const [PasswordRegister, setPasswordRegister] = useState();
   const [ZnovaPasswordRegister, setZnovaPasswordRegister] = useState();
   return(
      <div className="AllRegisterInput">
           <div>
         {/* Meno pri registracii */}
         <h2 className="RegisterName">Užívateľské meno</h2>
       <input className="RegisterUzivatel" placeholder="Meno" type="text" required minLength={2} maxLength={35} value={MenoRegister}
       onChange={(event) => setMenoRegister(event.target.value)} />
         </div>
         <div>
         {/* Email pri registracii */}
         <h2 className="RegisterName">Váš email</h2>
       <input className="RegisterEmail" placeholder="E-mail" type="email" required minLength={2} maxLength={35} value={EmailRegister}
       onChange={(event) => setEmailRegister(event.target.value)} />
         </div>
      
         <div>
        {/* Heslo pri registracii */}
        <h2 className="RegisterName">Zadajte váše heslo</h2>
       <input className="RegisterPassword" placeholder="Heslo" type="password" required minLength={5} maxLength={25} value={PasswordRegister}
       onChange={(event) => setPasswordRegister(event.target.value)} />
    
     
        {/* Zopakuj heslo pri registracii */}
       <input className="RegisterPassword" placeholder="Zopakujte Heslo" type="password" required minLength={5} maxLength={25} value={ZnovaPasswordRegister}
       onChange={(event) => setZnovaPasswordRegister(event.target.value)} />
      </div>
      <div className="RegistraciaProfil">
         <button className="RegistraciaProfilButton">Registracia</button>
      </div>
      </div>
   )
}
export default RegisterInput