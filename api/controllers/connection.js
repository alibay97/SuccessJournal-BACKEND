import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the MongoDB database');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default connectToMongoDB;


















// //api quote
// import fetch from 'node-fetch';

// const apiUrl1 = 'https://zenquotes.io/authors/napoleon-hill/91ff9bfe0873e9b81e65d8c907fa0c66 ';
// const apiUrl2 = 'https://zenquotes.io/authors/james-allen/91ff9bfe0873e9b81e65d8c907fa0c66 ';
// const apiUrl3 = 'https://zenquotes.io/keywords/inspiration/91ff9bfe0873e9b81e65d8c907fa0c66 ';
// const apiUrl4 = 'https://zenquotes.io/keywords/success/91ff9bfe0873e9b81e65d8c907fa0c66 ';

// async function fetchQuotes(apiUrl) {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log('Error:', error);
//     return null;
//   }
// }

// async function fetchAndRenderQuotes() {
//   const quotes1 = await fetchQuotes(apiUrl1);
//   const quotes2 = await fetchQuotes(apiUrl2);
//   const quotes3 = await fetchQuotes(apiUrl3);
//   const quotes4 = await fetchQuotes(apiUrl4);

//   console.log('Quotes from Napoleon Hill:', quotes1);
//   console.log('Quotes from James Allen:', quotes2);
//   console.log('Quotes on Inspiration:', quotes3);
//   console.log('Quotes on Success:', quotes4);

//   // Render or use the quotes in your desired way
//   // For example, res.render('quotes', { quotes1, quotes2, quotes3, quotes4 });
// }

// export { fetchAndRenderQuotes };
