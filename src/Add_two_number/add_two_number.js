import { useState } from "react";

export default function Calculation() {
    var sum=0;
    
    const [number, changenumber] = useState(sum)
   
    var number1box = undefined;
    var number2box = undefined;
    const cal=()=>{
        var num1 =parseInt(number1box.value);
         var num2 = parseInt(number2box.value);
    
        changenumber(sum = num1+num2) 
       
    }
   
        
   const clear=()=>{
        changenumber(" ")
       
    }

    return <>
    
        <div className="container border bg-primary my-5" style={{ width: "30vw", height: "40vh" }}>
            <h3 className="text-center">add two number </h3>
            <div>
                <label>First Number: </label>
                <input type="text" placeholder="enter your number" className="form-control" ref={c=>number1box=c} ></input>


            </div>
            <div>
                <label>seconde Number: </label>
                <input type="text" placeholder="enter your number" className="form-control" ref={c=>number2box=c} ></input>
            </div>
            <div>
            <label>sum : </label>
            <input type="text" placeholder=" your sum is.... " className="form-control" value={number}></input>

            </div>
            <div className="my-5 d-flex justify-content-between">
            <button className="btn btn-success" onClick={cal}>Sum</button>
            <button className="btn btn-danger" onClick={clear}>clear</button>

            </div>
            <div>

            </div>
        </div>
    
    </>
}