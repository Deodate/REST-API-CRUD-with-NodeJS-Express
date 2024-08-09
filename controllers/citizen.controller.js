const express = require('express'),
router = express.Router()

const service = require('../service/citizen.service')

router.get('/', async(req, res) => {
    const citizen = await service.getAllCitizen()
    res.send(citizen)
})

module.exports = router;