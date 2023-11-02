import { useEffect } from "react"

export default function Array_Function(){
    var fun;
    const Array_fun=[
         fun = (a,b)=>{
            return a+b

        },
        fun = (a,b)=>{
            return a-b

        },
         fun = (a,b)=>{
            return a*b

        }, 
        fun = (a,b)=>{
            return a/b

        } 
    ]
    const mainFun =()=>{
       var data= Array_fun.map((ele)=>{
             return ele(2,3)
            
            })
            console.log(data)
    }
    useEffect(()=>{
        mainFun();
    })
return<>
    <h1>Function</h1>
</>
}