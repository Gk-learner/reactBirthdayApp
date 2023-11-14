import React, { useState } from 'react'
import './login.css'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom';

import InputField from './InputField';

import {auth, signInWithEmailAndPassword, db, ref, get, child, signOut} from './firebase.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BirthdayPage from './BirthdayPage';


const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault()
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const userKey = userCredential.user.uid
                const dbRef = ref(db)
                get(child(dbRef, `Users/${userKey}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        const user = snapshot.val()
                        console.log('name is', user.name)
                    
                            let dob = user.dob;
                            let name = user.name;
                            props.onUpdateName(name)
                            props.onUpdateDob(dob)
                            navigate("/birthday")

                    }
                   
                })
            }) 
        }

        const handleLogOut = () => {
            signOut(auth)
            .then(() => {
                alert('You are logged Out')
              })
        }
    return( 
        <>
        <div className="container pt-5" id="form">
        <div className="row">
            <div className="col">
                <h1 className="text-center fst-italic">Login</h1>
                <form action="" className="bg-light p-3  pt-5 rounded-3 shadow">
                    <div className="mb-3 d-flex justify-content-around">
                        <label htmlFor="Email" className="form-label text-left">Email:</label>
                        <InputField
                         id="login-email"
                          className="form-control"
                           onChange={(e)=>{setEmail(e.target.value)}}
                            type="email"
                             size="30"
                             autoComplete="on"
                              placeholder="example@email.com"
                              ></InputField>
                    </div>
                    <p className="text-left">Please input the correct format of email!</p>

                    <div className="mb-3 d-flex justify-content-around">
                        <label htmlFor="Password" className="form-label text-left">Password:</label>
                        <InputField 
                            id="login-password" 
                            className="form-control" 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            type="password" 
                            size="30" 
                            autoComplete="on"
                            placeholder="Password">
                        </InputField>
                    </div>
                    <p className="text-left">Please input the correct format of password!</p>

        
                    <div className="d-flex justify-content-between">
                    <Link to='/signup'>Create a new account</Link>
                        <button id="login" onClick={handleSubmit} className="btn btn-warning my-btn-color" 
                        type="submit">Log In</button>
                       {/* <button id="logout" className="btn btn-warning my-btn-color" onClick={handleLogOut}>Log out</button> */}

                    </div>
                </form>
            </div>
            
        </div>
        </div>
        
        </>
    )
}


export default LoginPage;