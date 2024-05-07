// defines routes for the API endpoints
const express = require('express');
const cowController = require('../controllers/cowController');

const router = express.Router();

// to get all cows
router.get('/', (req, res) => {
    const cows = cowController.getCows();
    res.json(cows);
});

// to get cows by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cow = cowController.getCowById(id);
    if (cow) {
        res.json(cow);
    } else {
        res.status(404).send('Cow not found');
    }
});

// to update the cow
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    const updatedCow = cowController.updatedCow(id, data);
    if (updatedCow) {
        res.json(updatedCow);
    } else {
        res.status(404).send('Cow not found');
    }
});

module.exports = router;