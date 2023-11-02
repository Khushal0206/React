import { useEffect, useState } from "react"

export default function Data(){
    const [Data1,setdata]= useState([])
    useEffect(()=>{
        fetch("http://apps.codebetter.in:8082/emall/api/brand/list").then(Response=>Response.json()
        .then(data=>setdata(data)))
        console.log(Data1)
    },[])
    
    return<>
        <h1>Data</h1>
        {Data1.map(ele=><ul>
        <li> {ele.brand_name}</li>
           
            </ul>
        )}
    </>
}