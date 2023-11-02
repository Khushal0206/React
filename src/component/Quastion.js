
import{useState} from "react"
import dummydata from "./dummydata";
export default function Quastion(){
  // const arr =[
  //   "khushal","amit","naveen","vivek","ayush"
  // ]
  var studentName = dummydata.map(obj=>obj.name);

  const[student,changeState] = useState(studentName);
  const SearchStudent =(event)=>{
   var Data= studentName.filter(ele=>ele.indexOf(event.target.value.toLowerCase())!==-1)
   console.log(Data)
   changeState(Data)
  }
  return<>
  <input type="text" placeholder="search..." onChange={SearchStudent}></input>
  {/* <button onClick={SearchStudent}> click here..</button> */}
  {student.map(ele=><ul>
    <li>{ele}</li>
  </ul>)}
  
  
  </>
}