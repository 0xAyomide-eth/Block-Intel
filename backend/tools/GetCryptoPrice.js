import 'dotenv/config'
import { tool } from "langchain"
import { z } from "zod"



export const cryptoPrice = tool(
    async ({ symbol }) => {
        try {
            let URL = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${symbol.toUpperCase()}`
            const response = await fetch(URL, {
                headers: {
                    "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
                }
            })

            if (!response.ok) {
                throw new Error(`CoinMarketCap request failed: ${response.status}`)
            }

            const data = await response.json()

            const coin = Object.values(data.data[symbol.toUpperCase()])[0];
            const price = coin.quote.USD.price.toFixed(2);
            const change = coin.quote.USD.percent_change_24h.toFixed(2);

            return `The current price of ${symbol.toUpperCase()} is $${price} USD (24h change: ${change}%).`;
        }catch(err){
            return `Error fetching crypto price data ${err.message}`
        }
    },{
        name: "get_crypto_price",
        description: "Get the live price of a cryptocurrency using its symbol like BTC, ETH, or SOL",
        schema: z.object({
            symbol: z.string()
        })
    }
)