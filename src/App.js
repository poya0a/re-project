import React from 'react';
import './App.css';
import Footer from './components/FooterComponent.js';
import Header from './components/HeaderComponent.js';
import Main from './components/MainComponent.js';
import Skip from './components/SkipComponent.js';

function App() {
  return (
    <div className="App">
      <Skip/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
