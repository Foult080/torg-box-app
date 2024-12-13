const timeZones = require('../../timezones.json');
const { handleError } = require('../utils/error-handler');
const { parseTimeZones } = require('../utils/utils');

const getTimeZones = async (req, res, next) => {
  try {
    const data = parseTimeZones(timeZones);
    return res.status(200).json(data);
  } catch (error) {
    handleError(error, next);
  }
};

module.exports = { getTimeZones };
