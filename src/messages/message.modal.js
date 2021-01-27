import { v4 } from "uuid";

const messages = [
  {
    id: "d7d75efc-a114-4d54-8f48-d4f653729037",
    time: "27 янв., 22:16:06",
    name: "Hello",
    text: "World",
  },
];

const date = new Date();
var options = {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export class MessageModel {
  create(messageParams) {
    const id = v4();
    const time = date.toLocaleString("ru", options);
    const newMessage = {
      id,
      time,
      ...messageParams,
    };
    messages.push(newMessage);

    return newMessage;
  }
  fetch() {
    return messages;
  }
}
export const messageModel = new MessageModel();
