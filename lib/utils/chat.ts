import { Message, Chat } from '../types/chat';

export function createNewChat(): Chat {
  return {
    id: `chat-${Date.now()}`,
    title: 'New Chat',
    messages: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export function addMessageToChat(chat: Chat, message: Message): Chat {
  return {
    ...chat,
    messages: [...chat.messages, message],
    title:
      chat.messages.length === 0
        ? message.content.slice(0, 30) + '...'
        : chat.title,
    updatedAt: new Date(),
  };
}

export function updateChatTitle(chat: Chat, newTitle: string): Chat {
  return {
    ...chat,
    title: newTitle,
    updatedAt: new Date(),
  };
}

export function formatTimestamp(date: Date): string {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function truncateText(text: string, maxLength: number = 30): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}
