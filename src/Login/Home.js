import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home(){
   var navigate = useNavigate()
    useEffect(()=>{
        console.log("useeffe")
        if(!localStorage.getItem("token")){
            console.log("haa aaya")
            navigate("/")
        }
    },[])
    return<>
       <h1>Home</h1> 
    </>
}