import { useState } from "react";
import Home from "./Home";
import Home1 from "./Home1";
import { ContaxtData } from "./globalContaxt";


export default function Show2(){
    const[name,setname] = useState("khushal")
    var Age=23;
    return<>
        <h1>Context_Api</h1>
        <ContaxtData.Provider value={{name,setname,Age}}>
        <Home ></Home>
        <Home1></Home1>
        </ContaxtData.Provider>
    </>

}