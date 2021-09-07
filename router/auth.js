import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as authcontroller from '../controller/auth.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateCredential = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username should be at least 5 characters'),
  body('password')
    .trim()
    .isLength({ min: 5 })
    .withMessage('Password should be at least 5 characters'),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body('name').notEmpty().withMessage('name is missing'),
  body('email').isEmail().normalizeEmail().withMessage('Invalid email'),
  body('url')
    .isURL()
    .withMessage('Invalid URL')
    .optional({ nullable: true, checkFalsy: true }), // 옵셔널 값이기 때문에 텅텅비어있어도 허용해준다
  validate,
];

router.post('/signup', validateSignup, authcontroller.signup);
router.post('/login', validateCredential, authcontroller.login);
router.get('/me', isAuth, authcontroller.me);

export default router;
