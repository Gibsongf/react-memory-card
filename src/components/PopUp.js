export function WonPopUp(props) {
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
