import axios from "axios";
import messagesAction from "../actions/messagesAction";

axios.defaults.baseURL = "http://localhost:3000";

const addMessage = (name, text) => (dispatch) => {
  dispatch(messagesAction.addMessageRequest());

  axios
    .post("messages", { name, text })
    .then(({ data }) => dispatch(messagesAction.addMessageSuccess(data)))
    .catch((error) => dispatch(messagesAction.addMessageError(error)));
};

const fetchMessages = () => (dispatch) => {
  dispatch(messagesAction.fetchMessagesRequest());

  axios
    .get("messages")
    .then(({ data }) => dispatch(messagesAction.fetchMessagesSuccess(data)))
    .catch((error) => dispatch(messagesAction.fetchMessagesError(error)));
};

export default {
  addMessage,
  fetchMessages,
};
