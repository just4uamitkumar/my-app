import React, { Component } from 'react';
import * as t from 'prop-types'


class DocQue extends Component{

    constructor(props){
        super(props);

        this.state = {
            isEditing:false
        }

        this.renderForm = this.renderForm.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.UpdateItem = this.UpdateItem.bind(this);
    }

    UpdateItem(evt){
        evt.preventDefault();
        this.props.editTask(this.props.index, this.input.value);
        this.toggleState();
    }

    toggleState(){
        const { isEditing } = this.state;
         this.setState({
            isEditing:!isEditing
        });
    }

    renderItem(){
        return(
            <li onClick={ () => {
                this.props.clickHandler(this.props.index);
            }} className={this.props.details.completed ? 'completed clearfix' : 'clearfix'}

            >
                {this.props.details.name}

                <button onClick={(evt) => {
                    evt.stopPropagation();
                    this.props.deleteTask(this.props.index)
                }} >Delete</button>

                <button onClick={(evt) => {
                    evt.stopPropagation();
                    this.toggleState()
                }} >Edit Item</button>

            </li>
        )
    }

    renderForm(){
        return(
            <form onSubmit={this.UpdateItem}>
                <input type="text" ref={(value) =>{
                    this.input = value
                }} defaultValue={this.props.details.name}
                    className="w100px m-20 form-control"
                />
                <button type="submit">Update Item</button>
            </form>
        )        
    }

    render(){
        //const isEditing = this.state.isEditing;
        const { isEditing } = this.state;

        return (
            <section>
                {
                    isEditing ? this.renderForm() : this.renderItem()
                }               
            </section>            
        )
    }
}

DocQue.propTypes = {    
    clickHandler: t.func.isRequired,
    index: t.number.isRequired,
    deleteTask: t.func.isRequired,
    editTask: t.func.isRequired,
    details: t.object.isRequired
}



export default DocQue;