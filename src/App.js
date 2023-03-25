import "./App.css";
import FullApp from "./components/FullApp";
import { useState, useEffect } from "react";
import Menu from "./components/Menu/Menu";
import MenuAddBook from "./components/Menu/MenuAddBook"

const App = () =>{
  
  let dataa;
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
  }


  //Filter kategoria
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
//Zobrazenie na stranke
      return(
        <div className="skusi"> 
          <div className="me">
          <Menu setKategapas={setKategapas}/>
          </div>
          <div className={"menu1"}>
          {FUnk()}
          </div>
          <MenuAddBook/>
        </div>
      )
}
export default App