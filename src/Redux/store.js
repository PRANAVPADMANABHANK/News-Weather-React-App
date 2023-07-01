import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './Slice/news'
import languageSearchReducer from './Slice/searchLanguage'

export const store = configureStore({
    reducer: {
        news:newsReducer,
        languageSearch: languageSearchReducer
    }
})

