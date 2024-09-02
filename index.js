require('dotenv').config();
const express = require('express');
const app = express();
<<<<<<< HEAD
const cors = require('cors');
const mongoose = require('mongoose');
const urlparser = require('url')
const dns = require('dns')

const {MongoClient} = require('mongodb')
const client = new MongoClient(process.env.MONGO_URI)
const db = client.db("urlshortner")
const urls = db.collection("urls")
const urlSchema = new mongoose.Schema({
  original_url: String,
  short_url: Number
});

const Url = mongoose.model('Url', urlSchema);
=======
const mongoose = require('mongoose');
>>>>>>> 7ef7da1f0c89129c77d8a4424ec3def47a451f53

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
// Basic Configuration
<<<<<<< HEAD
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

=======

app.use(cors());
app.user(express.json)
>>>>>>> 7ef7da1f0c89129c77d8a4424ec3def47a451f53
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

<<<<<<< HEAD
// API endpoint to shorten URLs
app.post('/api/shorturl', function(req, res) {
  console.log(req.body);
  const url = req.body.url;
  
  dns.lookup(urlparser.parse(url).hostname, async (err, address) => {
    if (!address) {
      res.json({ error: "Invalid URL" });
    } else {
      try {
        const urlCount = await urls.countDocuments({});
        const urlDoc = {
          original_url: url,
          short_url: urlCount
        };
        
        const result = await urls.insertOne(urlDoc);
        console.log(result);
        res.json({ original_url: url, short_url: urlCount });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while saving the URL" });
      }
    }
  });
});
app.get('/api/shorturl/:short_url',async(req,res)=>{
 const shorturl= req.params.short_url
 const urlDoc = await urls.findOne({short_url: +shorturl})
 res.redirect(urlDoc.original_url)
})
const port = process.env.PORT || 3002;
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
=======
// Your first API endpoint
app.post('/api/shorturl', function(req, res) {
  res.json({ greeting: 'hello API' });
});
// Listen on port set in environment variable or default to 3001
const port = process.env.PORT || 3001;  // Changed from 3000 to 3001
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
>>>>>>> 7ef7da1f0c89129c77d8a4424ec3def47a451f53
