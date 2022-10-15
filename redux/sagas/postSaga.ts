import { put, call, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getPostsRequest,
  getPostsSuccess,
  getPostsError,
  getLastPostsRequest,
} from "../slices/postSlice";
import axios from "axios";

function* onPostRequest() {
  try {
    const { data } = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/posts")
    );

    yield put(getPostsSuccess(data));
  } catch (error) {
    yield put(getPostsError(error));
  }
}

function* onLastPostRequest(action: PayloadAction<number>) {
  try {
    const { data } = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/posts")
    );

    yield put(getPostsSuccess(data.slice(0, action.payload)));
  } catch (error) {
    yield put(getPostsError(error));
  }
}

function* postSaga() {
  yield takeEvery(getPostsRequest.type, onPostRequest);
  yield takeEvery(getLastPostsRequest.type, onLastPostRequest);
}

export default postSaga;
