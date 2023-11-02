import { useEffect } from "react"
import { Helper } from "./helper_function"
export default function UserName(){
useEffect(async()=>{
   var data = await  Helper()

   console.log(data)
})
    
    return<>
        <h2>Username</h2>
        {/* {username.slice(1,7).map((ele,index)=><ul key={index}>
            <li >{ele.name}</li>
        </ul>)} */}
    </>
}