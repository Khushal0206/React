import {useState} from "react"
import { Link, Route, Routes } from "react-router-dom";
import Show from "./Show";
export default function Practice1(){
    const [Name,changeName] = useState();

    var NameBox = undefined
    const SaveName=()=>{
        var YourName = NameBox.value;
        changeName(YourName)

    }
    return<>
       <input type="text" placeholder="enter your name" ref={c=>NameBox=c}/> &nbsp;&nbsp;
      <Link  to="/name"> <button className="alert-success" onClick={SaveName}  >Save</button></Link>
      
      <Routes>
      <Route path="/name" element={<Show sand={Name}/>}></Route>
        </Routes>
    </>
}