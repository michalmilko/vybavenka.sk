import "./Head.css"
import { useState } from "react"

const Head = ({setSearch}) =>{


   return(
      <div className="Head">
      <h1 className="NadpisLogo">V Y B A V E N K A</h1>
      <input className="HeadSearch" placeholder="Hladať" type="search" onChange={(event) => setSearch(event.target.value)}/>
      </div>
   )
}
export default Head