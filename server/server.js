const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const uri = 
    'mongodb+srv://mena120600:NoRHAdQJXOrdruUg@cluster0.jq78hyu.mongodb.net/Social-Chart-Dashboard?retryWrites=true&w=majority&appName=Cluster0';


// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const coworkerRoutes = require("./routes/coworker");

app.use("/", coworkerRoutes);
app.listen(8000, () => {
    console.log("Server started on port 8000");
});

mongoose.connect(uri)
.then(() => {
    console.log('connected to MongoDB')
})
.catch(() => {
    console.log(error)
});
