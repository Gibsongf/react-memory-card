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
      <div className="header">
        <span>
        <h1>Family Guy Memory Game</h1>
        <h5>Get points by clicking on an image but don't click on any more than once!</h5>
        </span>
        <Board currentPoint={currentScore} bestPoint={bestScore}/>
      </div >
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
