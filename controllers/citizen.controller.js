const express = require('express');
const router = express.Router();
const service = require('../service/citizen.service');

// Route to get all citizens
router.get('/', async (req, res) => {
    const citizens = await service.getAllCitizen();
    res.send(citizens);
});

// Route to get a specific citizen by ID
router.get('/:id', async (req, res) => {
    const citizen = await service.getCitizenById(req.params.id);
    res.send(citizen);
});

module.exports = router;
