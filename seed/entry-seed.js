import Entry from '../module/entry.js';
import entryData from '../data/entry-data.json' assert { type: 'json' } ;
import connectToMongoDB from '../controllers/connection.js';

async function seedEntries() {
  try {
    await Entry.deleteMany();
    const entries = await Entry.create(entryData);
    console.log('Entries seeded successfully:', entries);
  } catch (error) {
    console.error('Error seeding entries:', error);
  }
}

export { seedEntries };





