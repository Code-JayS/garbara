import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
      <h2>Welcome to Garbar A Speakeasy Please login</h2>
      <Login />
      <br />
      <Logout />
      <h2>For some great BBQ</h2>
  
    </div>
  );
}

export default App;
