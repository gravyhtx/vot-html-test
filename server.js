const express = require('express');
const Gun = require('gun');

const app = express()
const PORT = process.env.PORT || 8000


//middleware
app.use(Gun.serve).use(express.static('public'));

// Standard Express Middleware
//----------------------------
// app.use(express.urlencoded({extended: true}));
// app.use(express.json())
// app.use(express.static('public'))

//routing

//running
const server = app.listen(PORT);
Gun({file: 'data.json', web: server})