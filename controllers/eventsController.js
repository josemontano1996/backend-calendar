const { response } = require('express');
const Event = require('../models/Events');

const getEvents = async (req, res = response) => {
  res.json({ ok: true, msg: 'obtain event' });
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    await event.save();
    res.json({ ok: true, event });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'Contact admin' });
  }
};

const updateEvent = async (req, res = response) => {
  res.json({ ok: true, msg: 'update event' });
};

const deleteEvent = async (req, res = response) => {
  res.json({ ok: true, msg: 'delete event' });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
