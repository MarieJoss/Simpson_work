import React from 'react';
import logo from './logo.svg';
import Avatar from './components/Avatar';
import './App.css';

function App() {
  const Homer = {
    firstName:"Homer", lastName:"Simpsons", image:"https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png"
  }

  const Bart = {
    firstName:"Bart", lastName:"Simpsons", image:"https://www.stickees.com/files/cartoon/the-simpsons/2240-bart-simpson-skate.png"
  }
return (
  <div className="App">
    <Avatar {...Homer}/>
    <Avatar {...Bart}/>
  </div>
);
}

export default App;
