import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
  entryId: String,
  title: String,
  content: String,
  quote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quote',
  },
});

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;




