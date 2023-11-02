import axios from "axios";
import { Component } from "react";

export default class Did_mount extends Component{
    constructor(){
        super()
        this.state ={
            Brand:[]
        }
    }
   async componentDidMount(){
       // console.log("componentDidMount run")
       setTimeout(async()=>{
           const Data =  await axios("https://cb-ecommerce.onrender.com/api/brand/list")
          // console.log(Data.data)
           this.setState({Brand:Data.data})
         

       },5000)
      //   setTimeout(()=>{
    //     this.setState({Brand:"khushal"})
    //   },3000)
      
    }
    ///Note : the benefit is using componentdidmount function is it mount after render function .
    //so question is arrive how it benefit , so anwser is api take time to fetch data  so if i show loder in UI than it give good exiperies as a user 
        
    
        
        render(){
            console.log(this.state.Brand)
            console.log("render run")

        return<>
            <h1>Lifecycle methode</h1>
            <b>please Wait....</b>
          {  this.state.Brand.map(ele=><li>
            {ele. brand_name}
          </li>)}
        </>
    }
}