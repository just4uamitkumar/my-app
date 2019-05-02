import React, { useState } from 'react';

const FunctionBasedForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = event => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>Function Based Form</h1>
      <div className="form-group">
        <label>Email</label>        
        <input type="email" name="email" id="exampleEmail" placeholder="email"
          className="form-control" value={ email }
          onChange={ event => setEmail(event.target.value) }
        />       
      </div>
      <div className="form-group">
        <label>Password</label>             
          <input type="password" name="password" id="examplePassword"
            placeholder="password" className="form-control" value={ password }
            onChange={ event => setPassword(event.target.value) }
          />
      </div>
      <div className="form-group text-right">       
          <button className="btn btn-primary">Submit</button>       
      </div>
    </form>
  )
};

export default FunctionBasedForm;