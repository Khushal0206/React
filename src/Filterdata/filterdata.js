import { useEffect, useState } from "react";

export default function Filterdata() {
    var searchbox = undefined;
    const [result, changedata] = useState([]);
    useEffect(() => {

        console.log("hello")
       fetch("https://cb-ecommerce.onrender.com/api/product/list").then((Response)=>Response.json())
       .then((data)=>changedata(data))
    }, [])
    useEffect(()=>{
        console.log(result)

    },[])
    const filterpro = () => {
        var searchitem = searchbox.value;
        
        var D = result.filter((ele) => {
            return ele.prod_name.includes(searchitem)
            
        })
        changedata(D)
        console.log(result)
    }
    return <>
        <h1>filterdata</h1>
        <div>
            <input type="text" placeholder="enter your data" ref={c => searchbox = c} ></input>
            <button className="btn btn-success" onClick={filterpro}>Filterdata</button>
        </div>
    </>
}