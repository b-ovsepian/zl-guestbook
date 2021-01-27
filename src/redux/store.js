import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import messagesReducer from "./reducers/messagesReducer";

const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export default store;
