import { Router } from 'express';
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import { authorizedPermissions } from '../middleware/authMiddleware.js';

router.get('/current-user', getCurrentUser);
router.get(
  '/admin/app-stats',
  authorizedPermissions('admin'),
  getApplicationStats
);
router.patch('/update-user', validateUpdateUserInput, updateUser);

export default router;