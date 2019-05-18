import React from 'react';

const emp = (props) => {
    return (
        <tr id={props.id}>
            <td>{props.id}</td>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.salary}</td>
            <td><button className="btn btn-danger btn-sm" onClick={props.deleteEvent}>Delete</button></td>
        </tr>
    )
};

export default emp;