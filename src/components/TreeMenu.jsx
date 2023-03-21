import React from 'react';

function TreeMenu(props) {
  return (
    <div className=" ml-12 p-4 px-12 flex space-x-2 font-medium text-gray-400">
      <div className=" text-blue-500">Dashboard</div>
      <div className=" text-blue-500">{`>`}</div>
      <div className=" text-blue-500 capitalize">{props.menu}</div>
      <div className=" text-blue-500">{`>`}</div>
      <div className=" capitalize">{props.subMenu}</div>
    </div>
  );
}

export default TreeMenu;
