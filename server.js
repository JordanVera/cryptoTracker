const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      routes =  require('./routes'),
      app = express(),
      db = require('./models'),
      session = require('express-session'),
      PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes)
app.use(session({ 
secret: 'fraggle-rock',
resave: false, //required
saveUninitialized: false //required
 })
);

app.use( (req, res, next) => {

    console.log('It\'s working');
  
    return next();
  
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cryptoTracker");

// const seedArr = [
//     {
//         username: 'Vera.jojo96@gmail.com',
//         password: 'Jordan96',
//         portfolio: [{
//                 ticker: 'XRP',
//                 shares: 200,
//                 buyPrice: .22
//             },
//             {
//                 ticker: 'EOX',
//                 shares: 100,
//                 buyPrice: 1.12
//             }
//         ]
//     },
//     {
//         username: 'Ivan@gmail.com',
//         password: 'Pawelek18',
//         portfolio: [{
//                 ticker: 'BTC',
//                 shares: 1,
//                 buyPrice: 200
//             },
//             {
//                 ticker: 'ETH',
//                 shares: 100,
//                 buyPrice: 30
//             }
//         ]
//     }
// ]

// db.User.insertMany(seedArr,function(error, docs) {
//     if (error) {
//         console.log(error)
//     }
// })

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})
