import dotenv from 'dotenv';
import express from 'express';
// import connectToMongoDB from './controllers/connection.js';

import connectToMongoDB from './controllers/connection.js';

// import { seedQuotes } from './seed/quote-seed.js';

import { seedQuotes } from './seed/quote-seed.js';

// import { seedEntries } from './seed/entry-seed.js'

import { seedEntries } from './seed/entry-seed.js';



// import router from './routes/router.js'

import router from './routes/router.js';

dotenv.config();
const app = express();

app.use(express.static('client'));
app.use(express.json());
app.use('/api', router);

const port = process.env.PORT || 3000;

// async function startServer() {
//   try {
//     await connectToMongoDB();
//     await seedQuotes();
//     await seedEntries();
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   } catch (error) {
//     console.error('Error starting server:', error);
//   }
// }

// startServer();


export default app

