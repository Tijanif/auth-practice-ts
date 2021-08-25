import dbClient from '../utilities/database';

import { User } from '.prisma/client';

import { compare } from 'bcrypt';

export const foundUserWithValidation = async (userData: User) => {
  // look for user in db
  const foundUser = await dbClient.user.findUnique({
    where: { username: userData.username },
  });

  // if not found throw an error
  if (!foundUser) throw new Error('Username/Password incorrect');

  // if user found check and compare password
  const isPasswordValid = await compare(userData.password, foundUser.password);

  // if password not the same throw error
  if (!isPasswordValid) throw new Error('Username/Password incorrect');

  return foundUser;
};
