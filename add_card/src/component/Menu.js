import{useSelector} from "react-redux";
import { Link } from "react-router-dom";
import Home from "./Home";
export default function Menu() {
var cardLenth = useSelector(state=>state.myData.value.length)
    return <>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-md-10">
                    <h1 className="alert-danger text-center">Bazzar</h1>
                </div>
                <div className="col-lg-2 col-md-2">
                   <Link to="/Card"> <button className="btn btn-success" >Card:{cardLenth} </button></Link>&nbsp;&nbsp;&nbsp;
                  <Link to="/home" className="btn btn-dark"> Home</Link> 

                </div>
            </div>

        </div>
    </>
}