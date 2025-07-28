# CSGOEmpire Clone

A fully functional clone of CSGOEmpire.com - the popular CS2 skin gambling platform. This project is created for **educational purposes only** to demonstrate modern web development techniques.

![CSGOEmpire Clone](https://img.shields.io/badge/Node.js-Express-green) ![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--time-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

## 🎮 Features

### Core Games
- **🎰 Roulette** - Bet on Terrorist, Counter-Terrorist, or Empire logos with x2 or x14 payouts
- **🪙 Coinflip** - Head-to-head battles with other players
- **📦 Cases** - Open CS2 cases and win rare weapon skins
- **⚔️ Case Battles** - Challenge other players to case opening battles
- **🏆 Match Betting** - Bet on professional CS2, Dota 2, Valorant, and LoL matches

### Platform Features
- **Real-time Chat** - Live chat with other players
- **Steam Integration** - Login with Steam (simulated)
- **Live Statistics** - Real-time player counts and wagering stats
- **Responsive Design** - Works on desktop and mobile devices
- **Dark Gaming Theme** - Modern CS2-inspired design
- **Socket.IO Integration** - Real-time game updates and interactions

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd csgoempire-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
csgoempire-clone/
├── public/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   └── main.js            # Client-side JavaScript
│   └── images/                # Static images
├── views/
│   ├── layout.ejs             # Main layout template
│   ├── index.ejs              # Homepage
│   ├── roulette.ejs           # Roulette game
│   ├── coinflip.ejs           # Coinflip game
│   ├── cases.ejs              # Cases and case battles
│   └── match-betting.ejs      # Esports betting
├── routes/                    # Express routes (future expansion)
├── server.js                  # Main server file
├── package.json
└── README.md
```

## 🎯 Game Modes

### Roulette
- Classic roulette with CS2 theme
- Bet on T (Terrorist), CT (Counter-Terrorist), or E (Empire)
- 2x payout for T/CT, 14x payout for Empire
- Real-time betting with countdown timer
- Live bet tracking and results

### Coinflip
- Player vs Player coin flipping
- Choose Terrorist or Counter-Terrorist side
- Winner takes all
- Create or join existing games
- Animated coin flip with results

### Cases
- Multiple case types with different rarities
- Animated case opening experience
- Skin rarity system (Common, Rare, Epic, Legendary)
- Case battles between players
- Recent drops feed

### Match Betting
- Professional esports matches
- CS2, Dota 2, Valorant, League of Legends
- Live and upcoming matches
- Competitive odds
- Bet slip system

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, Vanilla JavaScript
- **Real-time**: Socket.IO
- **Styling**: CSS3 with modern gradients and animations
- **Architecture**: MVC pattern

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
```

### Customization
- Modify `public/css/style.css` for styling changes
- Update game logic in individual EJS templates
- Extend server.js for additional features

## 🎨 Design Features

- **Modern Dark Theme** - CS2-inspired color scheme
- **Gradient Backgrounds** - Beautiful gradient effects
- **Smooth Animations** - CSS transitions and keyframes
- **Responsive Layout** - Mobile-friendly design
- **Interactive Elements** - Hover effects and particle animations
- **Gaming UI** - Professional esports-style interface

## 🔒 Security & Legal

⚠️ **IMPORTANT DISCLAIMERS:**

- This project is for **educational purposes only**
- No real money or valuable items are involved
- All gambling mechanics are simulated
- Not intended for commercial use
- Users must be 18+ to view gambling-related content
- Always gamble responsibly

## 🚧 Development

### Adding New Features

1. **New Game Mode**
   - Create new EJS template in `views/`
   - Add route in `server.js`
   - Implement game logic with Socket.IO

2. **Styling Changes**
   - Modify `public/css/style.css`
   - Use CSS custom properties for theme colors

3. **Real-time Features**
   - Extend Socket.IO events in `server.js`
   - Add client-side handlers in `public/js/main.js`

### Scripts

```bash
npm start        # Production server
npm run dev      # Development with nodemon
npm test         # Run tests (not implemented)
```

## 📱 Browser Support

- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

This is an educational project. Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests
- Use as learning material

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This clone is created purely for educational and demonstration purposes. It is not affiliated with, endorsed by, or connected to the original CSGOEmpire website or its operators. All trademarks and copyrights belong to their respective owners.

**Remember: Gambling can be addictive. Please gamble responsibly and only with money you can afford to lose.**

## 🔗 Links

- [Original CSGOEmpire](https://csgoempire.com) (for reference only)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Socket.IO Documentation](https://socket.io/docs/)
- [Express.js Documentation](https://expressjs.com/)

---

**Made with ❤️ for educational purposes**