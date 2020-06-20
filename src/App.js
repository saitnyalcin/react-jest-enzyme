import React from 'react';
import './App.css';
import Footer from './Footer';
import logo from './images/gigasecond-white.png';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" />
        <div className="header">Jest & Enzyme testing</div>
      </header>

      <MyComponent />
      <Footer />
    </div>
  );
}

export default App;
