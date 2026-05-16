import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { sendMessage } from '../../utils/api'
import { supabase } from "../supaBaseClient"
import { useNavigate } from "react-router-dom"
import { Menu, X } from "lucide-react"
import './styles/chatInterface.css';

const ChatInterface = ({ user }) => {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [ShortenTitle, NewshortenTitle] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo-area">
            {isSidebarOpen && <p>Block Intel</p>}
          </div>
          <button 
            className="toggle-btn"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <div className="sidebar-footer">
          <button 
            className="logout-btn"
            onClick={() => supabase.auth.signOut().then(() => navigate("/login"))}
          >
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>
      
      <div className={`chat-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
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