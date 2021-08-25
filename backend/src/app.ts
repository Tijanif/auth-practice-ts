import express from 'express';
import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import usersRouter from './resources/users/routes';
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
declare global {
  namespace Express {
    interface Request {
      currentUser: string | JwtPayload;
    }
  }
}

// App initialisation
const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3001', credentials: true }));

// Routes

app.use('/users', usersRouter);

// catch all routes
app.all('*', (req: Request, res: Response) => {
  res.json({ msg: 'There is no routes here - try again' });
});

module.exports = app;
