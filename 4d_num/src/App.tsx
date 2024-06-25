import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className='App'>
      <div className='relative'>
      <Header/>
      <Body/>
      </div>
    </div>
  );
}

export default App;
