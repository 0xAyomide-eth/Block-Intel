import { tool } from "langchain";
import { z } from "zod";
import 'dotenv/config';

export const cryptoResearch = tool(
  async ({ query }) => {
    try {
      const response = await fetch("https://api.tavily.com/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          api_key: process.env.TAVILY_API_KEY,
          query: query,
          search_depth: "advanced",
          include_answer: true,
          max_results: 5
        })
      });

      if (!response.ok) {
        throw new Error(`Tavily request failed: ${response.status}`);
      }

      const data = await response.json();
      return `
      Answer: ${data.answer}
      Sources:
      ${data.results.map(r => `- ${r.title}: ${r.url}`).join("\n")}
      `;

    } catch (err) {
      return `Error fetching research data: ${err.message}`;
    }
  },
  {
    name: "crypto_research",
    description:
      "Search the web for latest crypto news, trends, and explanations. Use this for questions about crypto developments, news, or analysis.",
    schema: z.object({
      query: z.string()
    })
  }
);