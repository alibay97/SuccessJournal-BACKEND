import express from 'express';
import Entry from '../module/entry.js';
import Quote from '../module/quote.js';
import { fetchQuotes } from '../fetch/fetch-quote.js';
import fetch from 'node-fetch';


const router = express.Router();

// GET /api/entries
router.get('/api/entries', async (req, res) => {
  try {
    const entries = await Entry.find({});
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving journal entries', error });
  }
});


// GET /api/quotes
router.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await fetchQuotes(); // Fetch third-party quotes
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving quotes', error });
  }
});

// POST /api/entries

router.post('/api/entries', async (req, res) => {
  const { Id, title, content, quote } = req.body;
  try {
    const newEntry = new Entry({ Id, title, content, quote });
    const savedEntry = await newEntry.save();
    const completeEntry = await Entry.findById(savedEntry._id); // Fetch the complete entry data
    res.json(completeEntry);
  } catch (error) {
    res.status(500).json({ message: 'Error creating journal entry', error });
  }
});


// GET /api/entries/:id
router.get('/api/entries/:id', async (req, res) => {
  const entryId = req.params.id;
  try {
    const entry = await Entry.findById(entryId);
    if (!entry) {
      res.status(404).json({ message: 'Journal entry not found' });
    } else {
      res.json(entry);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving journal entry', error });
  }
});

// PUT /api/entries/:id
router.put('/api/entries/:id', async (req, res) => {
  const entryId = req.params.id;
  const { Id, title, content, quote} = req.body;
  try {
    const updatedEntry = await Entry.findByIdAndUpdate(entryId, { Id, title, content, quote }, { new: true });
    if (!updatedEntry) {
      res.status(404).json({ message: 'Journal entry not found' });
    } else {
      res.json(updatedEntry);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating journal entry', error });
  }
});

// DELETE /api/entries/:id
router.delete('/api/entries/:id', async (req, res) => {
  const entryId = req.params.id;
  try {
    const deletedEntry = await Entry.findByIdAndDelete(entryId);
    if (!deletedEntry) {
      res.status(404).json({ message: 'Journal entry not found' });
    } else {
      res.json(deletedEntry);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting journal entry', error });
  }
});

export default router;