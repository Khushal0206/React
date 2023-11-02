import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default function Search(){
    const [Data,setdata] = useState([])
    var searchbox = useRef();
    useEffect(async()=>{
        var D = await axios.get("http://apps.codebetter.in:8082/emall/api/brand/list")
        // console.log(D.data)
        setdata(D.data)
    },[])
    console.log(Data)

    const filter_Item=(event)=>{
        var D1 = event.target.value;
        console.log(D1)
        //var D1 = searchbox.current.value; 
        var I = Data.filter(ele=>{
            return(ele.brand_name.includes(D1))
        })
        setdata(I)
    }
    
    return<>
        <h1>Search</h1>
        <input type="search" placeholder="enter you item.." ref={searchbox} onChange={filter_Item}></input>
        <button>Search</button>
        {Data.map(ele=><ul>
            <li>{ele.brand_name}</li>
        </ul>)}
    </>
}









// const filter_Item =()=>{
//     var item = searchbox.current.value
//     console.log(item)

//          var I = Data.filter(ele=>{
//             return ele.brand_name.includes(item)
//          })
//          console.log(I)
//          setdata(I)
// }