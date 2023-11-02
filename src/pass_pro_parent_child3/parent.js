import { useState } from "react"
import Child from "./child"

export default function Parent(){
    const [count,setcount] = useState(0)
const increase =()=>{
    setcount(count+1)
}
    return<>
    <Child SandFun={increase} SandState={count}></Child>
        <h1>Parent</h1>

    </>
}