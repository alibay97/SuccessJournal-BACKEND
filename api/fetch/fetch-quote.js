import axios from 'axios';
import dotenv from 'dotenv';
import Quote from '../module/quote.js';

async function fetchQuotes() {
  const apiKey = process.env.API_KEY;

  const response1 = await axios.get(`https://zenquotes.io/api/quotes/${apiKey}&keyword=inspiration`);
  const response2 = await axios.get(`https://zenquotes.io/api/quotes/author/napoleon-hill/${apiKey}`);
  const response3 = await axios.get(`https://zenquotes.io/api/quotes/author/james-allen/${apiKey}`);

  console.log('Response 1:', response1.data);
  console.log('Response 2:', response2.data);
  console.log('Response 3:', response3.data);
  
  const data1 = response1.data;
  const data2 = response2.data;
  const data3 = response3.data;
  
  const quotes1 = data1.map((quote) => ({
    quoteText: quote.q,
    quoteAuthor: quote.a,
    quoteSource: quote.s,
    quoteCategory: null,
  }));

  const quotes2 = data2.map((quote) => ({
    quoteText: quote.q,
    quoteAuthor: quote.a,
    quoteSource: quote.s,
    quoteCategory: quote.c,
  }));

  const quotes3 = data3.map((quote) => ({
    quoteText: quote.q,
    quoteAuthor: quote.a,
    quoteSource: quote.s,
    quoteCategory: quote.c,
  }));

  return [...quotes1, ...quotes2, ...quotes3];
}

export { fetchQuotes };
