const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send("Hello world!");
});

const PORT = process.env.PORT;
app.listen(PORT);
