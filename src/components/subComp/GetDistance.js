import React from 'react';
import {FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function GetDistance(props) {          
    return (
        <div className="contentBlock clearfix">
            <h2>Distance between two points :  {props.posXB - props.posXA}</h2>                           
            <div className="rangeSlider">
                <div className="movingPoint first" style={{left:props.posXA}}>{props.posXA}</div>
                <div className="movingPoint second" style={{left:props.posXB}}>{props.posXB}</div>
            </div>

            <div className="col-12 spaceAround">
                <button className="btn btn-primary" onClick={props.moveLeftA}><FaAngleLeft/></button>
                <button className="btn btn-primary" onClick={props.moveRightA}><FaAngleRight/></button>
                <p>Click Left or Right arrow to move circle points</p>
                <button className="btn btn-primary" onClick={props.moveLeftB}><FaAngleLeft/></button>
                <button className="btn btn-primary" onClick={props.moveRightB}><FaAngleRight/></button>                                    
            </div>                            
        </div>
    )
}



export default GetDistance;

