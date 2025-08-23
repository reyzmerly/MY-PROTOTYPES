// Main dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    loadModals();
    initDashboard();
});

function initDashboard() {
    // Check if user is authenticated
    const user = checkAuthentication();
    if (!user) {
        window.location.href = '../../index.html';
        return;
    }

    // Initialize the dashboard components
    setupEventListeners();
    loadUserData();
}

function setupEventListeners() {
    // Bottom navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const tab = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showTab(tab);
        });
    });
}

function showTab(tabName) {
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to clicked item
    const activeItem = document.querySelector(`.nav-item[onclick*="${tabName}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
    
    // Handle tab content (to be implemented based on requirements)
    switch(tabName) {
        case 'wallet':
            // Already on wallet view
            break;
        case 'send':
            openModal('send-modal');
            break;
        case 'p2p':
            openModal('p2p-modal');
            break;
        case 'profile':
            // To be implemented
            break;
    }
}

function loadUserData() {
    // Mock user data - in production, this would fetch from an API
    const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+250123456789',
        balance: {
            usdt: 1247.50,
            btc: 0.0192,
            eth: 0.485
        },
        localCurrency: 'RWF',
        localRate: 1000 // RWF per USDT
    };

    // Update UI with user data
    updateBalance(userData.balance);
    updateUserInfo(userData);
}

function checkAuthentication() {
    // Mock authentication check - in production, this would verify JWT or session
    const token = localStorage.getItem('authToken');
    if (!token) {
        return null;
    }
    return { token };
}

function updateUserInfo(userData) {
    // Update any user-specific information in the UI
    const userNameElements = document.querySelectorAll('.user-name');
    userNameElements.forEach(el => el.textContent = userData.name);
}
