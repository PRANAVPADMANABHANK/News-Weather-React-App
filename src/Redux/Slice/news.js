import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchNews = createAsyncThunk('fetchNews', async ()=>{
    const response =await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-06-28&to=2023-06-28&sortBy=popularity&apiKey=7d3bb61252064a1b82860e8f5f6fa1b9');
    return response.json();
})

const newsSlice = createSlice({
  name: "news",
  initialState:{
    isLoading: false,
    data: null
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchNews.pending,(state,action)=>{
        state.isLoading = true
    })
    builder.addCase(fetchNews.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.data = action.payload;
    })
    builder.addCase(fetchNews.rejected, (state,action)=>{
        console.log("Error", action.payload)
        state.isError = true;
    })
  }
});

export default newsSlice.reducer;
