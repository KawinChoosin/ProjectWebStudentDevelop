const express = require('express');
const multer = require('multer');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'ImageSlide/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Endpoint for uploading file
app.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
  
    const { info } = req.body;
    const filePath = req.file.path;  // Get file path from Multer
  
    try {
      const newFile = await prisma.file.create({
        data: {
          filePath: filePath,
          description: info,
        },
      });
  
      res.status(200).json({ message: 'File uploaded successfully!', data: newFile });
    } catch (error) {
      console.error('Error saving file to database:', error);
      res.status(500).json({ message: 'Error uploading file' });
    }
  });

app.get('/files', async (req, res) => {
    try {
      const files = await prisma.file.findMany();
      res.json(files);
    } catch (error) {
      res.status(500).send('Error retrieving files');
    }
  });
  

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'ImageSlide')));

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
