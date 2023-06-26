export const ScoreBoard = (props) => {
    return (
        <div className="board">
            <h3>Best Score: {props.bestPoint}</h3>
            <h3>Current Score: {props.currentPoint}</h3>
        </div>
    );
};
