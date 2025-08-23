const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        sparse: true,
        trim: true
    },
    isVerified: {
        email: { type: Boolean, default: false },
        phone: { type: Boolean, default: false }
    },
    lastOTP: {
        code: String,
        expiresAt: Date
    },
    wallet: {
        usdt: { type: Number, default: 0 },
        btc: { type: Number, default: 0 },
        eth: { type: Number, default: 0 }
    },
    isMerchant: { type: Boolean, default: false },
    merchantDetails: {
        isVerified: { type: Boolean, default: false },
        referrals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        rating: { type: Number, default: 0 },
        totalRatings: { type: Number, default: 0 },
        subscriptionStatus: {
            isActive: { type: Boolean, default: false },
            expiresAt: Date
        }
    },
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Pre-save middleware to hash OTP
userSchema.pre('save', async function(next) {
    if (this.isModified('lastOTP.code')) {
        this.lastOTP.code = await bcrypt.hash(this.lastOTP.code, 10);
    }
    next();
});

// Method to verify OTP
userSchema.methods.verifyOTP = async function(otp) {
    if (!this.lastOTP.code || Date.now() > this.lastOTP.expiresAt) {
        return false;
    }
    return await bcrypt.compare(otp, this.lastOTP.code);
};

// Method to check merchant eligibility
userSchema.methods.checkMerchantEligibility = function() {
    return this.merchantDetails.referrals.length >= 5;
};

module.exports = mongoose.model('User', userSchema);
