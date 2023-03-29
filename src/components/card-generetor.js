import { useState } from 'react';
import PeterImg from '../imgs/peter.jpeg'
import StewieImg from '../imgs/stewie.jpg'
export const AllCard = props => {
    const imgsInfo = {
            peter:{src:PeterImg,name:'Peter Griffin',id:'card1'},
            stewie:{src:StewieImg,name:'Stewie Griffin',id:'card2'}
        }

    const obj = {card1:false, card2:false};
    const [wasClick,setWasClick] = useState(obj);

    const cardClicked = (e) => {
        if(wasClick[e.target.id]=== false){
            props.increasePoint()
            setWasClick({...wasClick, [e.target.id]:true });
        }
        else{
            resetCard();
        }
    }
    const resetCard = () => {
        props.reset();
        setWasClick(obj);
    }
    const multipleCards = Object.keys(imgsInfo).map((fKey) => {   
        return <CreateCard
        key={fKey}
        reset={resetCard}
        // cardState={wasClick[imgsInfo[fKey].id]}
        // changeCardState={cardClicked}
        clickHandler={cardClicked} 
        id={imgsInfo[fKey].id}
        src={imgsInfo[fKey].src}
        title={imgsInfo[fKey].name}       
        /> 
    })

    return multipleCards
    return <CreateCard 
            reset={resetCard}
            cardState={wasClick.card1}
            changeCardState={cardClicked}
            id={imgsInfo.peter.id}
            src={imgsInfo.peter.src}
            title={imgsInfo.peter.name}
            />
}

const CreateCard = props => {
    const {reset,clickHandler,id,src,title} = props
    // const clickHandler = (e) => {
    //     console.log(cardState)
    //     if(cardState === false){
    //         changeCardState(e);
    //     }
    //     else{
    //         reset()
    //     }
    // }
    // console.log('create card '+title)
    return (
    <div className='img' >
        <img onClick={clickHandler} src={src} alt='peter' id={id}/>
        <h4>{title}</h4>
    </div>)

    // const [cardClicked, setCardClicked] = useState()
}