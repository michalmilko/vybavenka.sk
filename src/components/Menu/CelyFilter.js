import "./CelyFilter.css"

const CelyFilter = ({setKategapas}) => {
  
   const zistenieKategorie=(event)=>{
      
      setKategapas(event.target.value);
   }
   return(
      <div className="celyFilterBox-Fix">
       <div className="celyFilterBox">
          
         <select className="kategoria" defaultValue="Všetko" onChange={zistenieKategorie}>
         <option value={"Vsetko"} >Všetko</option>
         <option value={"Školske"}>Školske</option>
         <option value={"Roman"}>Roman</option>
         <option value={"Komedia"}>Komedia</option>
         <option value={"Scifi"}>Scifi</option>
         <option value={"Rozpravka"}>Rozpravka</option>
         </select>
         
         <input className="hladajBox" placeholder="Hladaj"/>

         
         </div>
      </div>
   )
}
export default CelyFilter