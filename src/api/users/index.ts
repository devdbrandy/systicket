import { Router } from 'express';

import UsersController from './users.controller';

const router = Router();

/* GET users. */
router.get('/users', UsersController.getUsers());

export default router;
