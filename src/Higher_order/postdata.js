import Higher from "./Higher_Order"
 function PostData({username}){
    return<>
        <h2>post</h2>
        {username.slice(0,10).map(ele=><ol type="A">
            <li>{ele.title}</li>
        </ol>)}
    </>
}
var Post = Higher("post", PostData,"posts")
export default Post;