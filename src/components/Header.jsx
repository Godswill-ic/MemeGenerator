import React from 'react';
import trollFace from '../assets/troll--face.png'


function Header() {
  return (
    <div className='head'>
      <div className='head--inner'>
        <img src={trollFace} alt='' />
        <h3>MemeGenerator</h3>
      </div>

      <p>React Course - Project</p>
    </div>
  );
}

export default Header;