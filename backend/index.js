const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors'); // Add CORS to prevent frontend issues
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Allow frontend to access API

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dtnakrubh',
  api_key: '553596293654989',
  api_secret: '-T0AdHZ3guFzYDfcJoZCcNfoyB4'
});

// Endpoint to fetch images from the 'fitness-platinum' folder in Cloudinary
app.get('/api/images', async (req, res) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'fitness-platinum/', // Fetch images only from this folder
      max_results: 30
    });

    // Extract only required details (URLs)
    const images = result.resources.map((img) => ({
      url: img.secure_url,
      public_id: img.public_id
    }));

    res.json(images);
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    res.status(500).send('Error fetching images');
  }
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
