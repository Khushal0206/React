import{useState} from "react"
export default function Increase_Dec(){
    const [count,changecount] = useState(25000);
    const increase = ()=>{
        changecount(count+1000)
    }
    const decrease =()=>{
        if(count>0){
            changecount(count-1000 );

        }

        
        

        }
    return<>
    <div className="row">
    <div className="col-lg-8 col-md-8">
        <h1 className="alert-primary ">Increase and Decrease count</h1>
</div>
<div className="col-lg-4 col-md-8">
        <b className="text-danger"> Total Amount:{count}</b>
        </div>
    </div>
    <div className="col-md-12">
        <button className="btn btn-success text-center" onClick={decrease}>-</button>&nbsp;&nbsp;
        <button className="btn btn-success text-center" onClick={increase}>+</button>

    </div>

    </>
}