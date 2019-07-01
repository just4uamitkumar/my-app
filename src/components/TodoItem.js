import React from "react"

function TodoItem(props) {
    return (        
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <label>{props.item.text}</label>
        </div>       
    )
}

export default TodoItem