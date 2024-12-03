// routes/company.js
const express = require('express');
const upload = require('../middlewares/upload');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');

// Route to handle form data and image upload
router.post('/create', upload.single('C_pic'), async (req, res) => {
  try {
    const { C_name, C_address, C_email, C_tel, C_detail, C_coordinate, P_id } = req.body;
    const C_pic = req.file ? `/public/company/${req.file.filename}` : null;

    // Insert form data into the database using Prisma
    const company = await prisma.company.create({
      data: {
        P_id: parseInt(P_id),  // Convert P_id to integer
        C_name,
        C_address,
        C_email,
        C_pic,
        C_tel,
        C_detail,
        C_coordinate: C_coordinate || null 
      }
    });

    res.status(201).json({ success: true, data: company });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while saving data.' });
  }
});

router.get('/data', async (req, res) => {
  try {
    // Fetch all companies from the database, sorted by index in ascending order
    const companies = await prisma.company.findMany({
      orderBy: {
        index: 'asc',  // Sort by index in ascending order
      },
      include: {
        Page: true  // Optionally include related 'Page' data
      }
    });

    res.status(200).json({ success: true, data: companies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching data.' });
  }
});

router.get('/getcompany/:id', async (req, res) => {
  const { id } = req.params; // Extract the 'id' from the request parameters

  try {
    // Fetch the company by its ID from the database
    const company = await prisma.company.findUnique({
      where: {
        id: parseInt(id, 10), // Ensure the ID is parsed as an integer
        status: "PASS",
      }
    });

    // Check if the company exists
    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found.' });
    }

    res.status(200).json({ success: true, data: company });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching the company.' });
  }
});


router.get('/WAIT', async (req, res) => {
  try {
    const companies = await prisma.company.findMany({
      where: {
        status: 'WAIT',  // Correctly set the filter for the status field
      },
      orderBy: {
        index: 'asc',  // Sort by index in ascending order
      },
      include: {
        Page: true,  // Optionally include related 'Page' data
      },
    });
    res.status(200).json({ success: true, data: companies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching data.' });
  }
});

router.get('/PASS', async (req, res) => {
  try {
    const companies = await prisma.company.findMany({
      where: {
        status: 'PASS',  // Correctly set the filter for the status field
      },
      orderBy: {
        index: 'asc',  // Sort by index in ascending order
      }
    });
    res.status(200).json({ success: true, data: companies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching data.' });
  }
});

// router.get('/DELETE', async (req, res) => {
//   try {
//     const companies = await prisma.company.findMany({
//       where: {
//         status: 'DELETE',  // Correctly set the filter for the status field
//       },
//       orderBy: {
//         index: 'asc',  // Sort by index in ascending order
//       },
//       include: {
//         Page: true,  // Optionally include related 'Page' data
//       },
//     });
//     res.status(200).json({ success: true, data: companies });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'An error occurred while fetching data.' });
//   }
// });


router.put('/update-show-status', async (req, res) => {
  try {
    const { id, show_status: status } = req.body; // Map show_status to status
    console.log("Updating:", { id, status }); // For verification

    const company = await prisma.company.update({
      where: { id },
      data: { status }, // Use mapped status value
    });

    res.status(200).json({ success: true, data: company });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ success: false, message: 'Error updating show_status.' });
  }
});


router.put('/swap-index', async (req, res) => {
  const { rowId, direction } = req.body;

  try {
    const current = await prisma.company.findUnique({ where: { id: rowId } });
    const { index: currentIndex, status } = current;

    // Find the closest company with the same status in the given direction
    const swapWith = await prisma.company.findFirst({
      where: { 
        status, // Match the same status
        index: direction === 'up' ? { lt: currentIndex } : { gt: currentIndex }, // Find in the correct direction
      },
      orderBy: {
        index: direction === 'up' ? 'desc' : 'asc', // Closest in the direction
      },
    });

    if (swapWith) {
      // Perform the swap
      await prisma.company.update({
        where: { id: rowId },
        data: { index: swapWith.index },
      });

      await prisma.company.update({
        where: { id: swapWith.id },
        data: { index: currentIndex },
      });

      // Return updated list of companies within the same status, ordered by index
      const updatedCompanies = await prisma.company.findMany({
        where: { status },
        orderBy: { index: 'asc' },
      });

      res.status(200).json({ success: true, data: updatedCompanies });
    } else {
      res.status(400).json({ success: false, message: 'No valid swap target found in the given direction.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error swapping indices.' });
  }
});



// Assuming you're using Express
router.delete('/delete', async (req, res) => {
  const { id } = req.body;

  try {
    // Retrieve the company record to get the file path
    const company = await prisma.company.findUnique({
      where: { id: parseInt(id) }
    });

    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found' });
    }

    const relativeFilePath = company.C_pic;

    // Get the absolute path to your project directory, one level up from your `src` folder
    const projectRoot = path.resolve(__dirname, '../../'); // Adjust this if needed

    // Construct the full file path by combining the project root and the relative path
    const filePath = path.join(projectRoot, relativeFilePath);
    console.log(filePath)
    // Check if the file exists and delete it
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Deleted file at path: ${filePath}`);
    } else {
      console.log(`File not found at path: ${filePath}`);
    }

    // Delete the company record from the database
    await prisma.company.delete({
      where: { id: parseInt(id) }
    });

    res.json({ success: true, message: 'Company and associated file deleted successfully' });
  } catch (error) {
    console.error('Error deleting company:', error);
    res.status(500).json({ success: false, message: 'Failed to delete company' });
  }
});



module.exports = router;
