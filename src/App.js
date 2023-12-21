// src/App.js
import React, { useState } from 'react';
import './App.css';
import LoginForm from './component/loginform';
import UserTable from './component/table';

function App() {
  const [newdata,setNewdata]=useState(null);

  const updateTable=()=>{
    setNewdata(!newdata);
  }
  return (
    <div className="App">
      <LoginForm updateTable={updateTable}/>
      <UserTable newdata={newdata}/>
    </div>
  );
}

export default App;
