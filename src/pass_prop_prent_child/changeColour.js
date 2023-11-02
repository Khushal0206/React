import { useState } from "react"
import Child from "./Child_Change_C"
import "./Color.css"
export default function Colour(){
    const [clo,setclo] =useState(null)
    const getcolur=(data)=>{
        setclo(data)
    }
    return<>
        <h1>Hello</h1>
        <div className="div1" style={{background:`${clo}`}}>


        </div>
        <Child sand1={getcolur}></Child>
        
    </>
}