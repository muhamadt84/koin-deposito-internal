import React from 'react';

function Footer() {
  return (
    <div className=" flex justify-between font-medium py-3">
      <div>
        Copyright 2012 © <span className=" text-blue-500">KoinWorks</span>
      </div>
      <div className="flex space-x-3">
        <div className=" text-blue-500">Help</div>
        <div className=" text-blue-500">Support</div>
        <div className=" text-blue-500">Privacy</div>
        <div className=" text-blue-500">Policy</div>
      </div>
    </div>
  );
}

export default Footer;
