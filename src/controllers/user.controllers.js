const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async (req, res) => {
  const user = await User.find();
  return res.json(user);
});

const create = catchError(async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const user = await User.create({ firstName, lastName, email });
  return res.status(201).json(user);
})

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndRemove(id);
  return res.sendStatus(204);
})

module.exports = {
  getAll,
  create,
  remove,
}