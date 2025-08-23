const jwt = require('jsonwebtoken');
const crypto = require('crypto');

exports.generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

exports.generateJWT = (userId) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
};

exports.verifyJWT = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};

exports.hashPassword = async (password) => {
    const salt = await crypto.randomBytes(16);
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, derivedKey) => {
            if (err) reject(err);
            resolve(derivedKey.toString('hex'));
        });
    });
};
