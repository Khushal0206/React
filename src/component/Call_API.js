import axios from "axios" 
import { useEffect, useState } from "react";
export default function  (){
    const [user,setuser] = useState()
    console.log(user)
    useEffect(()=>{
        const get_Url=()=>{
            axios.get("http://localhost:3001/userdata").then(res=>setuser(res.data)
            ).catch(err=>
                console.log("error is occured"))
            ;
    
        }
         get_Url()
    
    },[])
     
    return<>
        <h1>Call_API</h1>


    </>
}