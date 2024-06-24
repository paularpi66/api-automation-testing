const newman = require ('newman');
require('dotenv').config();
newman.run ({
    //collection: require ('./collection/dmoney.json'),
    collection: `https://api.postman.com/collections/18602654-1d35d5d0-b4b4-42f6-b689-6f0aaf555a0a?access_key=${process.env.ACCESS_KEY}`,
    //environment:require ('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
              htmlextra: {
                export: './Reports/report.html',
              }
    }
}, function (err) {
    if (err) {throw err;}
    console.log('collection run complete')
});