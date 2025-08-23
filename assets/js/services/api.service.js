// API configuration
const API_BASE_URL = 'http://localhost:5000/api';

// API Service class for handling all HTTP requests
class ApiService {
    static async headers() {
        const token = localStorage.getItem('token');
        return {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
        };
    }

    static async handleResponse(response) {
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    }

    // Auth APIs
    static async initiateLogin(contact) {
        const response = await fetch(`${API_BASE_URL}/auth/login/init`, {
            method: 'POST',
            headers: await this.headers(),
            body: JSON.stringify({ contact })
        });
        return this.handleResponse(response);
    }

    static async verifyOTP(contact, otp) {
        const response = await fetch(`${API_BASE_URL}/auth/login/verify`, {
            method: 'POST',
            headers: await this.headers(),
            body: JSON.stringify({ contact, otp })
        });
        return this.handleResponse(response);
    }

    static async signup(email, phone) {
        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: await this.headers(),
            body: JSON.stringify({ email, phone })
        });
        return this.handleResponse(response);
    }

    // Wallet APIs
    static async getWalletBalance() {
        const response = await fetch(`${API_BASE_URL}/wallet/balance`, {
            headers: await this.headers()
        });
        return this.handleResponse(response);
    }

    static async sendMoney(recipient, amount, currency) {
        const response = await fetch(`${API_BASE_URL}/wallet/send`, {
            method: 'POST',
            headers: await this.headers(),
            body: JSON.stringify({ recipient, amount, currency })
        });
        return this.handleResponse(response);
    }

    static async topUp(amount, method) {
        const response = await fetch(`${API_BASE_URL}/wallet/topup`, {
            method: 'POST',
            headers: await this.headers(),
            body: JSON.stringify({ amount, method })
        });
        return this.handleResponse(response);
    }

    static async withdraw(amount, method) {
        const response = await fetch(`${API_BASE_URL}/wallet/withdraw`, {
            method: 'POST',
            headers: await this.headers(),
            body: JSON.stringify({ amount, method })
        });
        return this.handleResponse(response);
    }

    // P2P APIs
    static async getMerchants() {
        const response = await fetch(`${API_BASE_URL}/p2p/merchants`, {
            headers: await this.headers()
        });
        return this.handleResponse(response);
    }

    static async createP2POffer(type, amount, rate) {
        const response = await fetch(`${API_BASE_URL}/p2p/offers`, {
            method: 'POST',
            headers: await this.headers(),
            body: JSON.stringify({ type, amount, rate })
        });
        return this.handleResponse(response);
    }

    // Transaction APIs
    static async getTransactionHistory() {
        const response = await fetch(`${API_BASE_URL}/transactions/history`, {
            headers: await this.headers()
        });
        return this.handleResponse(response);
    }
}
