/* 
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { inputValitadionMiddleware } = require('../middlewares/inputValidationMiddleware');
const { validateJWT } = require('../middlewares/validateJWT');
const { isDate } = require('../helpers/isDate');

const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/eventsController');

const router = Router();

//Protection middleware
router.use(validateJWT);

//Protected routes
router.get('/', getEvents);

router.post(
  '/new',
  [
    check('title', 'Title is mandatory').not().isEmpty(),
    check('start', 'Start date is mandatory').custom(isDate),
    check('end', 'End date is mandatory').custom(isDate),
    inputValitadionMiddleware,
  ],
  createEvent
);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
