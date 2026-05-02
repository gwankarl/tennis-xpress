const express = require('express');
require('dotenv').config();
const app = express();

const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
  }),
);

app.use('/api', require('./routes/authRoutes'));

app.get('/', (req, res) => res.send('My backend'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
