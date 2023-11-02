export default function Practice(){
   const  change_fun = (event)=>{
   var Data =  event.target.value
   console.log(Data)

   }
    return<>
        <input type="text" placeholder="search..." onChange={change_fun}></input>
        <button value={"khushal"} onClick={change_fun}>click me..</button>
    </>
}