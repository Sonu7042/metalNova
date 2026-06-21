const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.get('/', (req, res) => res.send('Metalnova API Server is running...'));
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
