import logo from './logo.svg';
import './style.css';
// import './logic.js';
import './App.css';

function App() {
  return (
    <div className="App">
  <div class="outer-container">
    <div class="container">
      <div class="player1">
        <div class="score1">
          <h2 class="playertext1">Player 1</h2>
          <p class="playerscore1">0</p>
        </div>
        <div class="current1">
          <h4>Current</h4>
          <span class="playercurrent1">0</span>
        </div>
      </div>
      <div class="player2">
        <div class="score2">
          <h2 class="playertext2">Player 2</h2>
          <p class="playerscore2">0</p>
        </div>
        <div class="current2">
          <h4>Current</h4>
          <span class="playercurrent2">0</span>
        </div>
      </div>
    </div>
  </div>

  <a href="index.html"><button class="btn-new"><i class="fa-solid fa-rotate-right"></i>&nbsp New game</button></a>
  <img src="dice-5.png" alt="Dice" class="dice"/>
  <button class="btn-roll"><i class="fa-solid fa-dice"></i> &nbsp Roll dice</button>
  <button class="btn-hold"><i class="fa-solid fa-hands-holding"></i>&nbsp Hold</button>



    </div>
  );
}

export default App;
