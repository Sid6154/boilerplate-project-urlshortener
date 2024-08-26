require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
// Basic Configuration

app.use(cors());
app.user(express.json)
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.post('/api/shorturl', function(req, res) {
  res.json({ greeting: 'hello API' });
});
// Listen on port set in environment variable or default to 3001
const port = process.env.PORT || 3001;  // Changed from 3000 to 3001
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});