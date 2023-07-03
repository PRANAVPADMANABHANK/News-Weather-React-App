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
    let apiUrl;
    if (searchTerm) {
      apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${NEWS_API_KEY}`;
    } else {
      apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${NEWS_API_KEY}`;
    }

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
