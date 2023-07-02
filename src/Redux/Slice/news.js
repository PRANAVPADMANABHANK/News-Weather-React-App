import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (selectedLanguage) => {
    console.log(selectedLanguage, "]]]]]]]]]]]]");

    if (!selectedLanguage) {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=7d3bb61252064a1b82860e8f5f6fa1b9"
      );
      return response.json();
    } else {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=7d3bb61252064a1b82860e8f5f6fa1b9&language=${selectedLanguage}`
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
      console.log(action.payload, ";;;;;;;;;;;;;;;;;;;;;;;;;");
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
