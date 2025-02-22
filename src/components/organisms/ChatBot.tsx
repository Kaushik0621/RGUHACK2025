import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../atoms/Button';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "👋 Hey there! I'm your CityHub assistant. How can I help you today?", isUser: false },
    { text: "I can help you with:", isUser: false },
    { text: "• Finding city services\n• Council tax information\n• Housing assistance\n• Transport updates", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! I'm here to help with any questions about city services.",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <div className="fixed right-0 top-[120px] bottom-0 w-[700px] bg-white shadow-lg flex flex-col border-l border-gray-200">
      <div className="p-[0.63rem] border-b flex items-center justify-between bg-[#452947] text-white">
        <div>
          <h3 className="font-semibold">CityHub Assistant</h3>
          <p className="text-sm text-purple-100">Online • Ready to help</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isUser
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              } whitespace-pre-line`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <p className="text-sm text-gray-600 mb-2">Suggested questions:</p>
        <div className="flex flex-wrap gap-2">
          {['How do I pay Council Tax?', 'Report a repair', 'Find nearest library'].map((q) => (
            <Button
              key={q}
              variant="outline"
              size="sm"
              onClick={() => {
                setMessages([...messages, { text: q, isUser: true }]);
                setTimeout(() => {
                  setMessages(prev => [...prev, {
                    text: "I'll help you with that! Let me find the relevant information...",
                    isUser: false
                  }]);
                }, 1000);
              }}
            >
              {q}
            </Button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <Button onClick={handleSend} variant="primary" size="md" icon={Send} />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;