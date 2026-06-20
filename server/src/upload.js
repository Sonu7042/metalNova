const cloudinary = require('cloudinary').v2;
const multer = require('multer');

// Configure Cloudinary from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Multer storage in memory
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // limit size to 5MB
});

// Cloudinary Stream Uploader
const uploadProductImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file provided' });
  }

  // Upload file buffer stream to Cloudinary
  const uploadStream = cloudinary.uploader.upload_stream(
    {
      folder: 'metalnova_products',
      resource_type: 'image'
    },
    (error, result) => {
      if (error) {
        console.error('Cloudinary Upload Error:', error);
        return res.status(500).json({ error: 'Failed to upload image to Cloudinary: ' + error.message });
      }
      // Return the uploaded secure URL
      res.json({ imageUrl: result.secure_url });
    }
  );

  uploadStream.end(req.file.buffer);
};

module.exports = {
  upload,
  uploadProductImage
};
