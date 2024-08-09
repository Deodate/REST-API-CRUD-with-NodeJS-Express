const db = require('../db');

// Function to get all citizens
module.exports.getAllCitizen = async () => {
    const [rows] = await db.query("SELECT * FROM citizen");
    return rows;
};

// Function to get a citizen by ID
module.exports.getCitizenById = async (id) => {
    const [rows] = await db.query("SELECT * FROM citizen WHERE id = $1", [id]);
    return rows[0]; // Assuming id is unique, return the first (and only) row
};
