const express = require('express');
const app = express();
const db = require('./db');
const citizenRouter = require('./controllers/citizen.controller');

// Use the router
app.use('/api/citizens', citizenRouter);

// Test the database connection
db.query('SELECT 1')
    .then(res => {
        console.log('Connected to PostgreSQL:', res.rows[0]);

        // Start the Express server
        app.listen(3000, () => {
            console.log('Server started at port 3000');
        });
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL:', err.stack);
    });
