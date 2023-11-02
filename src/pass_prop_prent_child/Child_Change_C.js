import "./Color.css"
import { useState } from "react"

export default function Child(props){
    const [setcolour, changesetcolour] = useState(null)

    const changecolour=(event)=>{
        var D =  event.target.value
        changesetcolour(D)
        props.sand1(D)
 
     }
    return<>
<div className="div2" >
            <input type="text" placeholder="enter your colour"  onChange={changecolour}></input>
        </div>    </>
}