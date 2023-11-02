import Higher from "./Higher_Order"
 function Users({username}){

    return<>
        <h2>Users</h2>
        {username.slice(1,7).map((ele,index)=><ul key={index}>
            <li >{ele.name}</li>
        </ul>)}
    </>
}
var users = Higher("users",Users, "users")
export default users;