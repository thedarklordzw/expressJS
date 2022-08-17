const runDb = require('../model/database');

exports.sendData = async (req, res, next) => {
  await runDb().then(([data, _data]) => res.status(200).json([data, _data]));
};
