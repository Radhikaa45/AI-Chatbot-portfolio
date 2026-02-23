import React, { useState, useEffect, useRef } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi, I'm Radhika's AI assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];

    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    const startTime = Date.now();

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      const elapsedTime = Date.now() - startTime;
      const remainingTime = 1000 - elapsedTime;

      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.response },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
      inputRef.current?.focus();
    }
  };

  const handleExit = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hi, I'm Radhika's AI assistant. How can I help you today?",
      },
    ]);
    setShowConfirm(false);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#6BAA9A] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition text-sm sm:text-base"
      >
        Chat with me
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-[92vw] max-w-[400px] h-[85vh] max-h-[650px] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-[#E8F3F0] z-[999]">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-[#6BAA9A] text-white p-4">
        <h3 className="font-semibold tracking-wide text-sm sm:text-base">
          AI Assistant
        </h3>
        <button onClick={() => setShowConfirm(true)}>
          <span className="text-xl font-bold">×</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 bg-[#F8FAFC] text-sm">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-2xl w-fit max-w-[85%] break-words shadow-sm ${
              msg.role === "user"
                ? "bg-[#6BAA9A] text-white ml-auto"
                : "bg-[#E8F3F0] text-gray-800"
            }`}
          >
            {msg.role === "assistant" ? (
              <div
                className="
                  chatbot-message
                  [&_a]:text-teal-600
                  [&_a]:font-medium
                  [&_a]:no-underline
                  [&_a:hover]:text-teal-800
                  [&_a:hover]:underline
                "
                dangerouslySetInnerHTML={{ __html: msg.content }}
              />
            ) : (
              msg.content
            )}
          </div>
        ))}

        {isTyping && (
          <div className="px-4 py-2 rounded-2xl w-fit max-w-[85%] bg-[#E8F3F0] text-gray-600 text-sm shadow-sm">
            Typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t bg-white flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
        <input
          ref={inputRef}
          type="text"
          className="flex-1 border border-[#6BAA9A] rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-[#6BAA9A] text-sm"
          placeholder="Ask about Radhika..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="bg-[#6BAA9A] text-white px-5 py-2 rounded-full hover:opacity-90 transition text-sm"
        >
          Send
        </button>
      </div>

      {/* Exit Confirmation Modal */}
      {showConfirm && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center space-y-4 w-72">
            <p className="font-medium text-gray-700 text-sm">
              Do you want to exit chat?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition text-sm"
              >
                Continue
              </button>
              <button
                onClick={handleExit}
                className="px-4 py-2 bg-[#6BAA9A] text-white rounded-lg hover:opacity-90 transition text-sm"
              >
                Exit & Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;