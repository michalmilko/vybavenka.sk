import "./Head.css"
import LoginIcon from "../../images/LoginIcon.gif"

const Head = ({setSearch, setHeadLoginIcon}) =>{

   return(
      <div className="Head">
      {/* Logo a reload po kliknuti na neho */}
       <h1 className="NadpisLogo" onClick={()=>{window.location.reload()}}>V Y B A V E N K A</h1>
      {/* Vyhladavanie inzeratu */}
        <input className="HeadSearch" placeholder="Hladať.."  type="search" onChange={(event) => setSearch(event.target.value)}/>
      {/* Ikona Prihlasenia/Registracii v Menu */}
      <div className="HeadLogin" onClick={()=>{setHeadLoginIcon(true)}}>
         <img className="HeadLoginIcon" src={LoginIcon} alt="Login/Register"  />
      </div>
      </div>
   )
}
export default Head