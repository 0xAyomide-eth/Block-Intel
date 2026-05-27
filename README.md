```markdown
# Block-intel: Crypto Research Agent

A crypto research platform powered by Langchain, Google Gemini AI, Tavily API, and CoinMarketCap API that provides real-time market data, sentiment analysis, and actionable crypto insights.

## How to Use (After Cloning)

Follow these steps to get the project running locally:

### Prerequisites
- Node.js installed on your machine
- Accounts on the following platforms (all free tiers work)

### Step 1: API Key Setup

| Service | What you need | Sign up link |
|---------|---------------|--------------|
| Supabase | URL + API Key | [https://supabase.com](https://supabase.com) |
| CoinMarketCap | API Key | [https://coinmarketcap.com/api/](https://coinmarketcap.com/api/) |
| Tavily | API Key | [https://tavily.com](https://tavily.com) |
| Google Gemini | API Key | [https://aistudio.google.com/](https://aistudio.google.com/) |

### Step 2: Set up Environment Variables

```bash
# Copy the example files and rename them to .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Then open both `.env` files and fill in your actual API keys:

#### Backend `.env` (inside `/backend` folder)
```env
COINMARKETCAP_API_KEY=your_coinmarketcap_api_key_here
TAVILY_API_KEY=your_tavily_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

#### Frontend `.env` (inside `/frontend` folder)
```env
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here
BACKEND_URL=http://localhost:3000
```

### Step 3: Install & Run

```bash
# Backend
cd backend
npm install
node server.js

# Frontend (open a new terminal)
cd frontend
npm install
npm run dev
```

### Step 4: Open the App
Visit `http://localhost:5173` in your browser.

---

## Tech Stack

### Frontend
- **React.js**
- **CSS**

### Backend
- **Node.js** 
- **Express.js** 
- **Supabase**
- **Langchain**

### APIs & Services
- **Google Gemini AI** - Intelligent market analysis and insights
- **Tavily API** - Real-time news and search intelligence
- **CoinMarketCap API** - Live crypto prices, market cap, and volume data

## Features

### Data Integration
- **CoinMarketCap API** - Live prices, market cap rankings, volume data
- **Tavily API** - Real-time news, social media sentiment, market trends  
- **Gemini AI** - Intelligent market analysis 

### Core Capabilities
- Research any cryptocurrency with natural language
- Track live prices
- Analyze market sentiment from news and social media
- Compare multiple cryptocurrencies side-by-side

## Use Cases

- Real-time crypto price tracking and analysis
- News aggregation and sentiment analysis
- Research and educational purposes
```
