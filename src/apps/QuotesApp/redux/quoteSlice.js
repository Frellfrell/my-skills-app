import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Асинхронный thunk для получения случайной цитаты
export const fetchRandomQuote = createAsyncThunk(
"quote/fetchRandomQuote",
async (_, { rejectWithValue }) => {
try {
const response = await axios.get("https://dummyjson.com/quotes/random");
// API возвращает объект { id, quote, author }
return response.data;
} catch (err) {
return rejectWithValue(err.response?.data || err.message);
}
}
);


const initialState = {
text: "",
author: "",
status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
error: null,
};


const quoteSlice = createSlice({
name: "quote",
initialState,
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchRandomQuote.pending, (state) => {
state.status = "loading";
state.error = null;
})
.addCase(fetchRandomQuote.fulfilled, (state, action) => {
state.status = "succeeded";
state.text = action.payload?.quote ?? "";
state.author = action.payload?.author ?? "";
state.error = null;
})
.addCase(fetchRandomQuote.rejected, (state, action) => {
state.status = "failed";
state.error = action.payload || action.error.message;
});
},
});


export default quoteSlice.reducer;
