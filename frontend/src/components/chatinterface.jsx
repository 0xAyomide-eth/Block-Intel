import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { sendMessage } from '../../utils/api'
import './styless.css';

const ChatInterface = ({ user }) => {

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSend = async () => {

    if (!inputText.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: inputText
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText("");

    try {

      const currentHistory = [...messages, userMsg];

const langchainMessages = currentHistory.slice(-5).map(m => ({
  role: m.sender === "user" ? "human" : "ai",
  content: m.text
}));

      const reply = await sendMessage(langchainMessages);
      
      const botMsg = {
        id: Math.random(),
        sender: "bot",
        text: reply,
        isError: false
      };

      setMessages(prev => [...prev, botMsg]);

    } catch (err) {

      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text: `Error: ${err.message}`,
          isError: true
        }
      ]);

    }

  };



  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };



  return (
    <div className="chat-container">

      <header className="chat-header">
        <p>Block-Intel</p>
        <p>welcome {user}</p>
      </header>

      <main className="message-list">
        {messages.map(msg => (
          <div key={msg.id} className={`message-row ${msg.sender}`}>
            <div className={`bubble ${msg.isError ? 'error-bubble' : ''}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </main>

      <footer className="input-area">

        <TextareaAutosize
          className="chat-textarea"
          placeholder="Message AI..."
          minRows={1}
          maxRows={8}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className="send-button"
          onClick={handleSend}
          disabled={!inputText.trim()}
        >
          Send
        </button>

      </footer>

    </div>
  );
};

export default ChatInterface;