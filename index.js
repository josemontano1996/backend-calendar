const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();

//Database
dbConnection();

//CORS
app.use(cors());

//Public dir
app.use(express.static('public'));

//Body parsing
app.use(express.json());

//Routes
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
