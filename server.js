const express = require('express');

const app = express()
const PORT = process.env.PORT || 3001


//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static('public'))

//routing

//running
app.listen(PORT, ()=>console.log('swag on port 3001'))