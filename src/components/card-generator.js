import { useState } from "react";
import { initialStateObj, allImg } from "./utils";

const randomCard = (cards) => {
    const randomNumber = (array) => {
        const indx = Math.floor(Math.random() * array.length);
        return indx;
    };

    let arr = [];
    const shuffle = (lst) => {
        const i = randomNumber(lst);
        arr.push(lst[i]);
        lst.splice(i, 1);
        if (lst.length === 0) {
            return;
        }
        shuffle(lst, arr);
    };
    shuffle(cards);
    return arr;
};
export const AllCard = (props) => {
    const imgsInfo = allImg();
    const obj = initialStateObj(imgsInfo);
    const [wasClick, setWasClick] = useState(obj);

    const cardClicked = (e) => {
        if (wasClick[e.target.id] === false) {
            props.increasePoint();
            setWasClick({ ...wasClick, [e.target.id]: true });
        } else {
            resetCard();
        }
    };
    const resetCard = () => {
        props.reset();
        setWasClick(obj);
    };
    const multipleCards = Object.keys(imgsInfo).map((fKey) => {
        return (
            <CreateCard
                key={fKey}
                reset={resetCard}
                clickHandler={cardClicked}
                id={imgsInfo[fKey].id}
                src={imgsInfo[fKey].src}
                title={imgsInfo[fKey].name}
            />
        );
    });
    return randomCard(multipleCards);
};

const CreateCard = (props) => {
    const { clickHandler, id, src, title } = props;
    return (
        <div className="card">
            <img onClick={clickHandler} src={src} alt={title} id={id} />
            <h4>{title}</h4>
        </div>
    );
};
