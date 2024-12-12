import React from 'react';
import './styles.css'

function Header({detailPage}) {
  return (
    <div className='header'>
      <h1>TravelMedia.in</h1>
      <div className='iconBox'>
        <i class="fa-solid fa-house" style={{opacity: detailPage?'0.5': '1'}}></i>
        <i class="fa-solid fa-bell" style={{opacity: '0.5'}}></i>
        <i class="fa-solid fa-bookmark" style={{opacity: detailPage?'1':'0.5'}}></i>
        <i class="fa-solid fa-user" style={{opacity: '0.5'}}></i>
      </div>
    </div>
  );
}

export default Header;