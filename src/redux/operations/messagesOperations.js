import firebase from "firebase";
import messagesAction from "../actions/messagesAction";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: "zl-guestbook.firebaseapp.com",
  databaseURL:
    "https://zl-guestbook-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zl-guestbook",
  storageBucket: "zl-guestbook.appspot.com",
  messagingSenderId: "89312408301",
  appId: "1:89312408301:web:9f5eacc624dc4250c252e4",
});

var db = firebase.firestore();

const addMessage = (name, text, time) => (dispatch) => {
  dispatch(messagesAction.addMessageRequest());

  db.collection("messages")
    .add({
      name,
      text,
      time,
    })
    .then((data) =>
      dispatch(
        messagesAction.addMessageSuccess({ id: data.id, name, text, time })
      )
    )
    .catch((error) => dispatch(messagesAction.addMessageError(error)));
};

const fetchMessages = () => (dispatch) => {
  dispatch(messagesAction.fetchMessagesRequest());

  db.collection("messages")
    .get()
    .then((data) => {
      const arr = [];
      data.forEach((doc) => arr.push({ id: doc.id, ...doc.data() }));
      dispatch(messagesAction.fetchMessagesSuccess(arr));
    })
    .catch((error) => dispatch(messagesAction.fetchMessagesError(error)));
};

export default {
  addMessage,
  fetchMessages,
};
