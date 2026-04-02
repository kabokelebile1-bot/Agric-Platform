const express = require('express');
const router = express.Router();

// Mock data for example purposes
let experts = [];

// GET /experts - Retrieve all experts
router.get('/experts', (req, res) => {
    res.json(experts);
});

// POST /experts - Create a new expert
router.post('/experts', (req, res) => {
    const newExpert = req.body;
    experts.push(newExpert);
    res.status(201).json(newExpert);
});

// PUT /experts/:id - Update an expert by ID
router.put('/experts/:id', (req, res) => {
    const { id } = req.params;
    const index = experts.findIndex(expert => expert.id === parseInt(id));
    if (index !== -1) {
        experts[index] = {...experts[index], ...req.body};
        res.json(experts[index]);
    } else {
        res.status(404).json({ message: 'Expert not found.' });
    }
});

// DELETE /experts/:id - Delete an expert by ID
router.delete('/experts/:id', (req, res) => {
    const { id } = req.params;
    experts = experts.filter(expert => expert.id !== parseInt(id));
    res.status(204).send();
});

module.exports = router;