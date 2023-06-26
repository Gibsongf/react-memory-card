import { useState } from "react";
import "./App.css";
import { AllCard } from "./components/card-generetor";
import { ScoreBoard } from "./components/ScoreBoard";
import { WonPopUp } from "./components/PopUp";

function App() {
    const [bestScore, setBestScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const isBestScore = () => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
    };
    const increaseScore = () => {
        setCurrentScore(currentScore + 1);
    };
    const resetScore = () => {
        isBestScore();
        setCurrentScore(0);
    };
    const playerWon = () => {
        setBestScore(0);
        setCurrentScore(0);
    };

    return (
        <div className="App">
            <div className="header">
                <h1>Family Guy Memory Game</h1>
                <h5>
                    Get points by clicking on an image but don't click on any
                    more than once!
                </h5>
                <ScoreBoard currentPoint={currentScore} bestPoint={bestScore} />
                <WonPopUp bestScore={currentScore} reset={playerWon} />
            </div>
            <div className="card-container">
                <AllCard reset={resetScore} increasePoint={increaseScore} />
            </div>
        </div>
    );
}

export default App;
