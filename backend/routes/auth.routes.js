const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authController = require('../controllers/auth.controller');
const validateRequest = require('../middleware/validator.middleware');

// Input validation schemas
const loginValidation = [
    body('contact').notEmpty().withMessage('Contact (email/phone) is required')
];

const otpValidation = [
    body('contact').notEmpty().withMessage('Contact is required'),
    body('otp').isLength({ min: 6, max: 6 }).withMessage('Invalid OTP format')
];

const signupValidation = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('phone').matches(/^\+[1-9]\d{10,14}$/).withMessage('Invalid phone format')
];

// Routes
router.post('/login/init', loginValidation, validateRequest, authController.initiateLogin);
router.post('/login/verify', otpValidation, validateRequest, authController.verifyOTP);
router.post('/signup', signupValidation, validateRequest, authController.signup);
router.post('/verify-account', otpValidation, validateRequest, authController.verifyAccount);

module.exports = router;
