import { Request, Response } from 'express';
import { createToken } from '../../utilities/authGenerator';
import user from './services';

export const getAllUsers = async (req: Request, res: Response) => {
  const allUsers = await user.findMany();

  res.json({ data: allUsers });
};

export const createAUser = async (req: Request, res: Response) => {
  const newUser = req.body;

  // new user created with hashed password
  const createUser = await user.create(newUser);

  // creat token
  const token = createToken({
    id: createUser.id,
    username: createUser.username,
  });

  res.cookie('token', token, { httpOnly: true });

  res.json({ data: { username: createUser.username } });
};
