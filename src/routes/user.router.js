const { getAll, create, remove } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/')
  .get(getAll)
  .post(create);

userRouter.route('/:id')
  .delete(remove);

module.exports = userRouter;