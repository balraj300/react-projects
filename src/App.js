import './index.css';
import Player from './Components/Player';
import Gameboard from './Components/Gameboard';
function App() {
  return (
<main>
  <div id="game-container">
    <ol id="players">
<Player name={"Player 1"} symbol={"X"}/>
<Player name={"Player 2"} symbol={"0"}/>
<Gameboard/>

    </ol>
    GAME BORAD
  </div>
  LOG
</main>
  );
}

export default App;
