import { useState } from "react";

export default function Form(){
    const [obj,setobj] = useState({})
    const show=(event)=>{
        // var name = event.target.name;
        // var value = event.target.value;
        //OR
      var {name,value} = event.target
        var data = ({[name]:value})
        setobj({...obj,...data})

    }
    const sumbit_data =(event)=>{
        event.preventDefault();
        console.log(obj)
    }
    return<>
    <form onSubmit={sumbit_data}>        
    <input type="text" placeholder="enter your name" name="name"  onChange={show}>

        </input>
        <input type="text" placeholder="enter your age" name="age"  onChange={show}></input>
        <button type="submit">Submit</button>
        </form>

    

    </>
}