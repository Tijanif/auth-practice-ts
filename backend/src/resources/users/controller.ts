import { Request, Response } from 'express';
import { createToken } from '../../utilities/authGenerator';
import user from './services';

export const getAllUsers = async (req: Request, res: Response) => {
  const allUsers = await user.findMany();

  res.json({ data: allUsers });
};

export const createAUser = () => {};
