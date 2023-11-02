import { useState } from "react";
import "./style.css"
export default function Child(props){
    const [N , setname ] = useState(null);

    // function name(e){
    //     var D = e.target.value;
    //      setname(D)
    // }

    function getName(e){
        e.preventDefault();
        props.sand(N)
        
    }
    return<>
    <div className="D">
    <form onSubmit={getName}>
    <input type="text" placeholder="enter your name" onChange={(e)=>{setname(e.target.value)}}></input>
    <button>sumbit</button>
</form>
    </div>
    </>
}