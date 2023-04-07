import express from 'express';
import { deleteUser, getusers, register, updateUser } from '../controllers/userController.js';
const router = express.Router();

router.route('/').get(getusers).post(register);
router.route('/:id').put(updateUser).delete(deleteUser);
export default router;