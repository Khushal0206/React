import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";

export default function Search_ele() {
    const [brands, SetBrand] = useState([]);
    const [search,setsearch] = useState([])
    // const fatch_data =()=>{
    //     axios("https://cb-ecommerce.onrender.com/api/brand/list").then(responce=>SetBrand(responce.data))
    //     .catch(err => console.log("error"))
    //console.log(D)
    //console.log(brands)

    //}

    useEffect((event) => {
        axios("https://cb-ecommerce.onrender.com/api/brand/list").then(responce=>SetBrand(responce.data))
        .catch(err => console.log("error"))
        console.log(brands)
    },[])
    const search_data =(event)=>{
        var D =brands.map(ele=>ele.brand_name)
        setsearch(D)
        console.log(D)
     
        //console.log(D)
        var Data= D.filter(ele=>ele.indexOf(event.target.value.toLowerCase())!==-1)
       // console.log(Data)
       setsearch(Data)
        console.log(brands)
    }

    return<>
      <button onClick={search_data}>click!</button> 
    <input type="text" placeholder="enter your brand" onChange={search_data} />
 <ul>
 {brands.map(ele=><li>{ele.brand_name}</li>)}
        {search.map(ele=><li>{ele}</li>)}

    </ul>
    
    </>
}    