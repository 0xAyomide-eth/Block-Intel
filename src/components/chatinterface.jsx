import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './styless.css';

const ChatInterface = ({ user }) => {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('');

  //send function for the user input
  const handleSend = async () => {
    if (inputText.trim() === '') return;
    setMessages((prev) => [...prev, { id: Date.now(), text: inputText, sender: 'user' }]);
    setInputText('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: "wokring my boy", sender: 'bot' }
      ]);
    }, 800);
  };

  //send message on click of the enter button
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
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
        {messages.map((msg) => (
          <div key={msg.id} className={`message-row ${msg.sender}`}>
            <div className="bubble">
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