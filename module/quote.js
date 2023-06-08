import mongoose from 'mongoose'

const quoteSchema = new mongoose.Schema({
  quoteId: String,
  quoteText: String,
  quoteAuthor: String,
  quoteSource: String,
  quoteCategory: {
    type: String,
    default: null,
  },
});

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;


