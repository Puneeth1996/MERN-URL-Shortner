const express = require('express');
const connectDB = require('./config/db');

const path = require("path")


const app = express();

// Connect to database
connectDB();




app.use(express.json());


var port_number = process.env.PORT || 5000;

// Define Routes
app.use('/:code', require('./routes/index'));
app.use('/api/url', require('./routes/url'));



if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}


app.listen(port_number, () => console.log(`Server running on port ${port_number}`));
