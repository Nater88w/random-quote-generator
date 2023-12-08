import './App.css';
import getColor from './getColor.js';
import { useState } from 'react';
import Quote from './getQuote.js';
function App() {
  return (
    <div className='wrapper'>
      <Quote color = {getColor} />
    </div>
  );
}




export default App;
