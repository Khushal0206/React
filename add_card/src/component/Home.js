import DummyData from "./DummyData";
import { useDispatch } from "react-redux";
import { AddCard } from "../createSlice/cardSlice";
export default function Home() {
    const dispatch = useDispatch();
    const add =(event)=>{
  const item =  event.target.getAttribute("data-id")
  //console.log(item)
  dispatch( AddCard(item))
    }
    return <>
        <div className="container">
            <div className="row">
                {DummyData.map(prod=> <div className="col-lg-4 col-md-4">
                    <div>
                        <img src="prod.image" height={200} width={220}></img>

                    </div>
                    <div>
                        <b>{prod.pname} &nbsp; (price:{prod.price})</b>
                        
                    </div>
                    <hr></hr>
                    <div>
                        <button className="btn btn-success" onClick={add} data-id={prod.pid}> Add card </button>
                    </div>

                </div>
                )}


            </div>

        </div>
    </>

}