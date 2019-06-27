import React from "react"

function TodoItem(props) {
    console.log(props)
    return (        
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <label>{props.item.text}</label>
        </div>       
    )
}

export default TodoItem