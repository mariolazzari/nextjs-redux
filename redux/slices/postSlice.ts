import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PostState } from "../../types/posts";

const initialState: PostState = {
  posts: [],
  post: null,
  loading: false,
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostsRequest: state => {
      state.posts = [];
      state.post = null;
      state.error = "";
      state.loading = true;
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    getPostsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    getLastPostsRequest: (state, action: PayloadAction<number>) => {
      state.posts = [];
      state.post = null;
      state.error = "";
      state.loading = true;
    },
  },
});

export const selectPosts = (state: RootState) => state.post.posts;

export const {
  getPostsRequest,
  getPostsSuccess,
  getPostsError,
  getLastPostsRequest,
} = postSlice.actions;

export default postSlice.reducer;
