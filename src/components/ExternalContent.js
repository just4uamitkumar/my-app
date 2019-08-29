import React, { Component } from 'react';
import jokesData from './data/jokesData';
import JokeCondition from './subComp/JokeCondition';
import productsData from './data/SchoolProduct';
import Product from './subComp/Product';
import todosData from './data/todosData';
import TodoItem from './subComp/TodoItem';


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

                <div className="row">
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
            </div>
        )
    }
}

export default ExternalContent;