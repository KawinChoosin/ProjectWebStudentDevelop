require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const port = process.env.PORT
const app = express();
const dataRoutes = require('./dataroute');

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


app.use(express.json());
app.use('/api/data', dataRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Correct path

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

const Store_mainpic = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'mainpic/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const uploadmainpic = multer({ storage: storage });

// CRUD for ImgSlide
app.post('/imgslide', upload.single('imgFile'), async (req, res) => {
  const { detail } = req.body;
  const imgPath = req.file.filename; // Save just the filename

  const imgSlide = await prisma.imgSlide.create({
    data: {
      detail,
      imgPath,
    }
  });
  res.json(imgSlide);
});

app.get('/imgslide', async (req, res) => {
  const imgSlides = await prisma.imgSlide.findMany();
  res.json(imgSlides);
});

app.delete('/imgslide/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.imgSlide.delete({ where: { id: parseInt(id) } });
  res.json({ message: 'Deleted' });
});


app.post('/images', uploadmainpic.single('imgFile'), async (req, res) => {
  try {
    const imgPath = req.file.filename; // Save just the filename

    const image = await prisma.image.create({
      data: {
        P_id: 1, // Set P_id to 1
        imgPath,
        status: false // Set status to false
      }
    });
    res.json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

app.get('/images', async (req, res) => {
  try {
    const images = await prisma.image.findMany({
      where: { P_id: 1 } // Only get images with P_id = 1
    });
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve images' });
  }
});

app.delete('/images/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.image.delete({ where: { IMG_id: parseInt(id) } });
    res.json({ message: 'Image deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

app.put('/images/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Expect status to be sent in the request body

    const updatedImage = await prisma.image.update({
      where: { IMG_id: parseInt(id) },
      data: { status }
    });

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update image status' });
  }
});

// CRUD for FilePT
app.post('/filept', upload.single('file'), async (req, res) => {
  const { name } = req.body;
  const filePath = req.file.filename; // Save just the filename

  const filePT = await prisma.filePT.create({
    data: {
      name,
      filePath,
    }
  });
  res.json(filePT);
});

app.get('/filept', async (req, res) => {
  const filePTs = await prisma.filePT.findMany();
  res.json(filePTs);
});

app.delete('/filept/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.filePT.delete({ where: { id: parseInt(id) } });
  res.json({ message: 'Deleted' });
});

app.get('/image-proxy', async (req, res) => {
  try {
    const { url } = req.query;
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    res.set('Content-Type', 'image/jpeg');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching image');
  }
});


app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
