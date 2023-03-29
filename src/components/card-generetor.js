import { useState } from "react";

function getAllImgs(imgs_files, contentDescription) {
	const folder_content = {};
	contentDescription.sort();
	const name_src = imgs_files.keys();
	name_src.forEach(
		(key) =>
			(folder_content[key] = {
				src: imgs_files(key),
				name: contentDescription[name_src.indexOf(key)],
				id: "card" + (name_src.indexOf(key) + 1),
			})
	);
	return folder_content;
}
const allImg = () => {
	const imgNames = [
		"Peter Griffin",
		"Stewie Griffin",
		"Lois Griffin",
		"Brian Griffin",
		"Chris Griffin",
		"Megatron Griffin",
		"Glenn Quagmire",
		"Billy Finn ",
		"Cleveland Brown",
		"Joe Swanson",
		"Seamus Levine",
		"Adam West",
	];
	const path_search = require.context("../imgs/", false, /\.jp/);
	const imgSrc = getAllImgs(path_search, imgNames);
	return imgSrc;
};
const stateObj = (obj) => {
    let newObj = {};
    const key = Object.keys(obj);
    key.forEach((i) => (newObj[obj[i].id] = false));
    return newObj;
};
export const AllCard = (props) => {
	const imgsInfo = allImg();
	const obj = stateObj(imgsInfo);
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
    const randomNumber = (array) =>{
        const indx =  Math.floor(Math.random() * array.length)
        return array[indx]
    }
    const shuffle = (arr=[]) =>{

    }
    const randomizeCards = shuffle()
        // 
        // random function that receive the length of multipleCards
        // return random number (with the length as base )
        // and the select will
        // be pass to another array until theres none at multipleCards
    console.log(multipleCards)
	return multipleCards;
};

const CreateCard = (props) => {
	const { clickHandler, id, src, title } = props;
	return (
		<div className="card">
			<img onClick={clickHandler} src={src} alt="peter" id={id} />
			<h4>{title}</h4>
		</div>
	);
};
