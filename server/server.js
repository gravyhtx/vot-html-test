const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
if(process.env.NODE_ENV === "production") {
  app.use(expres.static("client/build"));
}
app.use(
  session ({
    secret: 'icy-haven',
    resave: false, //required
    saveUninitialized: false, //required
  })
)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/vot");

app.use(routes)

app.listen(PORT, function(){
  console.log(`API server now on port ${PORT}!`)
})