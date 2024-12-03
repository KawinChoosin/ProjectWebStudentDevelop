const express = require('express');
const upload = require('../middlewares/uploadiconnews');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');

router.post('/upload', upload.single('imgPath'), async (req, res) => {
    try {
        const { P_id,Url,Url_name} = req.body;
        const imgPath = req.file ? `/public/news/${req.file.filename}` : null;
  
        const url_link = await prisma.news.create({
            data: {
              P_id: parseInt(P_id),
              Url,
              Url_name,
              imgPath
            },
          });
        res.status(200).json({ success: true, data: url_link });
    }catch{
        console.error("Update error:", error);
        res.status(500).json({ success: false, message: 'Failed to save URL.' });
    }
});

router.get('/show', async (req, res) => {
    try {
      const url_link = await prisma.news.findMany({
        where: { status : true  },
        orderBy: { link_id: 'asc' },
        include: { Page: true }
      });
      res.status(200).json({ success: true, data: url_link });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error fetching url_link.' });
    }
  });
  
  // Fetch all imgslides by status
  router.get('/show-all', async (req, res) => {
    try {
      const url_link = await prisma.news.findMany({
        orderBy: { link_id: 'asc' },
        include: { Page: true }
      });
      res.status(200).json({ success: true, data: url_link });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error fetching url_link.' });
    }
  });
  
  router.put('/update-status', async (req, res) => {
    try {
      const { link_id, status } = req.body;
  
      const url_link = await prisma.news.update({
        where: { link_id} ,
        data: {status}
      });
  
      res.status(200).json({ success: true, data: url_link });
    } catch (error) {
      console.error("Update error:", error);
      res.status(500).json({ success: false, message: 'Error updating url_link status.' });
    }
  });

  router.delete('/delete', async (req, res) => {
    const { link_id } = req.body;
    try {
      // Retrieve the company record to get the file path
      const news = await prisma.news.findUnique({
        where: { link_id: parseInt(link_id) }
      });
  
      if (!news) {
        return res.status(404).json({ success: false, message: 'news not found' });
      }
  
      const relativeFilePath = news.imgPath;
  
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
      await prisma.news.delete({
        where: { link_id: parseInt(link_id) }
      });
  
      res.json({ success: true, message: 'Company and associated file deleted successfully' });
    } catch (error) {
      console.error('Error deleting company:', error);
      res.status(500).json({ success: false, message: 'Failed to delete company' });
    }
  });
  
  module.exports = router;
