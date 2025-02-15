import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gym-website')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'dtnakrubh',
  api_key: '553596293654989',
  api_secret: '-T0AdHZ3guFzYDfcJoZCcNfoyB4'
});

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'fitness-platinum',
    allowed_formats: ['jpg', 'jpeg', 'png']
  }
});

const upload = multer({ storage: storage });

// Review SchemaT
const reviewSchema = new mongoose.Schema({
  author: String,
  rating: Number,
  text: String,
  profilePhoto: String,
  date: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);

// Image Schema
const imageSchema = new mongoose.Schema({
  url: String,
  publicId: String,
  description: String,
  category: String,
  uploadedAt: { type: Date, default: Date.now }
});

const Image = mongoose.model('Image', imageSchema);

// Routes
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Image upload route
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await Image.create({
      url: req.file.path,
      publicId: req.file.filename,
      description: req.body.description,
      category: req.body.category
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all images
app.get('/api/images', async (req, res) => {
  try {
    const images = await Image.find().sort({ uploadedAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete image
app.delete('/api/images/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    await cloudinary.uploader.destroy(image.publicId);
    await Image.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});