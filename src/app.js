require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const { errorHandler } = require('./middlewares/errors-handler');
const { debug } = require('console');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(express.static(path.join(__dirname, '../', 'dist')));
app.use('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'dist', 'index.html')));

app.use(errorHandler);

const server = app.listen(PORT, () => console.info(`[SERVER]: Server is running at http://localhost:${PORT}`));

const onServerClose = async (msg) => {
  console.info('[Server]: ' + msg);
  server.close(() => debug('HTTP server closed'));
};

process.on('SIGTERM', async () => onServerClose('Call SIGTERM. Server is shutdown'));
process.on('SIGINT', async () => onServerClose('Call SIGINT. Server is shutdown'));
