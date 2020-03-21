const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded(( extended: false )));

const db = require('./config/key').mongoURI

mongoose.connect(db)
    .then(onfullfilled:() => console.log('MongoDB connected.'))
    .catch(onrejected: err => console.log(err));

app.get('/', (req, res) => {
    res.send("Hello World this is with nodemon . . .");
});

const port =  process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
