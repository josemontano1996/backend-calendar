const { response } = require('express');
const Event = require('../models/Events');

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate('user', 'name');

  res.json({ ok: true, events });
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
  const eventId = req.params.id;
  const uid = req.uid;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ ok: false, msg: 'Event doesnt exist for provided ID' });
    }

    //checkear que la persona que cambia el evento es la misma que la creo
    if (event.user.toString() !== uid) {
      return res.status(401).json({ ok: false, msg: 'You are not authorized for updating this event' });
    }

    const newEvent = { ...req.body, user: uid };

    const actualizedEvent = await Event.findByIdAndUpdate(eventId, newEvent, { new: true });

    res.json({ ok: true, actualizedEvent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'Contact admin' });
  }
};

const deleteEvent = async (req, res = response) => {
  res.json({ ok: true, msg: 'delete event' });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
