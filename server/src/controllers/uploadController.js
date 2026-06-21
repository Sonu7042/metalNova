const cloudinary = require('../config/cloudinary');

exports.uploadProductImage = (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No image file provided' });

  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: 'metalnova_products', resource_type: 'image' },
    (error, result) => {
      if (error) return res.status(500).json({ error: `Failed to upload image: ${error.message}` });
      res.json({ imageUrl: result.secure_url });
    }
  );
  uploadStream.end(req.file.buffer);
};
