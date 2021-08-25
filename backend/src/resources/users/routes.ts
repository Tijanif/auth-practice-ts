import { Router } from 'express';

import { getAllUsers, createAUser } from './controller';
const router = Router();

router.get('/', getAllUsers);
// router.post('/', createAUser);
export default router;
