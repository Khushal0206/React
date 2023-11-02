import {Component} from "react"
export default class  Did_update extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    //componentDidupdate run when component update  
    componentDidUpdate(){
        console.log("componenet Did update ")
    }
     /// but in case of componenetDidMount run only one time when component load 
    componentDidMount(){
        console.log("component Did Mount")
    }
    render(){
        return <>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click..</button>
            <h1>hello this is component did update</h1>
        </>
    }
} 