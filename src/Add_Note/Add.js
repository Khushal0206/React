import { useState } from "react"
import "./style1.css"
export default function Add() {
    const [text, changetext] = useState(false)
    const [savetext, changesavetext] = useState([])
    const createText = () => {
        changetext(true)
    }
    const Delete = () => {
        changetext(false)
    }
    var textbox = undefined;

    const save = () => {
        
        const ob={
            
         T : textbox.value
        }
        changesavetext([...savetext , ob])
        

                 


    }
console.log(savetext)
return <>
    <div className="nav11">
        <div>
            <h3>Keep Note</h3>
        </div>
    </div>
    <div className="btn111 ">
        <button onClick={createText} >Add Note</button>
    </div>
    {text ? <div className="text_div">
        <div>

            <textarea className="text1" ref={c => textbox = c} name={"content"}></textarea>
        </div>
        <div>
            <button className="btn btn-success" onClick={save} >Save</button>
            <button className="btn btn-danger" onClick={Delete}>Delete</button>
        </div>
    </div> : ""}
   {savetext.map(ele=>
    <div className="sav">
        <b>{ele.T}</b>
    </div>
   )} 
</>
}