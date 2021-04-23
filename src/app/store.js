
import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/blogs/blogsSlice'
import themeReducer from '../features/themes/themeSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    theme: themeReducer
  },
})