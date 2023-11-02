import { useState } from "react"
import "./style.css"
export default function Text() {
    const [text, changetext] = useState("");

    const textvaule = (event) => {
        var T = event.target.value;
        changetext(T)

    }
    console.log(text)
    const upper = () => {
        var U = text.toLocaleUpperCase()
        changetext(U)
    }
    const lower = () => {
        var L = text.toLocaleLowerCase();
        changetext(L)
    }
    const clear = () => {
        changetext(" ")
    }

    const [mode, changemode] = useState({
        backgroundColor:"white"
    })
    const toggle=()=>{
        if(mode.backgroundColor=="dark"){
            changemode({
                backgroundColor:"light"
            })
            document.body.style.backgroundColor="white"
        }else{
            changemode({
                backgroundColor:"dark"
            })
            document.body.style.backgroundColor="rgb(7, 7, 79)"
        }
    }

    return <>
        <div className="navbar">
            <div className="nav">
                <h2>Text_Analyz</h2>
            </div>
            <div className={`custom-control custom-switch `} >
                <input type="checkbox" className="custom-control-input" id="customSwitches" />
                <label className="custom-control-label" for="customSwitches" onClick={toggle}>enable dark mode</label>
            </div>
        </div>

        <div style={{ border:mode.backgroundColor=="dark"?"white":"black"}}>
            <textarea className="area" onChange={textvaule} placeholder="enter your text here" value={text}
             style={{backgroundColor:mode.backgroundColor=="dark"?"rgb(7, 7, 79)":"white",
            color:mode.backgroundColor=="dark"?"white":"black"}}></textarea>

        </div>
        <div className="btn">
            <button onClick={upper}>Uppercase</button>
            <button onClick={lower}>Lowercase</button>
            <button onClick={clear}>Clear</button>
            <b style={{color:mode.backgroundColor=="dark"?"white":"black"}}>{text.length}/300</b>

        </div>
        <div>

            <b style={{color:mode.backgroundColor=="dark"?"white":"black"}}>Total word: {text.split(" ").length - 1}</b>
        </div>
    </>
}