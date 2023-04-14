import express from 'express';
import { deleteUser, getusers, login, register, updateUser } from '../controllers/userController.js';
const router = express.Router();

router.route('/').get(getusers).post(register);
router.route('/:id').put(updateUser).delete(deleteUser);
router.route('/login').post(login);
export default router;