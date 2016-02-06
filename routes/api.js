var express = require('express');
var mongoose = require('mongoose');
var Event = require('../models/Event');
var router = express.Router();

//Get events
router.get('/events', function(req, res) {
  Event.find(function(err, events) {
    if (err) {
      res.send(err);
    }
    res.json(events);
  });
});

//create events
router.post('/events', function(req, res) {
  Event.create({
      date: req.body.date,
      images: req.body.images
    },
    function(err, event) {
      if (err) {
        res.send(err);
      }
      // get and return all the events after you create another
      Event.find(function(err, events) {
        if (err) {
          res.send(err);
        }
        res.json(events);
      });
    });
});

//delete event
router.delete('/events/:event_id', function(req, res) {
  Event.remove({
    _id: req.params.event_id
  }, function(err, event) {
    if (err) {
      res.send(err);
    }
    // get and return all the events after you delete one
    Event.find(function(err, events) {
      if (err) {
        res.send(err);
      }
      res.json(events);
    });
  });
});

module.exports = router;
