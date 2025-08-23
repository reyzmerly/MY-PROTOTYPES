// Wallet functionality
let currentBalance = {
    usdt: 1247.50,
    btc: 0.0192,
    eth: 0.485
};

const localRate = 1000; // RWF per USDT

function toggleCrypto() {
    const cryptoSection = document.getElementById('crypto-equivalents');
    const usdToggle = document.getElementById('usd-toggle');
    const cryptoToggle = document.getElementById('crypto-toggle');
    
    if (cryptoSection.classList.contains('show')) {
        cryptoSection.classList.remove('show');
        usdToggle.classList.add('active');
        cryptoToggle.classList.remove('active');
    } else {
        cryptoSection.classList.add('show');
        usdToggle.classList.remove('active');
        cryptoToggle.classList.add('active');
    }
}

function updateBalance(balance = currentBalance) {
    currentBalance = balance;
    
    // Update USDT balance
    document.getElementById('actual-balance').textContent = `${balance.usdt.toFixed(2)} USDT`;
    document.getElementById('local-equivalent').textContent = 
        `${(balance.usdt * localRate).toLocaleString()} RWF`;
    
    // Update crypto equivalents
    const btcElement = document.querySelector('.crypto-item:nth-child(1) span:last-child');
    const ethElement = document.querySelector('.crypto-item:nth-child(2) span:last-child');
    
    if (btcElement) btcElement.textContent = `${balance.btc.toFixed(8)} BTC`;
    if (ethElement) ethElement.textContent = `${balance.eth.toFixed(6)} ETH`;
}

function sendTip(amount) {
    if (amount > currentBalance.usdt) {
        showError('Insufficient balance for tip');
        return;
    }
    
    // Process tip
    currentBalance.usdt -= amount;
    updateBalance();
    showSuccess(`Thank you for your ${amount} USDT tip! 💝`);
}

function sendCustomTip() {
    const amount = parseFloat(document.getElementById('custom-tip-amount').value);
    
    if (!amount) {
        showError('Please enter a valid amount');
        return;
    }
    
    if (amount > currentBalance.usdt) {
        showError('Insufficient balance for tip');
        return;
    }
    
    // Process custom tip
    currentBalance.usdt -= amount;
    updateBalance();
    showSuccess(`Thank you for your ${amount} USDT tip! 💝`);
    closeModal('custom-tip-modal');
    
    // Clear form
    document.getElementById('custom-tip-amount').value = '';
}

function showTransactionHistory() {
    // To be implemented - would fetch transaction history from API
    showInfo('Transaction history feature coming soon!');
}

// Error and success handlers
function showError(message) {
    alert(message); // In production, use a proper toast/notification system
}

function showSuccess(message) {
    alert(message); // In production, use a proper toast/notification system
}

function showInfo(message) {
    alert(message); // In production, use a proper toast/notification system
}
