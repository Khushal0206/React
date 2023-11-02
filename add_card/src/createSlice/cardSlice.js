import {createSlice} from "@reduxjs/toolkit"
const SliceObj = createSlice({
    name:"mySlice",
    initialState:{
        value:[]
    },
    reducers:{
        AddCard:(state,action)=>{
            var pid = action.payload;
            state.value=[...state.value,{pid,qty:1}]
        },
        removCard:(state,action)=>{
           var pid= action.payload;
            state.value = state.value.filter(obj=>obj.pid!=pid);
        },
        increaseCard:(state,action)=>{
            var pid = action.payload;
            state.value = state.value.map(ele=>ele.pid==pid?{...ele,qty:ele.qty+1}:ele)
        },
        decreaseCard:(state,action)=>{},

    }
})
export const {AddCard,removCard,increaseCard,decreaseCard} = SliceObj.actions
export default SliceObj.reducer