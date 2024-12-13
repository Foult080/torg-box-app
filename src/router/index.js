const express = require('express');
const pck = require('../../package.json');
const { getTimeZones } = require('../controllers/timezones');
const version = pck.version;
const router = express.Router();

router.get('/time-zones', getTimeZones);
router.get('/health', async (req, res) => res.status(200).json({ version, msg: 'Сервис работает стабильно' }));
router.use('*', async (req, res) => res.status(404).json({ msg: 'Маршрут не распознан' }));

module.exports = router;
