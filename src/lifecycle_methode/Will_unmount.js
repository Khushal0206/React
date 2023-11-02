import { Component } from "react";
import Did_mount from "./Did_mount";

export default class Will_unmount extends Component{
    componentWillUnmount(){
        console.log("component will unmount ")
    }
    render(){
        return<>
        <h1>Will update  </h1>

        </>
    }
}