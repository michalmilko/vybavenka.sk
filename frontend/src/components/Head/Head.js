import "./Head.css"

const Head = ({setSearch}) =>{

   return(
      <div className="Head">
      {/* Logo a reload po kliknuti na neho */}
      <h1 className="NadpisLogo" onClick={()=>{window.location.reload()}}>V Y B A V E N K A</h1>
      {/* Vyhladavanie inzeratu */}
      <input className="HeadSearch" placeholder="Hladať" type="search" onChange={(event) => setSearch(event.target.value)}/>
      </div>
   )
}
export default Head