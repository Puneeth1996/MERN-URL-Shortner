const express = require('express');
const connectDB = require('./config/db');

const path = require("path")


const app = express();

// Connect to database
connectDB();

app.use(express.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));




const PORT = server.listen(process.env.NODE_ENV || 5000);



if (process.env.NODE_ENV === 'production') {
    app.use(express.static( './client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
