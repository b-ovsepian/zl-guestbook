import { createAction } from "@reduxjs/toolkit";

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

const addMessageRequest = createAction(ADD_MESSAGE_REQUEST);
const addMessageSuccess = createAction(ADD_MESSAGE_SUCCESS);
const addMessageError = createAction(ADD_MESSAGE_ERROR);

const fetchMessagesRequest = createAction(FETCH_MESSAGES_REQUEST);
const fetchMessagesSuccess = createAction(FETCH_MESSAGES_SUCCESS);
const fetchMessagesError = createAction(FETCH_MESSAGES_ERROR);

const changeFilter = createAction(CHANGE_FILTER);
const changeError = createAction(CHANGE_ERROR);

export default {
  addMessageRequest,
  addMessageSuccess,
  addMessageError,
  fetchMessagesRequest,
  fetchMessagesSuccess,
  fetchMessagesError,
  changeFilter,
  changeError,
};
