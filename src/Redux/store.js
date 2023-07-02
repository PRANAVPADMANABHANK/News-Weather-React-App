import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './Slice/news'


export const store = configureStore({
    reducer: {
        news:newsReducer
    }
})

