import { useEffect, useState } from "react";

export default function LocalS(){
    var to_do_box= undefined;
    const [data,changedata] = useState([])
    localStorage.setItem("Items" ,JSON.stringify(data))
    useEffect(()=>{
        var I = JSON.parse(localStorage.getItem("Items"))
        console.log(I)
        if(I){
            return changedata([...data,I])
    
        }else{
          return  []
        }

    },[])
    const datafun=()=>{
        var D = to_do_box.value;
       // console.log(D)
       changedata([...data,D])
        console.log(data)

    }

    return<>
        <input type="text" placeholder="enter your list" ref={c=>to_do_box=c}></input>
        <button onClick={datafun} className="btn btn-success">Save </button>
        {data.map(ele=> <ul>
           <li>{ele}</li> 
        </ul>)}
    </>
}