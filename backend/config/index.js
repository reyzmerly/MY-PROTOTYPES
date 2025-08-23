const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const config = {
    // Server Configuration
    server: {
        port: process.env.PORT || 5000,
        env: process.env.NODE_ENV || 'development',
        jwtSecret: process.env.JWT_SECRET,
        jwtExpiration: '7d'
    },

    // Database Configuration
    database: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/kora-paynet',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },

    // Crypto Configuration
    crypto: {
        ethNodeUrl: process.env.ETH_NODE_URL,
        usdtContractAddress: process.env.USDT_CONTRACT_ADDRESS,
        networks: {
            ethereum: {
                chainId: 1,
                name: 'Ethereum Mainnet'
            },
            binance: {
                chainId: 56,
                name: 'Binance Smart Chain'
            }
        }
    },

    // Email Configuration
    email: {
        smtp: {
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        },
        from: process.env.SMTP_USER,
        templates: {
            path: path.join(__dirname, '../templates/email')
        }
    },

    // SMS Configuration
    sms: {
        twilio: {
            accountSid: process.env.TWILIO_ACCOUNT_SID,
            authToken: process.env.TWILIO_AUTH_TOKEN,
            phoneNumber: process.env.TWILIO_PHONE_NUMBER
        }
    },

    // Transaction Limits
    limits: {
        daily: {
            transfer: parseFloat(process.env.DAILY_TRANSFER_LIMIT) || 10000,
            withdrawal: parseFloat(process.env.DAILY_WITHDRAWAL_LIMIT) || 5000
        },
        merchant: {
            minReferrals: 5,
            subscriptionFee: 50 // USDT
        }
    },

    // Rate Limiting
    rateLimit: {
        window: 15 * 60 * 1000, // 15 minutes
        max: 100 // requests per window
    },

    // Security
    security: {
        cors: {
            origin: process.env.NODE_ENV === 'production' 
                ? ['https://korapaynet.com', 'https://app.korapaynet.com']
                : '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
            allowedHeaders: ['Content-Type', 'Authorization']
        },
        otpExpiration: 5 * 60 * 1000 // 5 minutes
    },

    // P2P Settings
    p2p: {
        matchingRadius: 50, // km
        maxActiveOffers: 5,
        minReputation: 4.0,
        disputeWindow: 24 * 60 * 60 * 1000 // 24 hours
    },

    // Fee Structure
    fees: {
        withdrawal: {
            crypto: 0.001, // 0.1%
            p2p: 0.005 // 0.5%
        },
        merchant: {
            standard: 0.01, // 1%
            premium: 0.005 // 0.5%
        }
    }
};

// Validation
const requiredEnvVars = [
    'JWT_SECRET',
    'MONGODB_URI',
    'SMTP_HOST',
    'SMTP_USER',
    'SMTP_PASS',
    'TWILIO_ACCOUNT_SID',
    'TWILIO_AUTH_TOKEN'
];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
}

module.exports = config;
