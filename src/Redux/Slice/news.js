// newsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NEWS_API_KEY } from "../../api/api";

const PAGE_SIZE = 10;

export const fetchNews = createAsyncThunk("news/fetchNews", async (data) => {
  const { languageCode, page } = data;
  const limit = page * PAGE_SIZE;
  const skip = (page-1)*PAGE_SIZE
  const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${NEWS_API_KEY}&pageSize=${limit}&language=${languageCode || ''}&skip=${skip}`;
  const response = await fetch(apiUrl);
  return response.json();
});

export const searchNewsByTerm = createAsyncThunk(
  "news/searchNewsByTerm",
  async (searchTerm) => {
    const apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm || "bitcoin"}&apiKey=${NEWS_API_KEY}&pageSize=${PAGE_SIZE}`;
    const response = await fetch(apiUrl);
    return response.json();
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    isLoading: false,
    data: null,
    language: "",
    term: "",
  },
  reducers: {
    addLang: (state, action) => {
      state.language = action.payload;
    },
    searchNews: (state, action) => {
      state.term = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      })
      .addCase(searchNewsByTerm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchNewsByTerm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(searchNewsByTerm.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
  },
});

export const { addLang, searchNews } = newsSlice.actions;
export default newsSlice.reducer;
