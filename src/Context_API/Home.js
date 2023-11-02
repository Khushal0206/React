import Child_home from "./Child_Home1";
import { useContext } from "react";
import { ContaxtData } from "./globalContaxt";
export default function Home(){
    var {name} = useContext(ContaxtData)
    return<>
    
        <h1> my name is {name}</h1>
        <Child_home/>
    </>
}