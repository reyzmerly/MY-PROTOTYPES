const User = require('../models/user.model');
const { generateOTP, generateJWT } = require('../utils/auth.utils');
const { sendSMS, sendEmail } = require('../utils/notification.utils');

exports.initiateLogin = async (req, res) => {
    try {
        const { contact } = req.body; // contact can be email or phone

        // Validate if contact exists
        const user = await User.findOne({
            $or: [{ email: contact }, { phone: contact }]
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found. Please sign up.'
            });
        }

        // Generate OTP
        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

        // Save OTP to user
        user.lastOTP = {
            code: otp,
            expiresAt: otpExpiry
        };
        await user.save();

        // Send OTP via email or SMS
        if (contact.includes('@')) {
            await sendEmail(contact, 'Login OTP', `Your OTP is: ${otp}`);
        } else {
            await sendSMS(contact, `Your Kora PayNet OTP is: ${otp}`);
        }

        res.status(200).json({
            success: true,
            message: 'OTP sent successfully',
            contactType: contact.includes('@') ? 'email' : 'phone'
        });

    } catch (error) {
        console.error('Login initiation error:', error);
        res.status(500).json({
            success: false,
            message: 'Error initiating login'
        });
    }
};

exports.verifyOTP = async (req, res) => {
    try {
        const { contact, otp } = req.body;

        const user = await User.findOne({
            $or: [{ email: contact }, { phone: contact }]
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Verify OTP
        const isValid = await user.verifyOTP(otp);
        if (!isValid) {
            return res.status(400).json({
                success: false,
                message: 'Invalid or expired OTP'
            });
        }

        // Clear OTP after successful verification
        user.lastOTP = undefined;
        await user.save();

        // Generate JWT token
        const token = generateJWT(user._id);

        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                email: user.email,
                phone: user.phone,
                username: user.username,
                wallet: user.wallet,
                isMerchant: user.isMerchant
            }
        });

    } catch (error) {
        console.error('OTP verification error:', error);
        res.status(500).json({
            success: false,
            message: 'Error verifying OTP'
        });
    }
};

exports.signup = async (req, res) => {
    try {
        const { email, phone } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { phone }]
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with this email or phone'
            });
        }

        // Create new user
        const user = new User({
            email,
            phone,
            username: `user${Date.now().toString().slice(-6)}`
        });

        // Generate and save OTP
        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

        user.lastOTP = {
            code: otp,
            expiresAt: otpExpiry
        };

        await user.save();

        // Send OTP to both email and phone
        await Promise.all([
            sendEmail(email, 'Signup Verification', `Your OTP is: ${otp}`),
            sendSMS(phone, `Your Kora PayNet verification OTP is: ${otp}`)
        ]);

        res.status(201).json({
            success: true,
            message: 'User created successfully. Please verify with OTP.',
            userId: user._id
        });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating user'
        });
    }
};

exports.verifyAccount = async (req, res) => {
    try {
        const { userId, otp } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Verify OTP
        const isValid = await user.verifyOTP(otp);
        if (!isValid) {
            return res.status(400).json({
                success: false,
                message: 'Invalid or expired OTP'
            });
        }

        // Mark user as verified
        user.isVerified = {
            email: true,
            phone: true
        };
        user.lastOTP = undefined;
        await user.save();

        // Generate JWT token
        const token = generateJWT(user._id);

        res.status(200).json({
            success: true,
            message: 'Account verified successfully',
            token,
            user: {
                id: user._id,
                email: user.email,
                phone: user.phone,
                username: user.username
            }
        });

    } catch (error) {
        console.error('Account verification error:', error);
        res.status(500).json({
            success: false,
            message: 'Error verifying account'
        });
    }
};
