import React, { useState } from 'react';
import { Send, X } from 'lucide-react';
import Button from '../atoms/Button';
import dummyChatData from '../../data/chatbotDummyData.json'
import { getLLMResponse, refreshMemory } from '../../services/api';

interface Message {
  text: string | JSX.Element;
  isUser: boolean;
  isLink?: boolean;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "👋 Hey there! I'm your CityHub assistant. How can I help you today?", isUser: false },
    { text: "I can help you with:", isUser: false },
    { text: "• Finding city services\n• Council tax information\n• Housing assistance\n• Transport updates", isUser: false }
  ]);
  const [input, setInput] = useState('');

  console.log("message", messages);
  

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');

    setTimeout(async () => {
      try {
        const response = await getLLMResponse(input);
        setMessages(prev => [...prev, {
          text: (
            <>
              {response.response} <br />
              {response.reference && <a href={response.reference} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {response.reference}
              </a>}
            </>
          ),
          isUser: false
        }]);
      } catch (error) {
        console.error('Error fetching response:', error);
        setMessages(prev => [...prev, {
          text: "Sorry, there was an error processing your request.",
          isUser: false
        }]);
      }
    }, 1000);
  };

  const handleTitleClick = async (title: string) => {
    console.log('title',title);
    
    const selectedItem = dummyChatData.find(item => item.title === title);
    console.log('selectedItem',selectedItem);
    
    
    if (selectedItem) {
      setSuggestedQuestions(selectedItem.text.sort(() => 0.5 - Math.random())
      .slice(0, 3));
    }
    try {
      const response = await getLLMResponse(title);
      setMessages(prev => [...prev, {
        text: (
          <>
            {response.response} <br />
            {response.reference && <a href={response.reference} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              {response.reference}
            </a>}
          </>
        ),
        isUser: false
      }]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>(dummyChatData.map(item => item.title));  

  const initialMessages: Message[] = [
    { text: "👋 Hey there! I'm your CityHub assistant. How can I help you today?", isUser: false },
    { text: "I can help you with:", isUser: false },
    { text: "• Finding city services\n• Council tax information\n• Housing assistance\n• Transport updates", isUser: false }
  ];

  const handleRefreshMemory = async () => {
    try {
      await refreshMemory();
      setMessages(initialMessages);
      setSuggestedQuestions(dummyChatData.map(item => item.title));
      console.log('Memory refreshed successfully');
    } catch (error) {
      console.error('Failed to refresh memory:', error);
    }
  };

  return (
    <div className="fixed right-0 top-[120px] bottom-0 w-[700px] bg-white shadow-lg flex flex-col border-l border-gray-200">
      <button 
        onClick={handleRefreshMemory} 
        style={{ position: 'absolute', top: 10, right: 10 }} 
        className="text-white"
      >
        <X size={44} />
      </button>

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
        <div className="flex flex-wrap gap-2 mt-2">
          {suggestedQuestions.map((question) => (
            <Button
              key={question}
              variant="outline"
              size="sm"
              onClick={() => {
                setMessages([...messages, { text: question, isUser: true }]);
                // setTimeout(() => {
                //   setMessages(prev => [...prev, {
                //     text: "I'll help you with that! Let me find the relevant information...",
                //     isUser: false
                //   }]);
                // }, 1000);
                handleTitleClick(question)
              }}
            >
              {question}
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
          <Button onClick={handleSend} variant="primary" size="md" icon={Send}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;