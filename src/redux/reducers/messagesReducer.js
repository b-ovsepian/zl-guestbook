import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  ADD_MESSAGE_REQUEST,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_ERROR,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_ERROR,
  CHANGE_FILTER,
  CHANGE_ERROR,
} from "../constants";

const items = createReducer([], {
  [FETCH_MESSAGES_SUCCESS]: (state, { payload }) => payload,
  [ADD_MESSAGE_SUCCESS]: (state, { payload }) => [...state, payload],
});

const filter = createReducer("", {
  [CHANGE_FILTER]: (state, { payload }) => payload,
});

const error = createReducer("", {
  [CHANGE_ERROR]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [ADD_MESSAGE_REQUEST]: () => true,
  [ADD_MESSAGE_SUCCESS]: () => false,
  [ADD_MESSAGE_ERROR]: () => false,
  [FETCH_MESSAGES_REQUEST]: () => true,
  [FETCH_MESSAGES_SUCCESS]: () => false,
  [FETCH_MESSAGES_ERROR]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
