import { useEffect, useState } from "react"

export default function Stopwatch1(){
    const [hours,changehours] = useState(0)
    const [min,changemin] = useState(0)
    const [second,changesecond] = useState(0)
    const [stop,setstop] = useState(false)
    const Start=()=>{
        setstop(true)
    }
    const Stop=()=>{
        setstop(false)

    }
    useEffect(()=>{
        var Intervar;
        if(stop==true){
           Intervar = setInterval(()=>{
                    if(min>59){
                        changehours(hours+1);
                        changemin(0)
                        clearInterval(Intervar)

                    }
                    if(second>59){
                        changemin(min+1);
                        changesecond(0)
                        clearInterval(Intervar)

                    }
                    if(second<60){
                        changesecond(second+1)
                        clearInterval(Intervar)

                    }
                    
            },1000)

        }
        else{
            clearInterval(Intervar)
        }
    })

    return<>
        <h1>Stopwatch</h1>
        <h1>{hours}:{min}:{second}</h1>
        <button onClick={Start}>Start</button>
        <button onClick={Stop}>Stop</button>
    </>
}