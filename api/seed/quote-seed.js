import mongoose from 'mongoose';
import Quote from '../module/quote.js';
import { fetchQuotes } from '../fetch/fetch-quote.js';
// import quoteData from '../data/quote-data.json' assert { type: 'json' };

import quoteData from '../data/quote-data.json' assert { type: 'json' };

import connectToMongoDB from '../controllers/connection.js';

async function seedQuotes() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');

    const thirdPartyQuotes = await fetchQuotes();
    for (const quote of thirdPartyQuotes) {
      const newQuote = new Quote(quote);
      await newQuote.save();
    }
    console.log('Third-party quotes seeded successfully');

    await Quote.deleteMany();
    await Quote.insertMany(quoteData);
    console.log('Default quotes seeded successfully');
  } catch (error) {
    console.error('Error seeding quotes:', error);
  }
}

export { seedQuotes };