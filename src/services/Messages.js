class Messages {
  sortChatMessages = (messages) => {
    if (!Array.isArray(messages) || !messages.length) {
      return [];
    }

    if (messages.length < 2) {
      return messages;
    }

    return messages.slice().sort((a, b) => a.created_at - b.created_at);
  };
}

export default Messages;
