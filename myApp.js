const dotenv = require('dotenv').config({ path: './.env' });
let express = require('express');
let app = express();

// console.log("Hello World");

// app.get('/', function(req, res){
//     res.send("Hello Express");
// })

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){ //serving a file
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
})

// app.get('/json', function(req, res){ //serving a JSON object
//     res.send({"message": "Hello json"});
// })

app.get('/json', function(req, res){ //manipulating res using env var
    let msg = "Hello json";
    function formatMessage(m){
        if(process.env.MESSAGE_STYLE === 'uppercase'){
            return m.toUpperCase();
        } else {
            return m.toLowerCase();
        }
    }
    res.send({"message": formatMessage(msg)});
})




































 module.exports = app;
