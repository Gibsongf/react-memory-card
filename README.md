planning:
a theme for the card displayed = family guy
Griffin = Peter, Lois, Stewie, Brian, Megatron, Chris
Glenn Quagmire
Billy Finn 
Cleveland Brown
Joe Swanson
Seamus Levine
Adam West
FUNCTION MAIN APP 
    bestScore setBestScore = useState (0)
    currentScore setCurrentScore = useState (0)
    isBestScore =>
        if(currentScore > bestScore )
            setBestScore(currentScore)
        
    increaseCurrentScore =>
        setCurrentScore(currentScore + 1)
    resetCurrentScore =>
        setCurrentScore(0)  
    return
        div 
        BoardStuff current=currentScore best=bestScore
        AllCard increase=increaseCurrentScore reset=resetCurrentScore
        div/>
        
FUNCTION BoardStuff
    return JSX Board prop.current prop.best (score points)


FUNCTION AllCards that is the composition of the below functions?
    obj={card1:false ...(12x)}
    wasClick setWasClick = useState(obj)
    checkCardClick => (e)
        setWasClick ({... obj,e.target.id:true  })
    resetCard =>
            prop.reset()
            setWasClick(obj)

    map part => we can try this in an array and
                the render will be a random function that receive
                the length of obj after map and return random number 
                with the length as base and the select will
                be delete of the array or pass to another array
             
    return img.map(
        img => {
        return 
            Card
            key=uniquid 
            clickHandler=checkCardClick
            src=img.src 
            title=img.title
            increasePoint=prop.increase 
            reset=prop.reset
        })

FUNCTION Card :
    state boolean init(false)
    clickHandler(
        if (!state)
            prop.increasePoint()
            setState(TRUE)
        else
            prop.reset()
    )

    return JSX cardId=card1 card(prop.src,prop.title)  onClick = prop.clickHandler
    

FUNCTION that render
    the whole thing again with the card boolean reset to init state.
    type of reset we can try
    #1  take the obj that store card states and turn all to false or 
    #   just have a saved version the obj that is all false


    in random order with the previous changed state card  maintained

    
