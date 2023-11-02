import Child from "./Input_child_show";
import "./style.css"
export default function ShowName(){
    const recivedName=(data)=>{
        console.log(data)
    }
    return<>
        <h1>Enter names: </h1>
        <Child sand={recivedName}></Child>
    </>
}