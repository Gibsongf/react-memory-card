import { useState } from "react";
import "./App.css";
import { AllCard } from "./components/card-generetor";
const Board = (props) => {
    return (
        <div className="board">
            <h3>Best Score: {props.bestPoint}</h3>
            <h3>Current Score: {props.currentPoint}</h3>
        </div>
    );
};
function WonPopUp(props) {
    const hideEl = (e) => {
        const mainParent = e.target.parentElement.parentElement;
        mainParent.setAttribute("style", "display: none;");
        props.reset();
        document.getElementById("card1").click(); //to reset all cards state to false again
    };
    const popUp = (
        <div id="pop-up">
            <div id="pop-up-content">
                You Won Congratulations!!
                <button onClick={hideEl}>Ok</button>
            </div>
        </div>
    );
    if (props.bestScore === 12) {
        return popUp;
    }
}
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
                <Board currentPoint={currentScore} bestPoint={bestScore} />
                <WonPopUp bestScore={currentScore} reset={playerWon} />
            </div>
            <div className="card-container">
                <AllCard reset={resetScore} increasePoint={increaseScore} />
            </div>
        </div>
    );
}

export default App;
