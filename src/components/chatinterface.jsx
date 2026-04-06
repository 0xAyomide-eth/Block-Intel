import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { ChatGoogle } from '@langchain/google';
import { createAgent, tool } from 'langchain';
import { z } from "zod";
import './styless.css';


// ================= AI MODEL =================
const model = new ChatGoogle({
  apiKey: import.meta.env.
  model: "gemini-3-flash-preview",
  temperature: 0
});


// ================= TOOL =================
const GetCryptoPrice = tool(
  async ({ symbol }) => {
    try {
      const res = await fetch(
        `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${symbol.toUpperCase()}`,
        {
          headers: {
            Accept: "application/json",
            "X-CMC_PRO_API_KEY": import.meta.env.
          }
        }
      );

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      const data = await res.json();
      const coin = Object.values(data.data[symbol.toUpperCase()])[0];

      const price = coin.quote.USD.price.toFixed(2);
      const change = coin.quote.USD.percent_change_24h.toFixed(2);

      return `The current price of ${symbol.toUpperCase()} is $${price} USD (24h Change: ${change}%).`;

    } catch (err) {
      return `Error fetching price: ${err.message}`;
    }
  },
  {
    name: "get_crypto_price",
    description: "Get the live price of a cryptocurrency using its symbol (BTC, ETH, SOL etc)",
    schema: z.object({
      symbol: z.string()
    })
  }
);


// ================= AGENT =================
const agent = createAgent({
  model,
  tools: [GetCryptoPrice]
});


// ================= COMPONENT =================
const ChatInterface = ({ user }) => {

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");


// ================= SEND MESSAGE =================
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

      const history = [...messages, userMsg].map(m => [
        m.sender === "user" ? "human" : "ai",
        m.text
      ]);

      const response = await agent.invoke({ messages: history });

      const last = response.messages.at(-1);

      const botMsg = {
        id: Math.random(),
        sender: "bot",
        text: typeof last.content === "string" ? last.content : "Done.",
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


// ================= ENTER KEY =================
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };


// ================= UI =================
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