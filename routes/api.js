const express = require('express');
const router = express.Router();
const Bot = require('../models/bot');

router.get('/Bots', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Bot.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/Bots', (req, res, next) => {
  if (req.body.action) {
    Bot.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/Bots/:id', (req, res, next) => {
  Bot.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;