import React, { Component } from 'react';
import FormComp from './subComp/FormComp';

class FormElement extends Component{ 
    constructor(){
        super();
        this.state = {        
            title : 'Form Elements',
            firstName:'',
            lastName:'',
            age:'',
            gender:'',
            destination:'',
            isVegan:false,
            isKosher:false,
            isLactoseFree:false
        }

        this.handleChange = this.handleChange.bind(this)     
    }

    handleChange(event){
        const {name, value, type, checked } = event.target
        type === 'checkbox' ?
        this.setState({
            [name]: checked
        })
        :
        this.setState({
            [name]: value
        })
    }
    
    
    render(){
      
        return(
            <FormComp handleChange={this.handleChange} data={this.state}/>       
        );
    }
}

export default FormElement;