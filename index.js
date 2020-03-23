const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

app.use(express.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = process.env.NODE_ENV || 5000;
if(process.env.NODE_ENV === "production"){
    app.use(express.stactis("client/build"))
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
