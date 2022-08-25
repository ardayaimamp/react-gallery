import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postSlices'

export default configureStore({
    reducer: {
        posts: postsReducer,
    }
})