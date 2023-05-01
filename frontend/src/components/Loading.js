import "./Loading.css"
import loadingicon from "../images/loading.gif"

const Loading = () =>{
   return(
      <div className="loadingAll">
            <img className="logoV" src={loadingicon} alt="" />
            <p className="logoNacitavam">Načitavam</p>
      </div>
   )
}
export default Loading