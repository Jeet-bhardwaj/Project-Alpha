import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gym-website')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Review SchemaT
const reviewSchema = new mongoose.Schema({
  author: String,
  rating: Number,
  text: String,
  profilePhoto: String,
  date: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);

// Routes
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});