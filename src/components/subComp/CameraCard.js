import React from "react"

function CameraCard(props) {
    return (
        <div className="col-3">
            <div className="item CameraItem clearfix">
                <h3>{props.name} <p className="right">Rs. {props.price}</p></h3>
                <img src={props.imgSrc} className="imgFull" alt={props.name}/>                
                <p className="bottom clearfix">
                    <span className="left">Resolution: {props.resolution}</span> 
                    <span className="right">Display Size: {props.displaySize}</span> 
                </p>                                
            </div>
        </div>
    )
}

export default CameraCard