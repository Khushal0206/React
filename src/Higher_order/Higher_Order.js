import { useEffect, useState } from "react"

export default function Higher(titel,Component,request){
    
    return function Higher_function(){
        const [username,setname] = useState([])
        useEffect(()=>{
            const user = ()=>{
                var D =  fetch(`https://jsonplaceholder.typicode.com/${request}`)
                .then(Response=>Response.json()
                .then(data=>setname(data)))
            }
            user()
        },[])
        return<>
        <h1>{titel}</h1>
        <Component username={username}/>
        </>
    }
    
}