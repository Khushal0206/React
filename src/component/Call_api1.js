import axios from "axios"
import { useState } from "react";
export default function Call_api1(){
 const[name,changename] = useState(" ");
    const Call =()=>{

        axios.get("https://cb-ecommerce.onrender.com/api/brand/list").then(responce=>changename(responce.data))
        .catch(err=>console.log("Error"))
    }
    console.log(name)
    
    return<>
        <h1>hello</h1>
        
        {name.map(ele=><ul>
            <li>{ele.brand_name}</li>
            
        </ul>
        )}
        <button onClick={Call}>Click !</button>
    </>
}