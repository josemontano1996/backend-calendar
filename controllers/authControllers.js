const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

const createUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ ok: false, msg: 'Email already in use' });
    }

    user = new User(req.body);

    //Password incription
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();
    //Generate JWT
    const token = await generateJWT(user._id, user.name);

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'Please contact admin' });
  }
};

const loginUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ ok: false, msg: 'User not valid' });
    }

    //Comparing passwords
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ ok: false, msg: 'Password not valid' });
    }

    //Generate JWT
    const token = await generateJWT(user._id, user.name);

    res.json({ ok: true, uid: user._id, name: user.name, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'Please contact admin' });
  }
};

const renewToken = async (req, res = response) => {
  const uid = req.uid;
  const name = req.name;

  //Generate new JWT
  const token = await generateJWT(uid, name);

  res.json({ ok: true, uid, name, token });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
