import React, { useState } from 'react';
import './styles.css';

function SearchBar() {
    const [input, setInput] = useState();
  return (
    <div className='searchbar'>
      <h1>Social Media For Travellers</h1>
      <div className='input'>
        <i class="fa-solid fa-magnifying-glass" style={{color: 'gray'}}></i>
        <input type='text' placeholder='Search here' value={input} onChange={(e)=>setInput(e.target.value)}/>
      </div>
    </div>
  );
}

export default SearchBar;