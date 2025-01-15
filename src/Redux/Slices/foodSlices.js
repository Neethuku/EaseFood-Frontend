import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../../Service/ServerUrl";

export const fetchFoods = createAsyncThunk('allFoods/fetchFoods', async (pin) => {
    console.log('inside fetchFoods');
    
    const apiUrl = `${SERVER_URL}/api/food/${pin}/`;
    console.log('API URL:', apiUrl);
   /*  const response = await axios.get(apiUrl)
    
    return response.data; */
    const result =  await axios.get(apiUrl).then((response)=>response.data)
    console.log(result);
    
});


const foodSlice = createSlice({
    name:'allFoods',
    initialState:{
        foods:[],
        loading:false,
        error:""
    },
    extraReducers : (builder) => {
        builder.addCase(fetchFoods.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchFoods.fulfilled,(state,action)=>{
            state.loading = false
            state.foods = action.payload
        })
        builder.addCase(fetchFoods.rejected,(state)=>{
            state.loading = false
            state.foods = []
            state.error = "API Call failed"
        })
    }
})
export default foodSlice.reducer