const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get data by ID
// Fetch data by Page ID (P_id)
exports.getDataByPageId = async (req, res) => {
    const { P_id } = req.params;
    try {
      const data = await prisma.data.findMany({
        where: { P_id: parseInt(P_id) },
      });
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch data' });
    }
  };
  

// Create new data
exports.createData = async (req, res) => {
  const { P_id, P_data } = req.body;
  try {
    const newData = await prisma.data.create({
      data: { P_id, P_data },
    });
    res.json(newData);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create data' });
  }
};

// Update data
exports.updateData = async (req, res) => {
  const { id } = req.params;
  const { P_data } = req.body;
  try {
    const updatedData = await prisma.data.update({
      where: { D_id: parseInt(id) },
      data: { P_data },
    });
    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update data' });
  }
};
