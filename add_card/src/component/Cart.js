import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import DummyData from "./DummyData"
import { useDispatch } from "react-redux";
import{removCard,increaseCard,decreaseCard} from "../createSlice/cardSlice"
export default function Cart()
{
    var carts = useSelector(state=>state.myData.value)
    var result = 0;
    var dis = useDispatch();
    return <>

        {carts.map((ct,index)=>{
                const prod = DummyData.find(ob=>ob.pid==ct.pid)
            result = result+prod.price;
            } )}
         <b className="text-danger">Total Amount:{result}</b>

        <hr/>
        <table className="table">
            <tr>
                <th>S. No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
            </tr>
            {carts.map((ct,index)=>{
                const prod = DummyData.find(ob=>ob.pid==ct.pid)
                return <tr>
                    <td>{index+1}</td>
                    <td></td>
                    {/* //<td><img src={prod.image} height={80} width={100}/></td> */}
                    <td>{prod.pname}</td>
                    <td>{prod.price}</td>
                    <td> <button className="btn btn-success" onClick={()=>dis(decreaseCard(ct.pid))}>-</button>&nbsp;
                    {ct.qty}&nbsp;<button className="btn btn-success" onClick={()=>dis(increaseCard(ct.pid))}>+</button></td>
                    <td>{prod.price * ct.qty}</td>
                    <td className="btn btn-danger" onClick={()=>dis(removCard(ct.pid))}>Delete</td>
                </tr>
            })}
        </table>
    </>
}