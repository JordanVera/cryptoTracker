const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      routes =  require('./routes'),
      app = express(),
      PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cryptoTracker");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})
