import { useState } from 'react';
import './App.css';
import { AllCard } from './components/card-generetor';
const Board = props => {
  return (
  <div className='board'>
    <h3>Best Score: {props.bestPoint}</h3>
    <h3>Current Score: {props.currentPoint}</h3>
  </div>)
}
function App() {
  const [bestScore,setBestScore] = useState(0);
  const [currentScore,setCurrentScore]= useState(0);
  const isBestScore = () => {
    // this is async need promise stuff
    if(currentScore > bestScore){
      setBestScore(currentScore);
    };
  };
  const increaseScore = () => {
    setCurrentScore(currentScore + 1)
    
  }
  const resetScore = () => {
    isBestScore()
    setCurrentScore(0)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Card Game</h1>
        <Board currentPoint={currentScore} bestPoint={bestScore}/>
      </header>
      <div className='card-container'>
        <AllCard 
        reset={resetScore}
        increasePoint={increaseScore}
        />
      </div>
    </div>
  );
}

export default App;
