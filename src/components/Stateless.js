import React, { Component } from 'react';
import DocQue from './subComp/DocQue';
import DocForm from './subComp/DocForm';

class Stateless extends Component{ 
    constructor(){
        super();

        this.changeStatus = this.changeStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);

        this.state = {        
           title : 'Stateless Function',           
           Docs : [{name: 'StateLess 1', completed:false},
                    {name: 'StateLess 2', completed:false},
                    {name: 'StateLess 3', completed:false},
                    {name: 'StateLess 4', completed:false}],
           currentTask:''
        }
    }

    deleteTask(index){
        console.log(index)
        let Docs = this.state.Docs;
        Docs.splice(index,1);
        this.setState({ Docs});
    }

    addTask(evt){
        evt.preventDefault();
        let Docs = this.state.Docs;
        let currentTask = this.currentTask;
        Docs.push({name:currentTask, completed:false });
        this.setState({ Docs, currentTask:''})
    }

    updateTask(newValue){
        this.setState({currentTask:newValue.target.value})        
    }

    editTask(index, newValue){
        console.log(index, newValue);
        var Docs = this.state.Docs;
        var Doc = Docs[index];
        Doc['name']=newValue;
        this.setState({ Docs})
    }

    changeStatus(index){
        var Docs = this.state.Docs;
        var Doc = Docs[index];
        Doc.completed = !Doc.completed;
        this.setState({ Docs:Docs })
    }
    
    render(){
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="contentBlock">
                    <h2>Use of Stateless Component</h2>
                        <DocForm 
                            currentTask={this.props.currentTask}
                            updateTask={this.updateTask}
                            addTask={this.addTask}
                        />

                        <ul className="DocsList">{
                            this.state.Docs.map((Doc, index) => {
                                return <DocQue 
                                details={Doc} 
                                key={index}
                                clickHandler={this.changeStatus} 
                                index={index}
                                deleteTask={this.deleteTask}
                                editTask={this.editTask} />
                            })
                        }</ul>                          
                </div>                
            </div>            
        );
    }
}

export default Stateless;