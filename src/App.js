import "../src/App.css"
import FullApp from "./components/FullApp"
import CelyFilter from "./components/Menu/CelyFilter"
import { useState, useEffect } from "react"
import Menu from "./components/Menu/Menu"



const App = () =>{
  const[katega,setKategapas]=useState("Vsetko");
  const [data, setData] = useState([]);
  let dataa;
  
  useEffect(() => {
    fetch('http://localhost:3005/data')
    .then(response=>response.json())
    .then(dataaa=>setData(dataaa))
  }, []);

  if(katega==="Vsetko"){
   dataa  = data.filter(posun=>posun.Kategoria);
  }else{
   dataa = data.filter(posun=>posun.Kategoria===katega);
  }
  
  const FUnk=()=>  dataa.map((sup)=>{   
    const{id,MenoPriezvisko,Nazov,Image,Kategoria,Kvalita,Popis}=sup;
      return(
        <div key={id} className="appCele">
          <FullApp Data={data}
          id={id}
          prezivkaUser={MenoPriezvisko}
          nazov={Nazov}
          image={Image}
          kategoria={Kategoria}
          kvalita={Kvalita}
          popis={Popis}
          />
        </div>
      )})

      return(
        <div>  
          <Menu setKategapas={setKategapas}/>
          {FUnk()}
        </div>

      )
}
export default App