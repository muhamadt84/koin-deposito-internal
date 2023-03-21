import React, { useState } from 'react';
import Close from "../assets/icon/Close";
import Globe from '../assets/icon/Globe';
import User from '../assets/icon/User';

function Header() {
  const [search, setSearch] = useState(false)
  return (
    <div className=" p-6 px-12 ml-12 bg-white flex justify-between items-center shadow-lg">
      <div className=" flex space-x-12 items-center">
        <div className=" font-medium">Back Office 2.0</div>
        <div onClick={() => setSearch(!search)} className=" cursor-pointer">Search</div>
        <div className={` flex items-center border rounded py-1 px-3 absolute left-48 transition-all ${search ? 'top-5 ' : '-top-full'}`}>
          <input type="text" className="  text-sm rounded focus:outline-none" placeholder="Search.." />
          <button type="button" className=" ml-2" onClick={() => setSearch(!search)}>
            <Close />
          </button>
        </div>
      </div>
      <div className=" flex space-x-6">
        <User />
        <Globe />
      </div>
    </div>
  );
}

export default Header;
