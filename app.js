const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const cors = require('cors');
const PORT = 8080;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log('Running');
});
