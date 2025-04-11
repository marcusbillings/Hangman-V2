import React from 'react';
import LetterBox from './LetterBox';
import SingleLetterSearchbar from './SingleLetterSearchBar';
import './App.css';

const pics = ['noose.png', 'upperBody.png', 'upperandlowerbody.png', '1arm.png', 'botharms.png','Dead.png'];
const words = ["Morehouse", "Spelman", "Basketball", "Table", "Museum", "Excellent", "Fun", "React"];

class HangmanGame extends React.Component {
  state = {
    wordList: words,
    curWordIndex: Math.floor(Math.random() * words.length),
    lifeLeft: 5,
    usedLetters: [],
    gameOver: false
  };

  handleLetterGuess = (letter) => {
    if (this.state.usedLetters.includes(letter) || this.state.gameOver) return;
    
    const { curWordIndex, wordList, usedLetters, lifeLeft } = this.state;
    const word = wordList[curWordIndex].toUpperCase();
    const newUsedLetters = [...usedLetters, letter.toUpperCase()];
    const isCorrect = word.includes(letter.toUpperCase());

    this.setState({
      usedLetters: newUsedLetters,
      lifeLeft: isCorrect ? lifeLeft : lifeLeft - 1,
      gameOver: lifeLeft - (isCorrect ? 0 : 1) === 0 || word.split('').every(l => newUsedLetters.includes(l))
    });
  };

  startNewGame = () => {
    this.setState({
      curWordIndex: Math.floor(Math.random() * words.length),
      lifeLeft: 5,
      usedLetters: [],
      gameOver: false
    });
  };

  render() {
    const { curWordIndex, wordList, usedLetters, lifeLeft, gameOver } = this.state;
    const word = wordList[curWordIndex].toUpperCase();
    
    return (
      <div className="hangman-game">
        <h1>Hangman</h1>
        <img src={pics[5 - lifeLeft]} alt="Hangman" />
        <div className="word-display">
          {word.split('').map((letter, index) => (
            <LetterBox key={index} letter={letter} isVisible={usedLetters.includes(letter)} />
          ))}
        </div>
        <SingleLetterSearchbar onSearch={this.handleLetterGuess} />
        <p>Lives Left: {lifeLeft}</p>
        {gameOver && <p>{lifeLeft > 0 ? "You Win!" : "Game Over!"}</p>}
        <button onClick={this.startNewGame}>New Game</button>
      </div>
    );
  }
}

export default HangmanGame;
