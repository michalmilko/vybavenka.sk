import "./CelyFilter.css"

const CelyFilter = ({setKategapas}) => {
 
  //z kategorie zistenie filter
   const zistenieKategorie=(event)=>{
      setKategapas(event.target.value);
     
     
   }
   return(
      <div className="showOn">
         <h2 className="SelectNadpisCely">VYHLADAJ SVOJ KNIHU</h2>
       <div className="celyFilterBox">
         <select className="kategoria"  onChange={zistenieKategorie}>
         <option value={"Vsetko"} >Všetko</option>
         <option value={"Školske"}>Školske</option>
         <option value={"Roman"}>Roman</option>
         <option value={"Komedia"}>Komedia</option>
         <option value={"Scifi"}>Scifi</option>
         <option value={"Rozpravka"}>Rozpravka</option>
         </select>
         </div>
      </div>
   )
}
export default CelyFilter