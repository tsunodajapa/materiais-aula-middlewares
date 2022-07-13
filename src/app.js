const { request } = require('express');
const express = require('express');

const mainRouter = require('./routes/main.routes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', mainRouter);

app.listen(3333);

