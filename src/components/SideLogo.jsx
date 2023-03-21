import React from 'react';
import Logo from '../assets/img/Logo.png';

function SideLogo() {
  return (
    <div className=" fixed left-0 p-4 bg-main min-h-screen z-10">
      <img
        src={Logo}
        alt="Logo"
      />
    </div>
  );
}

export default SideLogo;
