const express = require('express');
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, '/public/dist/public/')))
require('./server/routes/routes')(app);


app.listen(8000, ()=>{
    console.log("Server is running in port 8000");
})