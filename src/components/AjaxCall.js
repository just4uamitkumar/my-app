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
                        return <li key={index}>{index + 1 } -:- {todo}</li>
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
            title : 'Ajax Call Using JQuery',
            users:[],
            todos:['I am Learning ReactJS', 'I am Learning Rails', 'I am Learning JavaScript']
        }
    }   

    componentDidMount(){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            success:(data) => {
                this.setState({ users:data })
            }
        });        
    }

    deleteRow(index) {
        const filtered = this.state.users.filter(user => user.id !== index )
        this.setState({users:filtered})       
    }    
    
    render(){
        const { users, todos } = this.state;    
       
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="row">
                    <div className="col-8">
                        <div className="contentBlock">
                            <h2>Name</h2>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>User name</th>
                                            <th>Email</th>
                                            <th>Adress</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {users.map(user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address.street}, {user.address.city}</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger"
                                                onClick={this.deleteRow.bind(this, user.id)}>Delete</button>
                                             </td>                                        
                                        </tr>
                                    )}                                    
                                    </tbody>
                                </table>
                            </div> 
                        </div>                                                                                                  
                    </div>               

                    <div className="col-4">
                        <div className="contentBlock">
                            <h2>Component Will Mount </h2>
                            <form onSubmit ={(e) => {
                              this.refs.addTodo.value.length > 0 ?  todos.push(this.refs.addTodo.value) : alert('Enter the Value ');
                                e.preventDefault();
                                this.setState({ todos });
                                this.refs.addTodo.value = ""                         
                            }}>
                                <input type="text" className="form-control" ref="addTodo"/>
                                <button type="submit" className="btn btn-warning btn-sm">Add Todo</button>
                            </form>
                            <TodoItem todos={todos}/>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}

export default AjaxCall;