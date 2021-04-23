import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle",
  error: null
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPostsAsync",
  async (markdownFileNames) => {
    const markdowbFilesContent = await Promise.all(
      markdownFileNames.map((file) => fetch(file).then((res) => res.text()))
    ).catch((err) => console.error(err));
    return markdowbFilesContent;
  }
);

function getTitle(article) {
  let index = article.indexOf("\n");
  let firstLine = article.slice(0, index);
  let title = firstLine.slice(2);
  return title;
}

function getImage(article) {
  let index = article.indexOf("\n");
  let restOfArticle = article.slice(index + 1);
  index = restOfArticle.indexOf("\n");
  let imageLink = restOfArticle.slice(4, index - 1);
  return imageLink;
}

function getListOfPosts(state, markdowbFilesContent) {
  let posts = markdowbFilesContent.map((article, idx) => {
    let title = getTitle(article);
    let imageLink = getImage(article);
    let blogObject = {
      title: title,
      index: idx,
      imageLink: imageLink,
      blog: article,
    };
    return blogObject;
  });
  state.posts = posts.slice();
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      console.log("fetch pending", action);
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Add any fetched posts to the array
      console.log("fetch fulfilled action", action);
      const markdowbFilesContent = action.payload;
      getListOfPosts(state, markdowbFilesContent);
    },
    [fetchPosts.rejected]: (state, action) => {
      console.log("fetch rejected", action);
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default postsSlice.reducer;
