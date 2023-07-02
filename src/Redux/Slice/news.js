import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NEWS_API_KEY } from "../../api/api";

// Action
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (selectedLanguage) => {
    if (!selectedLanguage) {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${NEWS_API_KEY}`
      );
      return response.json();
    } else {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${NEWS_API_KEY}&language=${selectedLanguage}`
      );
      return response.json();
    }
  }
);

export const searchNewsByTerm = createAsyncThunk(
  "news/searchNewsByTerm",
  async (searchTerm) => {
    console.log(searchTerm, "search term found");
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${NEWS_API_KEY}`
    );
    console.log(response, ";;;;;;;;;;;;;;;;;;;;;;;;;;;;");
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
      console.log(action.payload, "////////");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        console.log("fetchNews.pending is executed");
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        console.log("fetchNews.fulfilled is executed");
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        console.log("fetchNews.rejected is executed");
        console.log("Error", action.payload);
        state.isError = true;
      })
      .addCase(searchNewsByTerm.pending, (state) => {
        console.log("searchNewsByTerm.pending is executed");
        state.isLoading = true;
      })
      .addCase(searchNewsByTerm.fulfilled, (state, action) => {
        console.log("searchNewsByTerm.fulfilled is executed");
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(searchNewsByTerm.rejected, (state, action) => {
        console.log("searchNewsByTerm.rejected is executed");
        console.log("Error", action.payload);
        state.isError = true;
      });
  },
});

export const { addLang, searchNews } = newsSlice.actions;
export default newsSlice.reducer;
