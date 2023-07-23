//simple useEffect usage to call web api
import { useEffect, useState } from "react";

import './Paapu.css';
function Biswajit() {
  const [data,setData]=useState([])
  useEffect(() => {
   const url= "https://restcountries.com/v2/all";
     fetch(url).then((res) => res.json())
      .then(res => setData(res))
  }, [])
  return (
    <>
    <br/><br/>
   <div className="container-fluid">
    <h1 className="text-center">Country's Detail's</h1>
    <table className="table" >
      <tr>
        <th style={{width:"30px"}}>Sl No</th>
        <th style={{width:"30px"}}>Country Name</th>
        <th style={{width:"30px"}}>Capital</th>
        <th style={{width:"20px"}}>AltSpellings</th>
        <th style={{width:"30px"}}>Population</th>
        <th>latlng</th>
        <th>SubRegion</th>
        <th>Region</th>
        <th>Demonym</th>
        <th>Area</th>
        <th>NumericCode</th>
        <th>CallingCodes</th>
        <th style={{width:"30px"}}>Timezones</th>
        
        <th>Independent</th>
        <th style={{width:"30px"}}>Borders</th>
        <th style={{width:"30px"}}>Native Name</th>
        <th>Flag</th>
      </tr>
      
     {data.map((e,index)=>
     (
      <tr>
      <td style={{width:"30px", textAlign:"center"}}>{index+1}</td>
      <td style={{width:"30px"}}>{e.name}</td>
      <td style={{width:"30px"}}>{e.capital}</td>
      <td style={{width:"20px"}}>{e.altSpellings}</td>
      <td style={{width:"30px"}}>{e.population}</td>
      <td>{e.latlng}</td>
      <td>{e.subregion}</td>
      <td>{e.region}</td>
      <td>{e.demonym}</td>
      <td>{e.area}</td>
      <td>{e.numericCode}</td>
      <td>{e.callingCodes}</td>
      <td >{e.timezones.slice()}</td>
      
      
      <td>{e.independent}</td>
      <td style={{width:"30px"}}>{e.borders}</td>
      <td style={{width:"30px"}}>{e.nativeName}</td>
      <td><img src={e.flag} style={{height:"50px",width:"100px"}} /></td>
      </tr>
      )
     )
     }
    
    </table>
    </div>
   </>
  );
}
export default Biswajit;
  