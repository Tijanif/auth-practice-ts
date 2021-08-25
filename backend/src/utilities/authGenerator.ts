import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT as string;

export const createToken = (payload: jwt.JwtPayload) => {
  return jwt.sign(payload, JWT_SECRET_KEY);
};

export const validateToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET_KEY);
};
