/* 
User / Auth Routes
host + /api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator');
const {inputValitadionMiddleware} = require('../middlewares/inputValidationMiddleware');

const {
  createUser,
  loginUser,
  renewToken,
} = require('../controllers/authControllers');

const router = Router();

router.post(
  '/new',
  [
    check('name', 'Name is mandatory').not().isEmpty(),
    check('email', 'Email is mandatory').isEmail(),
    check('password', 'Password must have a minimum length of 6').isLength(6),
    inputValitadionMiddleware,
  ],
  createUser
);

router.post(
  '/',
  [
    check('email', 'Email is mandatory').isEmail(),
    check(
      'password',
      'Password must have a minimum length of 6 characters'
    ).isLength(6),
    inputValitadionMiddleware,
  ],
  loginUser
);

router.get('/renew', renewToken);

module.exports = router;
