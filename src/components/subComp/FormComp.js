import React from 'react';

function FormComp(props){       
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{props.data.title} </h1>
                </div>

                <div className="col-4">
                    <div className="contentBlock">
                        <h2>Form Element</h2>
                        <form onSubmit={props.handleSubmit}>
                            
                            <div className="form-group">
                                <div className="col-6">
                                    <input type="text" placeholder="First Name" 
                                        onChange={props.handleChange} value={props.data.firstName}
                                        className="form-control" name="firstName" />                                
                                </div>

                                <div className="col-6">
                                    <input type="text" placeholder="Last Name" 
                                       onChange={props.handleChange} value={props.data.lastName}
                                        className="form-control" name="lastName" />                                
                                </div>                               
                            </div>

                            <div className="form-group">
                                <div className="col-6">                                
                                    <input type="text" placeholder="Age" 
                                        onChange={props.handleChange} value={props.data.age}
                                        className="form-control"  name="age"/>                                
                                </div>

                                <div className="col-6">
                                    <label className="col-6"><input type="radio" name="gender" value="Male"
                                        onChange={props.handleChange} checked={props.data.gender === 'Male'}
                                       />  Male</label>

                                    <label className="col-6"><input type="radio" name="gender" value="Female"
                                        onChange={props.handleChange} checked={props.data.gender === 'Female'}
                                       />  Female</label>                              
                                </div>                               
                            </div>

                            <div className="form-group">
                                <div className="col-6">                                
                                    <select value={props.data.destination} name="destinatioin"
                                        onChange={props.handleChange} className="form-control">
                                        <option value=""> Please Choose a destination </option>
                                        <option value="germany">Germany</option>
                                        <option value="norway">Norway</option>
                                        <option value="north pole">North Pole</option>
                                        <option value="south pole">South Pole</option>
                                    </select>                               
                                </div>                                                               
                            </div>

                            <div className="form-group">
                                <label className="col-3">Lactose Status</label>
                                <label className="col-3">
                                    <input type="checkbox" name="isVegan" onChange={props.handleChange}
                                    checked={props.data.isVegan} /> Vegan ?
                                </label>
                                <label className="col-3">
                                    <input type="checkbox" name="isKosher" onChange={props.handleChange}
                                    checked={props.data.isKosher} /> Kosher ?
                                </label>
                                <label className="col-3">
                                    <input type="checkbox" name="isLactoseFree" onChange={props.handleChange}
                                    checked={props.data.isLactoseFree} /> Lactose Free?
                                </label>                     
                            </div>
                            
                            <div className="form-group text-right">
                                <button type="reset" className="btn btn-warning">
                                    Reset
                                </button>
                                <button type="submit"className="btn btn-primary">
                                    Submit
                                </button>                               
                            </div>
                        </form>                        
                    </div>
               </div>


               <div className="col-3">
                    <div className="contentBlock clearfix">
                        <h2>Form Value</h2>
                         <p>Name : {props.data.firstName} {props.data.lastName}</p>
                         <p>Age : {props.data.age}</p>
                         <p>Gender : {props.data.gender}</p>
                         <p>Destination : {props.data.destination.option}</p>
                         <p>Your Dietry Restriction : 
                            {props.data.isVegan ? "Yes " : "No "} 
                            {props.data.isKosher ? "Yes " : "No "}
                            {props.data.isLactoseFree ? "Yes " : "No "}
                         </p>                                              
                    </div>
               </div>                                             
            </div>        
        );
   
}

export default FormComp;