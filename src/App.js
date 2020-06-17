import React from 'react';
import './App.css';
import Footer from './Footer';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">Jest & Enzyme testing</div>
      </header>

      <MyComponent />
      <Footer />
    </div>
  );
}

export default App;
