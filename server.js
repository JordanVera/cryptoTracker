const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      routes =  require('./routes'),
      app = express(),
      db = require('./models'),
      PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cryptoTracker");

const seedArr = [
    {
        first_name: 'Jordan',
        sur_name: 'Vera',
        portfolio: [{
                ticker: 'XRP',
                shares: 200,
                buyPrice: .22
            },
            {
                ticker: 'EOX',
                shares: 100,
                buyPrice: 1.12
            }
        ]
    },
    {
        first_name: 'Ivan',
        sur_name: 'Pawelek',
        portfolio: [{
                ticker: 'BTC',
                shares: 1,
                buyPrice: 200
            },
            {
                ticker: 'ETH',
                shares: 100,
                buyPrice: 30
            }
        ]
    }
]

db.User.insertMany(seedArr,function(error, docs) {
    if (error) {
        console.log(error)
    }
})

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})
