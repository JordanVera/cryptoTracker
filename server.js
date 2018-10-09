const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      routes =  require('./routes'),
      app = express(),
      db = require('./models'),
      session = require('express-session'),
      passport = require('passport'),
      googleStrategy = require('passport-google-oauth').OAuth2Strategy,
      PORT = process.env.PORT || 3001;


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'anything',
    saveUninitialized: true,
    resave: true,
    cookie: {maxAge: 60000 * 30}
 }))

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cryptoTracker", { useNewUrlParser: true });

// const seedArr = [
//     {
//         uid: "3XQlmIAvNAfAEp9dI6BlK2sj5g32",
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
//     }
    // ,
    // {
    //     username: 'Ivan@gmail.com',
    //     password: 'Pawelek18',
    //     portfolio: [{
    //             ticker: 'BTC',
    //             shares: 1,
    //             buyPrice: 200
    //         },
    //         {
    //             ticker: 'ETH',
    //             shares: 100,
    //             buyPrice: 30
    //         }
    //     ]
    // }
// ]

// db.User.insertMany(seedArr,function(error, docs) {
//     if (error) {
//         console.log(error)
//     }
// })

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})
