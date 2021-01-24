import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
      <h2>Garbar A Speakeasy</h2>
      <Login />
      <br />
      <Logout />
      <h2>The Hooks way</h2>
  
    </div>
  );
}

export default App;
