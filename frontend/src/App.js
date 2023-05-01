import "./App.css";
import Box from "./components/Box/Box";
import { useState, useEffect } from "react";
import Menu from "./components/Menu/Menu";
import Head from "./components/Head/Head";
import Loading from "./components/Loading";

const App = () =>{

  let dataa;
  let dataaa;

  //useState - search
  const [textSearch, setSearch] = useState("");
  //useState - nacitanie aka kategoria je vybrata
  const [katega,setKategapas] = useState("Vsetko");
  const [data, setData] = useState([]);
  //Nacitovanie spustenie
  const [loadingicon, setLoadingicon] = useState(<Loading/>);
 


  //Nacitanie z mysql kategoriu pre filter
 useEffect(() => {  
    fetch("https://www.endpoint.vybavenka.sk/api/users")
    .then(response=>response.json())
    .then(dataaa=>setData(dataaa))
    setLoadingicon();
  }, []);
  
  //Porovnanie kategorie v Menu ak su vsetky kategorie zapnute
  if(katega==="Vsetko"){
   dataa  = data.filter(posun=>posun.Kategoria);
  //Search v head
   dataaa = dataa.filter(posunn=>posunn.Nazov.toUpperCase().includes(textSearch.toUpperCase()));
 
   //Porovnanie kategorie v Menu ak su selektovane kategorie
  }else{
   dataa = data.filter(posun=>posun.Kategoria===katega);
   //Search v head a selektovane kategorie
   dataaa = dataa.filter(posunn=>posunn.Nazov.toUpperCase().includes(textSearch.toUpperCase()));
  }

  //Zobrazenie obsahu z API
  const Obsah=()=>  dataaa.map((sup)=>{   
    const{id,MenoPriezvisko,Nazov,Image,Kategoria,Kvalita,Popis, Email}=sup;
      return(
        <div key={id} className="appCele">
          <Box Data={data}
          id={id}
          prezivkaUser={MenoPriezvisko}
          nazov={Nazov}
          image={'https://endpoint.vybavenka.sk/images/'+Image}
          kategoria={Kategoria}
          kvalita={Kvalita}
          popis={Popis}
          userEmail={Email}
          />
          
       </div>
       
    //Zoradovat obsah opacne
      )}).reverse();
    
    //Zobrazenie na stranke
      return(
  
        <div className="Loadingg">

        <div className="CelyHead"> 
          <Head setSearch={setSearch}/>
            </div>

          <div className={"CeleBody"}>
          {Obsah()}
          </div>
          <Menu setKategapas={setKategapas}/>
          
          {loadingicon}
        </div>
      )
}
export default App