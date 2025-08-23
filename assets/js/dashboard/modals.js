// Modal functionality
const MODAL_TEMPLATES = {
    'send-modal': `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal('send-modal')">&times;</span>
            <h3>Send Money</h3>
            <form id="sendForm">
                <div class="input-group">
                    <label>Send to (Username/Phone/Email):</label>
                    <input type="text" id="send-recipient" placeholder="@username or phone or email" required>
                </div>
                <div class="input-group">
                    <label>Amount (USDT):</label>
                    <input type="number" id="send-amount" step="0.01" min="0" placeholder="0.00" required>
                </div>
                <div class="action-buttons">
                    <button type="button" class="action-btn btn-secondary" onclick="closeModal('send-modal')">Cancel</button>
                    <button type="submit" class="action-btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    `,
    
    'receive-modal': `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal('receive-modal')">&times;</span>
            <h3>Receive Money</h3>
            <div class="qr-container">
                <div class="qr-icon">📱</div>
                <div>Your QR Code</div>
            </div>
            <div class="user-info">
                <p><strong>Username:</strong> <span class="user-name">@user123</span></p>
                <p><strong>Phone:</strong> <span class="user-phone">+250123456789</span></p>
                <p><strong>Email:</strong> <span class="user-email">user@example.com</span></p>
            </div>
            <button class="action-btn btn-primary" onclick="closeModal('receive-modal')" style="width: 100%;">Close</button>
        </div>
    `,
    
    'topup-modal': `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal('topup-modal')">&times;</span>
            <h3>Top Up Wallet</h3>
            <form id="topupForm">
                <div class="input-group">
                    <label>Method:</label>
                    <select id="topup-method" required>
                        <option value="crypto">External Crypto Deposit</option>
                        <option value="p2p">P2P Cash-In</option>
                    </select>
                </div>
                <div class="input-group">
                    <label>Amount (USDT):</label>
                    <input type="number" id="topup-amount" step="0.01" min="0" placeholder="0.00" required>
                </div>
                <div class="action-buttons">
                    <button type="button" class="action-btn btn-secondary" onclick="closeModal('topup-modal')">Cancel</button>
                    <button type="submit" class="action-btn btn-primary">Top Up</button>
                </div>
            </form>
        </div>
    `,
    
    'withdraw-modal': `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal('withdraw-modal')">&times;</span>
            <h3>Withdraw Funds</h3>
            <form id="withdrawForm">
                <div class="input-group">
                    <label>Method:</label>
                    <select id="withdraw-method" required>
                        <option value="usdt">USDT</option>
                        <option value="btc">Bitcoin (BTC)</option>
                        <option value="eth">Ethereum (ETH)</option>
                        <option value="p2p">Local Cash via P2P</option>
                    </select>
                </div>
                <div class="input-group">
                    <label>Amount:</label>
                    <input type="number" id="withdraw-amount" step="0.01" min="0" placeholder="0.00" required>
                </div>
                <div class="action-buttons">
                    <button type="button" class="action-btn btn-secondary" onclick="closeModal('withdraw-modal')">Cancel</button>
                    <button type="submit" class="action-btn btn-primary">Withdraw</button>
                </div>
            </form>
        </div>
    `,
    
    'p2p-modal': `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal('p2p-modal')">&times;</span>
            <h3>P2P Marketplace</h3>
            <div class="merchant-list">
                <div class="merchant-item">
                    <div class="name">💰 Merchant A</div>
                    <div class="details">Rate: 1,000 RWF/USDT • Rating: ⭐⭐⭐⭐⭐</div>
                    <button class="action-btn btn-primary" style="width: 100%; margin-top: 10px;">Contact</button>
                </div>
                <div class="merchant-item">
                    <div class="name">🏪 Merchant B</div>
                    <div class="details">Rate: 995 RWF/USDT • Rating: ⭐⭐⭐⭐</div>
                    <button class="action-btn btn-primary" style="width: 100%; margin-top: 10px;">Contact</button>
                </div>
            </div>
            <button class="action-btn btn-secondary" onclick="closeModal('p2p-modal')" style="width: 100%;">Close</button>
        </div>
    `,
    
    'custom-tip-modal': `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal('custom-tip-modal')">&times;</span>
            <h3>Custom Tip</h3>
            <form id="tipForm">
                <div class="input-group">
                    <label>Tip Amount (USDT):</label>
                    <input type="number" id="custom-tip-amount" step="0.01" min="0" placeholder="0.00" required>
                </div>
                <div class="action-buttons">
                    <button type="button" class="action-btn btn-secondary" onclick="closeModal('custom-tip-modal')">Cancel</button>
                    <button type="submit" class="action-btn btn-primary">Send Tip</button>
                </div>
            </form>
        </div>
    `
};

function loadModals() {
    const container = document.getElementById('modalsContainer');
    
    // Create modal elements
    Object.entries(MODAL_TEMPLATES).forEach(([id, template]) => {
        const modalDiv = document.createElement('div');
        modalDiv.id = id;
        modalDiv.className = 'modal';
        modalDiv.innerHTML = template;
        container.appendChild(modalDiv);
    });
    
    // Set up form handlers
    setupFormHandlers();
}

function setupFormHandlers() {
    // Send money form
    const sendForm = document.getElementById('sendForm');
    if (sendForm) {
        sendForm.addEventListener('submit', handleSend);
    }
    
    // Top up form
    const topupForm = document.getElementById('topupForm');
    if (topupForm) {
        topupForm.addEventListener('submit', handleTopup);
    }
    
    // Withdraw form
    const withdrawForm = document.getElementById('withdrawForm');
    if (withdrawForm) {
        withdrawForm.addEventListener('submit', handleWithdraw);
    }
    
    // Custom tip form
    const tipForm = document.getElementById('tipForm');
    if (tipForm) {
        tipForm.addEventListener('submit', handleCustomTip);
    }
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Form handlers
function handleSend(e) {
    e.preventDefault();
    const recipient = document.getElementById('send-recipient').value;
    const amount = parseFloat(document.getElementById('send-amount').value);
    
    if (amount > currentBalance.usdt) {
        showError('Insufficient balance');
        return;
    }
    
    // Process send
    currentBalance.usdt -= amount;
    updateBalance();
    showSuccess(`Sent ${amount} USDT to ${recipient}`);
    closeModal('send-modal');
    e.target.reset();
}

function handleTopup(e) {
    e.preventDefault();
    const method = document.getElementById('topup-method').value;
    const amount = parseFloat(document.getElementById('topup-amount').value);
    
    // Process top-up
    currentBalance.usdt += amount;
    updateBalance();
    showSuccess(`Successfully topped up ${amount} USDT via ${method}`);
    closeModal('topup-modal');
    e.target.reset();
}

function handleWithdraw(e) {
    e.preventDefault();
    const method = document.getElementById('withdraw-method').value;
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    
    if (amount > currentBalance.usdt) {
        showError('Insufficient balance');
        return;
    }
    
    // Process withdrawal
    currentBalance.usdt -= amount;
    updateBalance();
    showSuccess(`Successfully withdrew ${amount} USDT via ${method}`);
    closeModal('withdraw-modal');
    e.target.reset();
}

function handleCustomTip(e) {
    e.preventDefault();
    sendCustomTip();
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
