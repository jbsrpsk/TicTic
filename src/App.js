import React from 'react';
import './App.css';
import Game from './game'
import Header from './header'

function App() {
  return (
    <>
    <div className='navbar'>
      <div className='logo'>
        <img src={process.env.PUBLIC_URL + '/pics/gamelogo.png'} alt='Logo' />
      </div>
      <div className='nav-links'>
        <p>Login</p>
        <p>Contact</p>
      </div>
    </div>
    <div>
      <Header />
    </div>
     <div className='content'>
       <Game />
      </div>
    </>
    
  );
}

export default App;
