import React from 'react';
import Logo from '../../assets/img/Logo.png'

function LoadingPage() {
  return (
    <div className=" bg-gradient-to-br from-main to-gray-200 flex flex-col space-y-2 w-full min-h-screen justify-center items-center text-white">
      <img
        className=" animate-spin rounded-full shadow-lg"
        src={Logo}
        alt="Logo"
      />
      <p>Loading...</p>
    </div>
  );
}

export default LoadingPage;
