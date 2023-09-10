const dotenv = require('dotenv').config({ path: './.env' });
let express = require('express');
let app = express();

// console.log("Hello World");

// app.get('/', function(req, res){
//     res.send("Hello Express");
// })

//as the above snippet isn't getting through test cases, using below approach
app.get('/json', function(req, res){ //manipulating res using env var
    if(process.env['MESSAGE_STYLE'] === 'uppercase'){
        res.json({"message":"Hello json".toUpperCase()});
    } else {
        res.json({"message":"Hello json".toLowerCase()});
    }
})

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){ //serving a file
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
})

// app.get('/json', function(req, res){ //serving a JSON object
//     res.send({"message": "Hello json"});
// })

// app.get('/json', function(req, res){ //manipulating res using env var
//     let msg = "Hello json";
//     res.json({"message": process.env.MESSAGE_STYLE === 'uppercase'?msg.toUpperCase():msg.toLowerCase()});
// })

 module.exports = app;
