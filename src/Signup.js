import React, { useState } from 'react'
import './signup.css'
 import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter as Link } from "react-router-dom";

import {auth, createUserWithEmailAndPassword, db, ref, set, signOut} from './firebase.js'

const Signup = () => {
  const [name, setDName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState(new Date());
  const navigate = useNavigate()

  const gobackToLogin = () =>{
    navigate("/login")
  }
    const handleNameChange = (event) => {
      setDName(event.target.value)
    }      
    const handleEmailChange = (event) => {
      setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
      setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      const userData = {name: name, email: email, password: password, dob: dob.toLocaleDateString() }     
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            // save the user into database
            const userKey = userCredential.user.uid
            set(ref(db, 'Users/' + userKey), userData)
            .then(()=>{
              // signout
              signOut(auth)
              .then(() => {                   
                    navigate("/login")
                })
                .catch((error) => {
                  console.log(error)
              });
             
        })
        })
      }
        
    return(
        <>
        <div className="container pt-5">
            <form onSubmit={handleSubmit} className="bg-light p-3 rounded-3 text-left shadow">
                <div className="form-group">         
             <h3 className="text-center pb-5 fst-italic">Register Yourself</h3>
                    <label htmlFor="exampleInputName">Name</label>
                    <InputField name="name" type="name"
                     className="form-control" 
                       placeholder="Enter Name" 
                        onChange={handleNameChange}></InputField>
                </div>
                <div className="form-group">
                    <label htmlFor="datepicker">D.O.B</label>
                    <div className="form-control p-0">
                    <DatePicker
                            name="dob"
                            value={dob}
                            className="form-control"
                            type="dob"
                            selected={dob}
                            data-date-format="yyyy-mm-dd"
                            onChange={date =>(setDob(date))}
                            />
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="email" type="email" 
                            className="form-control"
                            placeholder="Enter email" 
                            onChange={handleEmailChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <InputField name="pwd" type="password" 
                            className="form-control"
                            placeholder="Password" 
                            onChange={handlePasswordChange}></InputField>
                    </div>
                    <div className="d-flex">
                    <button type="submit" className="btn btn-warning text-light">Signup</button> 
                    
                    <button onClick={gobackToLogin} className=" ml-5 btn btn-warning text-light">Back to Login</button> </div>    
            </form>
        </div>
        </>
    )
}


export default Signup;