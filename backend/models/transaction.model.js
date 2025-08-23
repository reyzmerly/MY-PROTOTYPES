const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['send', 'receive', 'topup', 'withdraw', 'tip'],
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: function() {
            return this.type === 'send' || this.type === 'receive';
        }
    },
    amount: {
        value: { type: Number, required: true },
        currency: {
            type: String,
            enum: ['USDT', 'BTC', 'ETH', 'RWF'],
            required: true
        }
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'cancelled'],
        default: 'pending'
    },
    method: {
        type: String,
        enum: ['internal', 'crypto', 'p2p'],
        required: true
    },
    fees: {
        value: { type: Number, default: 0 },
        currency: {
            type: String,
            enum: ['USDT', 'BTC', 'ETH', 'RWF']
        }
    },
    metadata: {
        cryptoTxHash: String,
        p2pMerchant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        rate: Number,
        notes: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    completedAt: Date
});

// Add indexes for better query performance
transactionSchema.index({ sender: 1, createdAt: -1 });
transactionSchema.index({ recipient: 1, createdAt: -1 });
transactionSchema.index({ status: 1 });
transactionSchema.index({ type: 1 });

module.exports = mongoose.model('Transaction', transactionSchema);
