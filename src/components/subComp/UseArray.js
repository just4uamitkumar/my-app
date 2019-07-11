import React from 'react';

function UseArray(props) {          
    return (
        <div className="contentBlock clearfix">
            <h2>Using Array into Select Dropdown</h2>
            <select className="form-control"
                value={this.props.x}
                onChange={(e) => this.setState({tech:e.target.value})}
            >
                {
                    this.props.techs.map((x, index) => {
                        return <option key={index} value={x}>{x}</option>
                    })
                }
            </select>

                <div className="text-center">
                <h3>{props.tech}</h3>
            </div>                            
        </div>
    )
}



export default UseArray;

