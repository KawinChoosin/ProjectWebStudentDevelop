const express = require('express');
const upload = require('../middlewares/uploadimgslide');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');

// Route to upload image and create an imgslide entry
router.post('/upload', upload.single('img'), async (req, res) => {
    try {
      const { P_id} = req.body;
      const imgPath = req.file ? `/public/imgslide/${req.file.filename}` : null;
  
      const newImageSlide = await prisma.image.create({
        data: {
          P_id: parseInt(P_id),
          imgPath,
        },
      });
  
      res.status(201).json({ success: true, data: newImageSlide });
    } catch (error) {
      console.error('Error saving image slide:', error);
      res.status(500).json({ success: false, message: 'Failed to save image slide.' });
    }
  });

// Fetch all imgslides by status
router.get('/show', async (req, res) => {
  try {
    const imgslides = await prisma.image.findMany({
      where: { status : true  },
      orderBy: { IMG_id: 'asc' },
      include: { Page: true }
    });
    res.status(200).json({ success: true, data: imgslides });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching imgslides.' });
  }
});

// Fetch all imgslides by status
router.get('/show-all', async (req, res) => {
  try {
    const imgslides = await prisma.image.findMany({
      orderBy: { IMG_id: 'asc' },
      include: { Page: true }
    });
    res.status(200).json({ success: true, data: imgslides });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching imgslides.' });
  }
});



// Update imgslide status
router.put('/update-status', async (req, res) => {
  try {
    const { IMG_id, status } = req.body;

    const imgslide = await prisma.image.update({
      where: { IMG_id} ,
      data: {status}
    });

    res.status(200).json({ success: true, data: imgslide });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ success: false, message: 'Error updating imgslide status.' });
  }
});

router.delete('/delete', async (req, res) => {
  const { IMG_id } = req.body;
  try {
    // Retrieve the company record to get the file path
    const image = await prisma.image.findUnique({
      where: { IMG_id: parseInt(IMG_id) }
    });

    if (!image) {
      return res.status(404).json({ success: false, message: 'Company not found' });
    }

    const relativeFilePath = image.imgPath;

    // Get the absolute path to your project directory, one level up from your `src` folder
    const projectRoot = path.resolve(__dirname, '../../'); // Adjust this if needed

    // Construct the full file path by combining the project root and the relative path
    const filePath = path.join(projectRoot, relativeFilePath);

    // Check if the file exists and delete it
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Deleted file at path: ${filePath}`);
    } else {
      console.log(`File not found at path: ${filePath}`);
    }

    // Delete the company record from the database
    await prisma.image.delete({
      where: { IMG_id: parseInt(IMG_id) }
    });

    res.json({ success: true, message: 'Company and associated file deleted successfully' });
  } catch (error) {
    console.error('Error deleting company:', error);
    res.status(500).json({ success: false, message: 'Failed to delete company' });
  }
});

module.exports = router;
