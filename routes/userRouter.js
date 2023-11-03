import { Router } from 'express';
const router = Router();

import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/userController.js';
import { validateIdParam } from '../middleware/validationMiddleware.js';

router.route('/').post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default router;
