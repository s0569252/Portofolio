const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// CREATE: Add a new fridge item
router.post('/add-item', async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).send(newItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// READ: Get all fridge items
router.get('/fridge-items', async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

// UPDATE
router.put('/update-item/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).send({ message: 'Item not found' });
    }

    const updatedItem = await item.update(req.body);
    res.status(200).send(updatedItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE: Remove a fridge item
router.delete('/delete-item/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).send({ message: 'Item not found' });
    }

    await item.destroy();
    res.status(200).send({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});



// Additional routes for UPDATE and DELETE go here...

module.exports = router;
