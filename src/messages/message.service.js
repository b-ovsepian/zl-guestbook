import { messageModel } from "./message.modal.js";

export class MessagesService {
  createMessage(messageParams) {
    return messageModel.create(messageParams);
  }
  fetchMessages() {
    return messageModel.fetch();
  }
}
export const messagesService = new MessagesService();
