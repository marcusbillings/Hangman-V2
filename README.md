# Hangman Game v2.0

## Overview
This is a full-stack Hangman game built with React and Node.js. It now includes:
- A working frontend game with dynamic word guessing
- A backend using Express and MongoDB
- Player win/loss tracking
- Unit tests for game logic
- Docker-based MongoDB setup

---

## 🎮 How to Play
1. Enter a single letter in the box.
2. Click **Search** to submit your guess.
3. The word will reveal correct letters; incorrect guesses reduce your lives.
4. Game ends when:
   - All letters are guessed correctly (Win 🎉)
   - You run out of lives (Game Over 💀)

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone <your-repo-link>
cd hangman-2
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Start the React App
```bash
npm start
```
The app will run on `http://localhost:3000`

---

## 🧠 Unit Tests
### Run Jest tests:
```bash
npm test
```

Test file: `src/__tests__/gameLogic.test.js`

---

## 🗃️ Backend API & MongoDB
### 1. Run MongoDB with Docker
```bash
docker-compose up
```
This spins up a MongoDB container on `localhost:27017`

### 2. Start the Express Server
In a new terminal:
```bash
cd server
npm install
node index.js
```

The API will run on `http://localhost:5000`

---

## 📡 API Endpoints
**POST /api/player**  → submit win/loss data
```json
{
  "playerName": "Miles",
  "didWin": true
}
```

**GET /api/players**  → fetch all players and their stats

---

## 📁 Project Structure
```
hangman-2/
├── public/
├── src/
│   └── __tests__/gameLogic.test.js
├── server/
│   ├── index.js
│   └── models/Player.js
├── docker-compose.yml
├── package.json
└── README.md
```

---

## 🧠 MongoDB Document Example
```json
{
  "playerName": "Marcus",
  "gamesPlayed": 4,
  "gamesWon": 3,
  "winPercentage": 75
}
```

---

## 💬 Questions?
Feel free to open an issue or drop a pull request!
