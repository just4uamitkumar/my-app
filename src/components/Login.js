import React, { Component } from 'react';
import logo from './../logo.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Modal from 'react-modal';

class Login extends Component{
    constructor(props) {
        super(props);       
        this.showPass = this.showPass.bind(this);
        this.state = {
            isActive:false,
            isToggleOn: true,
            current_time: new Date().toLocaleTimeString(),
            username:'',
            password:''
        }
    }
    
    showPass() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    componentWillMount() {
        setInterval(()=> {
          let current_time = new Date().toLocaleTimeString() 
            this.setState({current_time})
        }, 1000);

        Modal.setAppElement('body')
    }

    toggleModal =(e) =>{
        e.preventDefault();
        this.setState({
            isActive:!this.state.isActive
        })
        
    }

    updateState(e){
        //this.setState({username: e.target.value, password: e.target.value})

        this.setState({
            username: e.target.value,
            password: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if( this.state.username === 'admin' && this.state.password === 'admin'){
           // this.submitModal(); 
            alert("Logged In successfully.");          
        }
        else{
           alert("Enter valid credentials");          
        }
    }

    
    
    render(){
        return(
        <div className="loginPage">
            <div className="timer"> {this.state.current_time}</div>

            <div className="loginWrapper">
                <div className="text-center">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <h1 className='text-center'>React Port</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label">User Name</label>                        
                        <input type="text" className="form-control"                         
                            placeholder="Enter username"  value={this.state.username}
                            onChange={this.updateState.bind(this)}
                        />                         
                    </div>
                
                    <div className="form-group">
                        <label className="control-label">Password</label>
                        <input type={this.state.isToggleOn ? 'password' : 'text'} className="form-control"
                             value={this.state.password}  
                             onChange={this.updateState.bind(this)}                       
                            placeholder="Enter Password" />
                        <span onMouseDown={this.showPass} onMouseUp={this.showPass}>
                            {this.state.isToggleOn ? <FaEye/> : <FaEyeSlash/>}                       
                        </span>                                           
                    </div>

                    <div className='form-group'>
                        <button type="submit" className="btn btn-block" to="/Wrapper">Login</button>
                    </div>
                </form>

                <div className="form-group text-center">
                    <a href="/" onClick={this.toggleModal}>Forgot Password ?</a>
                </div>                                    
            </div>
            <Modal isOpen={this.state.isActive} onRequestclose={this.toggleModal}>
                <button onClick={this.toggleModal}>Hide Modal </button>
                <h2>Forgot Password </h2>                        
            </Modal>         
        </div>
        );
    }
}

export default Login;