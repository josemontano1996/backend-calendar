const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
  //Getting the JWT from x-token header
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({ ok: false, msg: 'There is no token in request' });
  }

  try {
    const { name, uid } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req.uid = uid;
    req.name = name;
  } catch (error) {
    console.log(error);
    return res.status(401).json({ ok: false, msg: 'Invalid token' });
  }

  next();
};

module.exports = { validateJWT };