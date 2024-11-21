import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup)
console.log('Attempting to import auth.controller from:', new URL('../controllers/auth.controller.js', import.meta.url));


export default router;