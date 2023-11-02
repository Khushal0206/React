import { useEffect, useState } from "react"

export default function Stopwatch(){
    const [hours,sethours]= useState(0);
    const [min,setmin]= useState(0);
    const [second,setsecond]= useState(0);
    const [stop,changestop]=useState(false)

    const onstart=()=>{
        // setsecond(second+1)
        changestop(true)
    }
    const onstop=()=>{
        changestop(false)
    }
     useEffect(()=>{
        let interval;
        if(stop==true){
            interval = setInterval(() => {
                if(min>59){
                    sethours(hours+1);
                    setmin(0)
                    clearInterval(interval)
                }
                if(second>59){
                    setmin(min+1);
                    setsecond(0)
                     clearInterval(interval)

                }
                if(second<60){
                    setsecond(second+1)
                     clearInterval(interval)

                }
            }, 1000);

        }else{
            clearInterval(interval)
        }
     })

    return<>
    <h1>{hours}:{min}:{second}</h1>
    <button onClick={onstart}>Start</button>
    <button onClick={onstop}>Stop</button>
    <button>Restart</button>



    </>
}