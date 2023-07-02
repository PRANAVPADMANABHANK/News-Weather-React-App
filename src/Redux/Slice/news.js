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

const newsSlice = createSlice({
  name: "news",
  initialState: {
    isLoading: false,
    data: null,
    language: "", // Added language state
  },
  reducers: {
    addLang: (state, action) => {
      state.language = action.payload; // Update language state with selected language
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
      });
  },
});

export default newsSlice.reducer;
export const { addLang } = newsSlice.actions;
