import {useState} from "react"; 
export default function App(){
  const [Name,changeState] = useState([])
  fetch("https://jsonplaceholder.typicode.com/comments").then(responce=>responce.json()
  .then(result=>changeState(result)) )
  // .catch(err=>console.log("error is occured !"))
  return<>
  <h1 className=" alert-dark text-center"> Employee List</h1>
  <table className="table">
    <thead>
      <th>S.no</th>
      <th>id</th>
      <th>name</th>
      <th>email</th>
    </thead>
    <tbody>
      {Name.map((ele,index)=><tr>
        <td>{index+1}</td>
        <td>{ele.id}</td>
        <td>{ele.name}</td>
        <td>{ele.email}</td>
    </tr>)}
    </tbody>
  </table>
  
  </>
}