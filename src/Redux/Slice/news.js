// newsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (selectedLanguage) => {
    if (!selectedLanguage) {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      const data = await response.json();
      console.log(data); // Log the data when no language is selected
      return data;
    } else {
      console.log(selectedLanguage, "selected lang redux");
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&language=${selectedLanguage}`
      );
      const data = await response.json();
      console.log(data); // Log the data when a language is selected
      return data;
    }
  }
);


export const searchNewsByTerm = createAsyncThunk(
  "news/searchNewsByTerm",
  async (searchTerm) => {
    let apiUrl;
    if (searchTerm) {
      console.log(searchTerm,"search term")
      apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    } else {
      apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    }
    console.log(apiUrl,"searched url")
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
