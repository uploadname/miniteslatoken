// Main JavaScript file for CSGOEmpire clone
let socket = null;

// Initialize socket connection
document.addEventListener('DOMContentLoaded', function() {
    if (typeof io !== 'undefined') {
        socket = io();
        
        // Handle connection events
        socket.on('connect', function() {
            console.log('Connected to server');
        });
        
        socket.on('disconnect', function() {
            console.log('Disconnected from server');
        });
    }
    
    // Initialize chat functionality
    initializeChat();
    
    // Initialize animations
    initializeAnimations();
    
    // Update stats periodically
    updateLiveStats();
    setInterval(updateLiveStats, 30000);
});

// Chat functionality
function initializeChat() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
    
    // Simulate incoming chat messages
    setInterval(() => {
        addRandomChatMessage();
    }, 15000);
}

function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message) {
        addChatMessage('You', message);
        chatInput.value = '';
        
        if (socket) {
            socket.emit('chat-message', {
                username: 'You',
                message: message,
                timestamp: Date.now()
            });
        }
    }
}

function addChatMessage(username, message) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message';
    messageDiv.innerHTML = `<strong>${username}:</strong> ${message}`;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Remove old messages if too many
    while (chatMessages.children.length > 50) {
        chatMessages.removeChild(chatMessages.firstChild);
    }
}

function addRandomChatMessage() {
    const usernames = ['SkinMaster', 'CSGOLegend', 'ProGamer', 'LuckyWin', 'EmpireKing', 'BetterPlayer', 'WinnerTaker'];
    const messages = [
        'Good luck everyone! 🍀',
        'Just won big! 🎉',
        'Anyone want to coinflip?',
        'Roulette is on fire today! 🔥',
        'Let\'s go Empire! 👑',
        'Nice win streak!',
        'Time to bet big!',
        'CT all the way! 💙',
        'Terrorist for the win! ❤️',
        'Empire hit incoming! 💚'
    ];
    
    const randomUser = usernames[Math.floor(Math.random() * usernames.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    addChatMessage(randomUser, randomMessage);
}

// Steam login simulation
function loginWithSteam() {
    // In a real implementation, this would redirect to Steam OAuth
    alert('Steam login would redirect to Steam OAuth in a real implementation.\n\nFor demo purposes, you are now "logged in".');
    
    // Update UI to show logged in state
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.textContent = 'Logged In';
        loginBtn.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
        loginBtn.onclick = null;
    }
}

// Animation initialization
function initializeAnimations() {
    // Fade in elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    });
    
    document.querySelectorAll('.game-card').forEach(card => {
        observer.observe(card);
    });
}

// Update live statistics
function updateLiveStats() {
    const stats = {
        totalWagered: Math.floor(Math.random() * 1000000) + 2000000,
        playersOnline: Math.floor(Math.random() * 500) + 800,
        biggestWin: Math.floor(Math.random() * 50000) + 10000,
        gamesPlayed: Math.floor(Math.random() * 100000) + 800000
    };
    
    // Update stats if elements exist
    const elements = {
        totalWagered: document.querySelector('[style*="color: #28a745"]'),
        playersOnline: document.querySelector('[style*="color: #4a90e2"]'),
        biggestWin: document.querySelector('[style*="color: #ff6b35"]'),
        gamesPlayed: document.querySelector('[style*="color: #f7931e"]')
    };
    
    if (elements.totalWagered) {
        elements.totalWagered.textContent = '$' + stats.totalWagered.toLocaleString();
    }
    if (elements.playersOnline) {
        elements.playersOnline.textContent = stats.playersOnline.toLocaleString();
    }
    if (elements.biggestWin) {
        elements.biggestWin.textContent = '$' + stats.biggestWin.toLocaleString();
    }
    if (elements.gamesPlayed) {
        elements.gamesPlayed.textContent = stats.gamesPlayed.toLocaleString();
    }
}

// Utility functions
function formatCurrency(amount) {
    return '$' + parseFloat(amount).toFixed(2);
}

function formatNumber(num) {
    return num.toLocaleString();
}

// Add some visual effects
function addParticleEffect(x, y, color = '#ff6b35') {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: particleFloat 2s ease-out forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 2000);
}

// Add particle animation CSS
const particleCSS = `
@keyframes particleFloat {
    0% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translateY(-100px) scale(0);
    }
}
`;

// Add CSS to head
const style = document.createElement('style');
style.textContent = particleCSS;
document.head.appendChild(style);

// Add click effects to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('play-btn') || 
        e.target.classList.contains('login-btn') ||
        e.target.classList.contains('bet-option')) {
        addParticleEffect(e.clientX, e.clientY);
    }
});

// Sound effects (placeholder - would use Web Audio API in real implementation)
function playSound(soundName) {
    // In a real implementation, you would load and play audio files
    console.log('Playing sound:', soundName);
}

// Mobile menu toggle (for responsive design)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('mobile-open');
    }
}

// Add mobile menu styles
const mobileCSS = `
@media (max-width: 768px) {
    .nav-menu.mobile-open {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        padding: 1rem;
        border-radius: 0 0 15px 15px;
    }
}
`;

const mobileStyle = document.createElement('style');
mobileStyle.textContent = mobileCSS;
document.head.appendChild(mobileStyle);