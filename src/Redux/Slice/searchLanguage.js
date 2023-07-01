import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchByLanguage = createAsyncThunk(
  "searchByLanguage",
  async (language, thunkApi) => {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=example&lang=${language}&max=10&apikey=5fcec417fc2c42464e1b6c447bf1c1b6`
      );
      return response.data;
    } catch (err) {
      const message = (err.response && err.response.data) || err.message;
      // rejectWithValue sends the error message as a payload
      return thunkApi.rejectWithValue(message);
    }
  }
);

const initialState = {
  loading: false,
  languageSearched: [],
  language: "",
  error: false,
  success: false,
  message: "",
};

const searchLanguageSlice = createSlice({
  name: "languageSearch",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
      state.languageSearched = [];
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchByLanguage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchByLanguage.fulfilled, (state, action) => {
      state.loading = false;
      state.languageSearched = action.payload;
      state.success = true;
    });
    builder.addCase(searchByLanguage.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
      state.languageSearched = [];
    });
  },
});

export const { reset, setLanguage } = searchLanguageSlice.actions;
export default searchLanguageSlice.reducer;
