'use client';

import {
  ChatMessage,
  ChatMessageAvatar,
  ChatMessageContent,
} from '@/components/ui/chat-message';
import MessageInput from '../chat/message-input';
import { useChat } from '@ai-sdk/react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCwIcon } from 'lucide-react';

const Chat = () => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, append, status, setMessages } = useChat({
    api: '/api/chat',
  });

  // คำถามแนะนำ
  const suggestedQuestions = [
    'Who are you?',
    'What can you do?',
    'Tell me about your work experience',
    'What are your technical skills?',
    'What interesting projects have you worked on?',
    'How do you integrate AI in your work?',
  ];

  useEffect(() => {
    if (messages?.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = (message: string) => {
    setInput('');
    append({
      role: 'user',
      content: message,
    });
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  const handleClearChat = () => {
    setMessages([]);
    setInput('');
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold md:text-2xl">Chat with me 💬</h3>
          {messages.length > 0 && (
            <Button onClick={handleClearChat} variant={'ghost'} size={'icon'}>
              <RotateCwIcon />
            </Button>
          )}
        </div>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Have questions about my experience, skills, or projects? Ask me
          anything! I'm here to share insights about my professional journey in
          software engineering.
        </p>
      </div>
      <div className="h-[425px] overflow-hidden rounded-lg border [box-shadow:5px_5px_rgb(82_82_82)]">
        <div className="box-border flex h-full flex-col gap-4 p-4">
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, idx) => {
                if (message.role === 'user') {
                  return (
                    <ChatMessage
                      key={idx}
                      id={idx.toString()}
                      type={'outgoing'}
                      variant="bubble"
                    >
                      {/* <ChatMessageAvatar imageSrc="/assets/images/notion-avatar-1.png" /> */}
                      <div className="flex items-center gap-2">
                        <ChatMessageContent
                          content={message.content as string}
                        />
                      </div>
                    </ChatMessage>
                  );
                }
                if (message.role === 'assistant') {
                  return (
                    <ChatMessage
                      key={idx}
                      id={idx.toString()}
                      type={'incoming'}
                      // variant="bubble"
                    >
                      <ChatMessageAvatar imageSrc="/assets/images/notion-avatar-bot.png" />
                      <div className="flex flex-col gap-2">
                        <ChatMessageContent
                          content={message.content as string}
                        ></ChatMessageContent>
                      </div>
                    </ChatMessage>
                  );
                }
              })}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="">
            {messages.length === 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <MessageInput
              value={input}
              onChange={setInput}
              onSearch={(input) => handleSendMessage(input)}
              isLoading={status === 'submitted' || status === 'streaming'}
              placeholder="Type something..."
            ></MessageInput>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
