import { Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";
import Menu from "./component/Menu";

export default function App (){
  return<>
  <Menu></Menu>
  <Routes>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/card" element={<Cart/>}></Route>
  </Routes>
  
  </>
}