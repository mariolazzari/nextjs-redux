import { configureStore } from "@reduxjs/toolkit";
import createSaga from "redux-saga";
import rootSaga from "./sagas/rootSaga";

import counter from "./slices/counterSlice";
import post from "./slices/postSlice";

const saga = createSaga();

export const store = configureStore({
  reducer: {
    counter,
    post,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat(saga),
});

saga.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
