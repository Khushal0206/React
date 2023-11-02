import axios from "axios"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    var emailbox = useRef();
    var passwordbox=useRef();
   var navigate = useNavigate()
   
    const Login =async ()=>{
        const ob ={
        
            email : emailbox.current.value,
            password : passwordbox.current.value
        
    }
        var D=  await axios.post("http://apps.codebetter.in:8082/emall/user/login",ob)
        console.log(D)
        console.log(D.data.token)
          localStorage.setItem("token",D.data.token)
        navigate("/Home")
        
    }
    return<>
       <input type="text" placeholder="enter your email" ref={emailbox}></input>
       <input type="text" placeholder="enter your pasword" ref={passwordbox}></input>
       <button className="btn btn-success" onClick={Login}>Login</button>

    </>
}