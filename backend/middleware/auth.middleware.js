const { verifyJWT } = require('../utils/auth.utils');
const User = require('../models/user.model');

exports.authenticateUser = async (req, res, next) => {
    try {
        // Get token from header
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No authentication token provided'
            });
        }

        // Verify token
        const decoded = verifyJWT(token);
        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: 'Invalid or expired token'
            });
        }

        // Get user
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found'
            });
        }

        // Attach user to request object
        req.user = user;
        next();

    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({
            success: false,
            message: 'Error authenticating user'
        });
    }
};

exports.requireMerchant = (req, res, next) => {
    if (!req.user.isMerchant) {
        return res.status(403).json({
            success: false,
            message: 'Merchant access required'
        });
    }
    next();
};

exports.requireVerifiedMerchant = (req, res, next) => {
    if (!req.user.isMerchant || !req.user.merchantDetails.isVerified) {
        return res.status(403).json({
            success: false,
            message: 'Verified merchant access required'
        });
    }
    next();
};
