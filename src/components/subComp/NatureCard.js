import React from "react"

function NatureCard(props) {
    //console.log(props)
    return (
        <div className="col-3">
            <div className="item">
                <img src={props.contact.imgUrl} className="imgFull" alt={props.contact.name}/>
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>
    )
}

export default NatureCard