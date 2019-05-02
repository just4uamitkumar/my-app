import React from 'react';
import * as t from 'prop-types'

const DocForm = (props) => {          
    return (
        <form onSubmit={props.addTask}>
            <input type="text"
                className="w100px m-20 form-control"
                onChange={props.updateTaks}
                value={props.currentTask}                               
            />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

DocForm.propTypes = {    
    currentTask: t.string.isRequired,
    updateTask: t.func.isRequired,
    addTask: t.func.isRequired,
}

export default DocForm;