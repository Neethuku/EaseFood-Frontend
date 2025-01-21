import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../../Service/ServerUrl";


export const fetchFoods = createAsyncThunk('allFoods/fetchFoods', async (pin) => {
    const response = await axios.get(`${SERVER_URL}/api/menu/${pin}/table/`);
    return response; 
});


const foodSlice = createSlice({
    name: 'allFoods',
    initialState: {
        foods: [],
        loading: false,
        error: "",
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFoods.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchFoods.fulfilled, (state, action) => {
            state.loading = false;
            state.foods = action.payload.data; 
        });
        builder.addCase(fetchFoods.rejected, (state) => {
            state.loading = false;
            state.foods = [];
            state.error = "API Call failed";
        });
    },
});

export default foodSlice.reducer