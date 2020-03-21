const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// const URL = require('./models/Urls')


const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.log(err));


const shorten = require('./routes/api/shorten');
app.use('/api/shorten', shorten)

app.get('/', (req, res) => {
    res.send("Hello World this is with nodemon . . .");
});

const port =  process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
