import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>        
        <Routes>
          <Route path='/login' element={<LoginPage onUpdateName={updateName} onUpdateDob={getDob}/> } />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/birthday' element={<BirthdayPage  name={name} birthdate={birthdate}/>} />
          <Route path='/reactBirthdayApp' element={<LoginPage/>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
