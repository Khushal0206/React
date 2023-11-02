import { useContext } from "react"
import { ContaxtData } from "./globalContaxt"
export default function Child_home(){
    var {Age} = useContext(ContaxtData)
    return<>
        <h1>{Age}</h1>
    </>
}