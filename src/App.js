import "./App.css";
import FullApp from "./components/FullApp";
import { useState, useEffect } from "react";
import Menu from "./components/Menu/Menu";

const App = (props) =>{
 
  //useState - nacitanie aka kategoria je vybrata
  const[katega,setKategapas]=useState("Vsetko");
 
  const [data, setData] = useState([]);
  let dataa;

  
 useEffect(() => {
    fetch("http://localhost:3005/data")
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
          image={'http://localhost:3005/images/'+Image}
          kategoria={Kategoria}
          kvalita={Kvalita}
          popis={Popis}
          />
        </div>
      )})

      return(
        <div> 
          <div className="me">
          <Menu setKategapas={setKategapas}/>
          </div>
          <div className="fi">
          
          {FUnk()}
          </div>
        </div>

      )
}
export default App