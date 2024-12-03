// app.js
require('dotenv').config();
const express = require('express');
const companyRoutes = require('./routes/company');
const imgslideRoutes = require('./routes/imgslide');
const newsRoutes = require('./routes/news');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
app.use(helmet());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public'))); // Serve uploaded images

app.use('/api/company', companyRoutes);
app.use('/api/imgslide', imgslideRoutes);
app.use('/api/news', newsRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
