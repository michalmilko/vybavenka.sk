import "./App.css";
import Inzerat from "./components/Inzerat";
import { useState, useEffect } from "react";
import Menu from "./components/Menu/Menu";
import Head from "./components/Head"

const App = () =>{
  let dataa;
  //useState - search
  const [textSearch, setSearch]=useState();
  //useState - nacitanie aka kategoria je vybrata
  const[katega,setKategapas]=useState("Vsetko");
  const [data, setData] = useState([]);
  //Nacitanie z mysql kategoriu pre filter
 useEffect(() => {
    fetch("http://localhost:3005/data")
    .then(response=>response.json())
    .then(dataaa=>setData(dataaa))
  }, []);
  
  //Porovnanie kategoria.. v Menu
  if(katega==="Vsetko"){
   dataa  = data.filter(posun=>posun.Kategoria);
  }else{
   dataa = data.filter(posun=>posun.Kategoria===katega);
  //  console.log(dataa);
  }


  //Filter kategoria
  const FUnk=()=>  dataa.map((sup)=>{   
    const{id,MenoPriezvisko,Nazov,Image,Kategoria,Kvalita,Popis}=sup;
      return(
        <div key={id} className="appCele">
          <Inzerat Data={data}
          id={id}
          prezivkaUser={MenoPriezvisko}
          nazov={Nazov}
          image={'http://localhost:3005/images/'+Image}
          kategoria={Kategoria}
          kvalita={Kvalita}
          popis={Popis}
          />
        </div>
      )}).reverse();
//Zobrazenie na stranke
      return(
        <div className="CelyHead"> 
          <Head setSearch={setSearch}/>
          <div className={"CeleBody"}>
          {FUnk()}
          </div>
          <Menu setKategapas={setKategapas}/>
        </div>
      )
}
export default App