import React from "react"

function AnimalCard(props) {
    console.log(props)
    return (
        <div className="col-3">
            <div className="item">
                <img src={props.imgUrl} className="imgFull" alt={props.name}/>
                <h3>{props.name}</h3>
                <p>Phone : {props.phone}</p>
                <p>Email : {props.email}</p>
            </div>
        </div>
    )
}

export default AnimalCard