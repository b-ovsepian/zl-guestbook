import { createSelector } from "reselect";

export const messagesSelector = (state) => state.messages;
export const allMessagesSelector = (state) => messagesSelector(state).items;
export const errorSelector = (state) => messagesSelector(state).error;
export const filterSelector = (state) => messagesSelector(state).filter;
export const loaderSelector = (state) => messagesSelector(state).loading;

export const getVisibleMessages = createSelector(
  [allMessagesSelector, filterSelector],
  (messages, filter) => {
    return messages.filter((message) =>
      message.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
