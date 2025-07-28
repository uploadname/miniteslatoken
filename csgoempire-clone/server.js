const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'CSGOEmpire - CS2 Skin Gambling',
        page: 'home'
    });
});

app.get('/roulette', (req, res) => {
    res.render('roulette', { 
        title: 'Roulette - CSGOEmpire',
        page: 'roulette'
    });
});

app.get('/coinflip', (req, res) => {
    res.render('coinflip', { 
        title: 'Coinflip - CSGOEmpire',
        page: 'coinflip'
    });
});

app.get('/cases', (req, res) => {
    res.render('cases', { 
        title: 'Cases - CSGOEmpire',
        page: 'cases'
    });
});

app.get('/match-betting', (req, res) => {
    res.render('match-betting', { 
        title: 'Match Betting - CSGOEmpire',
        page: 'match-betting'
    });
});

// Socket.IO for real-time features
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    
    // Join roulette room
    socket.on('join-roulette', () => {
        socket.join('roulette');
        socket.emit('roulette-state', {
            timeLeft: 30,
            bets: []
        });
    });
    
    // Handle roulette bets
    socket.on('place-bet', (data) => {
        io.to('roulette').emit('new-bet', data);
    });
    
    // Handle coinflip creation
    socket.on('create-coinflip', (data) => {
        io.emit('new-coinflip', data);
    });
    
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Simulate roulette rounds
setInterval(() => {
    const results = ['T', 'CT', 'E'];
    const result = results[Math.floor(Math.random() * results.length)];
    io.to('roulette').emit('roulette-result', { result });
}, 30000);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`CSGOEmpire clone running on port ${PORT}`);
});