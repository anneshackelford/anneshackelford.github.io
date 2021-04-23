
import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/blogs/blogsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer
  },
})