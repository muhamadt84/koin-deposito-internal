import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dataMenu } from '../data/Menu';

function SideMenu(props) {
  const [state, setState] = useState({
    loading: true,
    menu: [],
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setState((prevState) => {
        return {
          ...prevState,
          menu: dataMenu.map((row) => {
            return {
              ...row,
              active: row.name.toLowerCase() === props.nameMenu ? true : false,
              subMenu: row.subMenu.map((item) => {
                return {
                  ...item,
                  active: item.link === props.link ? true : false
                }
              })
            };
          }),
          loading: false,
        };
      });
    }

    return () => mounted === false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCollapse = (index, type) => {
    const menu = [...state.menu];
    menu[index] = {
      ...(menu[index] = {
        ...menu[index],
        active: type,
      }),
    };
    setState((prevState) => {
      return {
        ...prevState,
        menu: menu,
      };
    });
  };

  return (
    <div className=" bg-white font-medium text-gray-400 flex flex-col pl-24 min-w-[22rem] min-h-screen rounded shadow-lg z-0">
      { state.menu &&
        state.menu.map((row, index) => (
          <div
            className=" flex flex-col"
            key={ row.id }>
            <div
              className={ ` text-black rounded  hover:bg-gray-100 cursor-pointer p-2` }
              onClick={ () => handleCollapse(index, !row.active) }
            >
              { row.name }
            </div>
            { row.subMenu.length > 1 && (
              // <div className={ ` flex flex-col ${row.active ? 'flex' : 'hidden'} ` }>
              <div className={ ` flex flex-col ` }>
                { row.subMenu.map((item) => (
                  <Link
                    key={ item.id }
                    to={ item.link }
                    className={ ` rounded hover:bg-gray-100 cursor-pointer p-2 pl-4 ${item.active ? ' text-blue-500 bg-purple-50' : ' '}` }
                  >
                    { item.name }
                  </Link>
                )) }
              </div>
            ) }
          </div>
        )) }
    </div>
  );
}

export default SideMenu;
