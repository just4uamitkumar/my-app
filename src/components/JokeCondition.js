import React from "react"

function JokeCondition(props) {
    console.log(props)
    return (        
        <div className="item Jokes">
            <h3 style={{display: !props.question && "none"}}>Question : {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer : {props.punchLine}</h3>
        </div>       
    )
}

export default JokeCondition