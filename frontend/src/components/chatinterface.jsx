import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { sendMessage } from '../../utils/api'
import { supabase } from "../supaBaseClient"
import { useNavigate } from "react-router-dom"
import { Menu } from "lucide-react"
import './styles/chatInterface.css';

const ChatInterface = ({ user }) => {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  //for titles
  const [ShortenTitle, NewshortenTitle] = useState([])

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
   
     //try shorten title
         const shortenRes = await fetch("http://localhost:3000/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: inputText })
    });

    const shortenData = await shortenRes.json();

    NewshortenTitle(shortenData.shortened);

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
    <div className="main-dashboard">
      <div className="sidebar">
        <div className="sidebar-header">
          <Menu />
          <p>Block Intel</p>
        </div>
        {ShortenTitle}
        <div>

        </div>
        <button onClick={() => supabase.auth.signOut().then(() => navigate("/login"))}>
          Logout
        </button>
      </div>
      <div className="chat-container">
        <header className="chat-header">
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
    </div>
  );
};

export default ChatInterface;