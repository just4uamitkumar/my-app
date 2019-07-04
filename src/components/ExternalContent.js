import React, { Component } from 'react';
import jokesData from './jokesData';
import JokeCondition from './JokeCondition';
import productsData from './SchoolProduct';
import Product from './Product';
import todosData from './todosData';
import TodoItem from './TodoItem';


const jokeComponents = jokesData.map(joke => <JokeCondition key={joke.id} question={joke.question} 
    punchLine={joke.punchLine}  />)

const productComponent = productsData.map(item => <Product key={item.id} product={item} />)

class ExternalContent extends Component{

    constructor(props){
        super(props )        
        this.state = {
           title : 'External Data' ,
           titleA : 'Joke Contant from External File',
           titleB : 'Product Content from External File',
           titleC : 'ToDo Data from External File',
           todos: todosData
        }
    }

    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return { todos: updatedTodos }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} 
            handleChange={this.handleChange} />)
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-4">
                    <div className="contentBlock clearfix">
                        <h2>{this.state.titleA} </h2>
                        {jokeComponents}
                    </div>
                </div>

                <div className="col-4">
                    <div className="contentBlock clearfix">
                        <h2>{this.state.titleB} </h2>
                        {productComponent}
                    </div>
                </div>

                <div className="col-4">
                    <div className="contentBlock clearfix">
                        <h2>{this.state.titleC} </h2>
                        {todoItems}
                    </div>
                </div>               
            </div>
        )
    }
}

export default ExternalContent;