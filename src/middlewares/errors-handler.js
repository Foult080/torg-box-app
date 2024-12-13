require('dotenv').config();
const { validationResult } = require('express-validator');

/**
 * Обработка ошиборк валидации запросов от express-validator
 */
const validationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errorType: 'Bad Request ', msg: 'В запросе обнаружены ошибки валидации', errors: errors.array({ onlyFirstError: false }) });
  }
  next();
};

/**
 * Обработчик ошибок для финала ответа сервиса
 */
const errorHandler = (error, req, res) => {
  const { status, msg, errorType } = error;
  return res.status(status).json({ errorType, msg });
};

module.exports = { validationErrors, errorHandler };
