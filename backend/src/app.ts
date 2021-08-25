import express from 'express';
import { Request, Response } from 'express';
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// App initialisation
const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// catch all routes
app.all('*', (req: Request, res: Response) => {
  res.json({ msg: 'There is no routes here - try again' });
});

module.exports = app;
