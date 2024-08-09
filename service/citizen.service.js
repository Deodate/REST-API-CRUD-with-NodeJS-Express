const db = require('../db')

module.exports.getAllCitizen = async () => {
    const [rows] = await db.query("SELECT * FROM citizen")
    .catch(err => console.log(err))
    return rows;
}