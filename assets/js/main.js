// Main JavaScript file for Kora PayNet

document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    setupEventListeners();
    setupFormHandlers();
}

function setupEventListeners() {
    // Modal triggers
    const loginBtn = document.querySelector('.btn-login');
    const signupBtn = document.querySelector('.btn-signup');
    const getStartedBtn = document.querySelector('.btn-primary');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const closeBtns = document.querySelectorAll('.close');

    // Modal elements
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');

    // Open modals
    loginBtn.addEventListener('click', () => showModal(loginModal));
    signupBtn.addEventListener('click', () => showModal(signupModal));
    getStartedBtn.addEventListener('click', () => showModal(signupModal));

    // Switch between modals
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal(loginModal);
        showModal(signupModal);
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal(signupModal);
        showModal(loginModal);
    });

    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            hideModal(loginModal);
            hideModal(signupModal);
        });
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) hideModal(loginModal);
        if (e.target === signupModal) hideModal(signupModal);
    });
}

function setupFormHandlers() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginOtpSection = document.getElementById('loginOtpSection');
    const signupOtpSection = document.getElementById('signupOtpSection');
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    
    // Ensure OTP sections are hidden initially
    if (loginOtpSection) loginOtpSection.style.display = 'none';
    if (signupOtpSection) signupOtpSection.style.display = 'none';
    
    setupOtpInputs();

    // Add click handlers for the buttons
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogin(e);
    });

    signupButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleSignup(e);
    });

    // Prevent form submission
    loginForm.addEventListener('submit', (e) => e.preventDefault());
    signupForm.addEventListener('submit', (e) => e.preventDefault());
}

function setupOtpInputs() {
    const otpInputs = document.querySelectorAll('.otp-input');
    
    otpInputs.forEach((input, index) => {
        input.addEventListener('keyup', (e) => {
            if (e.key >= 0 && e.key <= 9) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            } else if (e.key === 'Backspace') {
                if (index > 0) {
                    otpInputs[index - 1].focus();
                }
            }
        });
    });
}

function startOtpTimer(timerId, buttonId) {
    const timerElement = document.getElementById(timerId);
    const button = document.getElementById(buttonId);
    let timeLeft = 30;

    button.disabled = true;
    
    const timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            button.disabled = false;
            button.textContent = 'Resend OTP';
        }
    }, 1000);
}

function handleLogin(e) {
    e.preventDefault();
    e.stopPropagation();
    const loginContact = document.getElementById('loginContact').value;
    const otpSection = document.getElementById('loginOtpSection');
    const loginButton = document.getElementById('loginButton');

    // Default test credentials
    const defaultUser = {
        email: 'test@kpay.com',
        phone: '1234567890',
        otp: '123456'
    };

    if (!otpSection.style.display || otpSection.style.display === 'none') {
        // First step: Send OTP
        otpSection.style.display = 'block';
        loginButton.textContent = 'Verify OTP';
        startOtpTimer('loginTimer', 'loginButton');
        
        // Check if using default credentials
        if (loginContact === defaultUser.email || loginContact === defaultUser.phone) {
            alert('For testing, use OTP: ' + defaultUser.otp);
        } else {
            alert('OTP sent to ' + loginContact);
        }
    } else {
        // Second step: Verify OTP
        const otpInputs = otpSection.querySelectorAll('.otp-input');
        const otp = Array.from(otpInputs).map(input => input.value).join('');
        
        // Check if using default credentials
        if ((loginContact === defaultUser.email || loginContact === defaultUser.phone) && 
            otp === defaultUser.otp) {
            // Store test user data
            localStorage.setItem('authToken', 'test-token');
            localStorage.setItem('userData', JSON.stringify({
                name: 'Test User',
                email: defaultUser.email,
                phone: defaultUser.phone,
                balance: {
                    usdt: 1247.50,
                    btc: 0.0192,
                    eth: 0.485
                }
            }));
            
            alert('Login successful!');
            hideModal(document.getElementById('loginModal'));
            window.location.href = 'pages/dashboard/index.html';
        } else if (otp.length === 6) {
            // Regular OTP verification logic would go here
            // For now, just mock a successful login
            alert('Login successful!');
            hideModal(document.getElementById('loginModal'));
            window.location.href = 'pages/dashboard/index.html';
        } else {
            alert('Invalid OTP');
        }
    }
}

function handleSignup(e) {
    e.preventDefault();
    e.stopPropagation();
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const otpSection = document.getElementById('signupOtpSection');
    const signupButton = document.getElementById('signupButton');

    if (!otpSection.style.display || otpSection.style.display === 'none') {
        // First step: Send OTP
        otpSection.style.display = 'block';
        signupButton.textContent = 'Verify OTP';
        startOtpTimer('signupTimer', 'signupButton');
        
        // Mock OTP send
        console.log('Sending OTP to:', email, phone);
        alert('OTP sent to ' + email + ' and ' + phone);
    } else {
        // Second step: Verify OTP
        const otpInputs = otpSection.querySelectorAll('.otp-input');
        const otp = Array.from(otpInputs).map(input => input.value).join('');
        
        // Mock OTP verification
        console.log('Verifying OTP:', otp);
        
        // Mock successful signup
        alert('Account created successfully!');
        hideModal(document.getElementById('signupModal'));
        window.location.href = 'pages/wallet.html';
    }
}

function showModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function hideModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Add mobile menu functionality
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
