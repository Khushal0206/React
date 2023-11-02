import{configureStore} from "@reduxjs/toolkit";
import myreduser from"./cardSlice"
const store = configureStore({
    reducer:{
        myData : myreduser

    }
})
export default store;