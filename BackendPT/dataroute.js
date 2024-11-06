const express = require('express');
const { getDataByPageId, createData, updateData } = require('./controllers/dataController');
const router = express.Router();

router.get('/page/:P_id', getDataByPageId);
router.post('/', createData);
router.put('/:id', updateData);

module.exports = router;
