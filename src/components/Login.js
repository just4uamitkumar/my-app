import React, { Component } from 'react';
import logo from './../logo.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

const smModal = {
    content : {
      top  : '50%', padding: '10px', left : '50%', right : 'auto',
      bottom : 'auto', marginRight : '-50%',  transform : 'translate(-50%, -50%)',
      width : '360px', boxShadow: '0 0 4px #444'}
  };

class Login extends Component{
    constructor(props) {
        super(props);       
        this.showPass = this.showPass.bind(this);
        this.state = {
            isActiveA:false,
            isActiveB:false,
            isToggleOn: true,
            current_time: new Date().toLocaleTimeString(),
            username:'',
            password:''
        }

        this.showPass = this.showPass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
    closeModalA = (e) =>{
        e.preventDefault()
        this.setState({
          isActiveA:!this.state.isActiveA
        })
    }

    closeModalB = (e) =>{
        e.preventDefault()
        this.setState({
          isActiveB:!this.state.isActiveB
        })
    }

    handleChange(event){
        const {name, value }= event.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const {username, password } = this.state 
        let path = `/`; 
        username === 'admin' && password === 'admin' ? this.props.history.push(path)
        :
        this.setState(prevState => {
        return {
            isActiveB:!prevState.isActiveB     
        }
        });
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
                        <input type="text" className="form-control" name="username"                        
                            placeholder="Enter username"  value={this.state.username}
                            onChange={this.handleChange.bind(this)}
                        />                         
                    </div>
                
                    <div className="form-group">
                        <label className="control-label">Password</label>
                        <input type={this.state.isToggleOn ? 'password' : 'text'} className="form-control"
                             name="password"  value={this.state.password}  
                             onChange={this.handleChange.bind(this)}                       
                            placeholder="Enter Password" />
                        <span onMouseDown={this.showPass} onMouseUp={this.showPass}>
                            {this.state.isToggleOn ? <FaEye/> : <FaEyeSlash/>}                       
                        </span>                                           
                    </div>

                    <div className="text-center">
                        <p className="text-White">{this.state.username} {this.state.password}</p>
                    </div>

                    <div className='form-group'>
                        <button type="submit" className="btn btn-block" to="/Wrapper">Login</button>
                    </div>
                </form>

                <div className="form-group text-center">
                    <a href="/" onClick={this.closeModalA}>Forgot Password ?</a>
                </div>                                    
            </div>
            <Modal isOpen={this.state.isActiveA} onRequestclose={this.closeModalA} style={smModal}>
                <div className="modalHeader">
                    <h4>Forgot Password ?</h4>
                    <button type="submit" onClick={this.closeModalA} className="closeModal">X</button>                 
                </div>

                <div className="modalBody">
                    <h2>Did you forgot your password ? </h2>                    
                </div>
                <div className="modalFooter text-right">
                    <button className="btn btn-danger btn-sm" onClick={this.closeModalA}>No </button>
                    <button className="btn btn-primary btn-sm">Retrieve Password </button>
                </div>
            </Modal>

            <Modal isOpen={this.state.isActiveB} onRequestclose={this.closeModalB} style={smModal}>
                <div className="modalHeader">
                    <h4>Wrong Credentials</h4>
                    <button type="submit" onClick={this.closeModalB} className="closeModal">X</button>                 
                </div>

                <div className="modalBody">
                    <h2>You Entered wrong username/password to login </h2>                    
                </div>
                <div className="modalFooter text-right">
                    <button className="btn btn-danger btn-sm" onClick={this.closeModalB}>No </button>
                </div>
            </Modal>
        </div>
        );
    }
}

export default withRouter(Login);
