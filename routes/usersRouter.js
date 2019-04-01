const { Router } = require('express');
const { User } = require('../models');
const { hashPassword, genToken, checkPassword, restrict } = require('../services/auth');

const usersRouter = Router();

const buildAuthResponse = (user) => {

    const token_data = {
      id: user.id,
      email: user.email
    };

    const token = genToken(token_data);

    const {
      password_digest,
      ...userData
    } = user.dataValues

  return {
    user: userData,
    token,
  };
}

usersRouter.post('/register', async (req, res) => {
  try {
    const password_digest = await hashPassword(req.body.password);
    const { first_name, last_name, email } = req.body
    const user = await User.create({
      first_name,
      last_name,
      email,
      password_digest,
    });

    const respData = buildAuthResponse(user);

    res.json({ ...respData });
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

usersRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (await checkPassword(req.body.password, user.password_digest)) {
      const respData = buildAuthResponse(user);

      console.log(respData)
      res.json({ ...respData });
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
})

usersRouter.get('/:id', restrict, async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id)
    const {
      password_digest,
      ...userData
    } = user.dataValues

    res.json(userData);
  } catch(e) {
    res.status(error).send(e.message);
  }
});


usersRouter.put('/:id', restrict, async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);

    await user.update(req.body);
    const {
      password_digest,
      ...userData
    } = user.dataValues
    res.json({user: userData})
  } catch(e) {
    console.error(e);
    res.json({message:e.message})
  }
})

module.exports = usersRouter;
