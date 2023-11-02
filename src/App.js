import React from 'react'
import Increase_Dec from './component/Increase_Dec'
import Practice from './component/Practice'
import Quastion from './component/Quastion'
import Practice1 from './component/Practice1'
import Call_API from './component/Call_API'
import Call_api1 from './component/Call_api1'
import Search_ele from './Search_array/Search_ele'
import Did_mount from "./lifecycle_methode/Did_mount"
import Did_update from "./lifecycle_methode/Did_update"
import Will_update from "./lifecycle_methode/Will_unmount"
import Will_unmount from './lifecycle_methode/Will_unmount'
import Calculation from './Add_two_number/add_two_number'
import Colour from './pass_prop_prent_child/changeColour'
import ShowName from './pass_pro_parent_child1/ShowName'
import Filterdata from './Filterdata/filterdata'
import LocalS from './localstorage/localS'
import Stopwatch from './stopwatch/stopwatch'
import Text from './Text_Analyz/Text'
import Add from './Add_Note/Add'
import Data from './fetch_data/fetch_data'
import Login from './Login/Login'
import Home from './Login/Home'

import {  Route, Routes } from 'react-router-dom'
import Search from './Search_task/Search'
import Parent from './pass_pro_parent_child3/parent'
import Stopwatch1 from './Stopwatch1/stopwatch1'
import Form from './form_input/form'
import Show2 from './Context_API/Show2'
import Show3 from './Higher_order/Show3'
import Array_Function from './function_In_Array/function_in_Array'
import Show4 from './helper_function/show4'

const App = () => {
  return (
    <>
      {/* <Quastion></Quastion> */}
      {/* <Practice></Practice> */}
      {/* <Increase_Dec/> */}
      {/* <Practice1/> */}
      <Call_API/>
      {/* <Call_api1/> */}
      {/* <Search_ele/> */}
      {/* <Did_mount/> */}
      {/* <Did_update/> */}
      {/* <Will_unmount/> */}
      {/* <Calculation/> */}
      {/* <Colour/> */}
      {/* <ShowName/> */}
      {/* <Filterdata/> */}
      {/* <LocalS/> */}
      {/* <Stopwatch/> */}
      {/* <Text/> */}
      {/* <Add/> */}
      {/* <Data/> */}
      {/* <Routes>
      <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
      </Routes> */}
      {/* <Search/> */}
      {/* <Parent></Parent> */}
      {/* <Stopwatch1></Stopwatch1> */}
      {/* <Form></Form> */}

      {/* <Show2></Show2> */}
      {/* <Show3/> */}
      {/* <Array_Function/> */}
      {/* <Show4/> */}
    </>
  )
}

export default App