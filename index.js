const express = require('express');
const app = express();
const db = require('./db'); // Assuming this imports your PostgreSQL database connection
const citizenRouter = require('./controllers/citizen.controller');

// Middleware to use the citizenRouter for '/api/citizens' endpoint
app.use('/api/citizens', citizenRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send('Something went wrong');
});

// Test the database connection
db.query('SELECT 1')
    .then(result => {
        console.log('Connected to PostgreSQL:', result.rows[0]);

        // Start the Express server after successful database connection
        app.listen(3000, () => {
            console.log('Server started at port 3000');
        });
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL:', err.stack);
    });
