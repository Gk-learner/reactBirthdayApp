import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from './LoginPage'
import BirthdayPage from './BirthdayPage';
import Signup from './Signup'

function App() {
  const [birthdate, setBirthdate] = useState('')
  const [name, setName] = useState('')


  const getDob =(dob) => {
    setBirthdate(dob)
  }

  const updateName = (name) => {
    setName(name)
  }
  return (
    <div className="App">
      
{/* <Router> */}
  <Routes>
    <Route path='/login' element={<LoginPage onUpdateName={updateName} onUpdateDob={getDob}/> } />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/birthday' element={<BirthdayPage  name={name} birthdate={birthdate}/>} />
    <Route path='/' element={<LoginPage/>} />  
  </Routes>
{/* </Router> */}

    </div>
  );
}

export default App;
