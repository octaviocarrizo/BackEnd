const express = require ('express');
const cors = require('cors');
const app = express();
const mongoose = require ('mongoose');

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.use('/api/SigUp', require("./src/routes/SigUp"));
app.use('/api/login', require("./src/routes/SigUp"));
app.use('/api/User', require("./src/routes/SigUp"));
app.use('/api/allUsers', require("./src/routes/SigUp"));
app.use('/api/refresh-token', require("./src/routes/SigUp"));
app.use('/api/Singnout', require("./src/routes/SigUp"));

app.get("/", (req, res) =>  {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is Conectin: ${port}`)
})