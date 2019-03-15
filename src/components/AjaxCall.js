import React, { Component } from 'react';
import $ from 'jquery'

class TodoItem extends Component {
    componentWillReceiveProps(nextProps){
        console.log(nextProps.todos);
        console.log(this.props.todos);
    }

    render(){
        return(
            <ul className="DocsListA">
                {
                    this.props.todos.map((todo, index) => {
                        return <li key={index}>{todo}</li>
                    })
                }
            </ul>
        )        
    }
}

class AjaxCall extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Life Cycle Method & Ajax Call',
            users:[],
            todos:['I am Learning ReactJS', 'I am Learning Rails']
        }
        console.log('Constructor');
    }   

    componentDidMount(){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            success:(data) => {
                this.setState({
                    users:data
                })
            }
        })
    }
   
    
    render(){

        const { users, todos } = this.state;
        //const { users } = this.state;
       
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Name</h2>
                        <ul className="DocsListA">
                            {
                                users.map((user) => {
                                    return <li key={user.id}>{user.name}</li>
                                })
                            }
                        </ul> 
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Email</h2>
                        <ul className="DocsListA">
                            {
                                users.map((user) => {
                                    return <li key={user.id}>{user.email}</li>
                                })
                            }
                        </ul> 
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>UserName</h2>
                        <ul className="DocsListA">
                            {
                                users.map((user) => {
                                    return <li key={user.id}>{user.username}</li>
                                })
                            }
                        </ul> 
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Address</h2>
                        <ul className="DocsListA">
                            {
                                users.map((user) => {
                                    return <li key={user.id}>
                                            {user.address.suite},
                                            {user.address.city}                                    
                                    </li>
                                })
                            }
                        </ul> 
                    </div>                                                                                                  
                </div>
            
                <div className="clearfix"></div>

                <div className="col-6">
                    <div className="contentBlock">
                        <h2>Component Will Mount </h2>
                        <form onSubmit ={(e) => {
                            const { todos } = this.state;
                            todos.push(this.refs.addTodo.value);
                            e.preventDefault();
                            this.setState({
                                todos
                            })
                            this.refs.addTodo.vale = "";
                        }}>
                            <input type="text" className="form-control" ref="addTodo"/>
                            <button type="submit" className="btn btn-warning btn-sm">Add Todo</button>
                        </form>
                        <TodoItem todos={todos}/>
                    </div>  
                    
                </div>
            </div>            
        );
    }
}

export default AjaxCall;