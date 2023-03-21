import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { SideLogo, Header, TreeMenu, SideMenu, Footer } from '../components';
import LoadingPage from '../components/Loading/LoadingPage';

function Dashboard({ children }) {
  const location = useLocation()
  const pathname = location.pathname.replaceAll('-', ' ').split('/')
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
    return () => mounted === false;
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className=" font-poppins bg-gray-50">
      <SideLogo />
      <Header />
      <TreeMenu
        menu="KoinDeposito"
        subMenu={pathname[1] !== "" ? pathname[1] : "Home"}
      />
      <div className=" flex space-x-5 pr-8">
        <SideMenu
          nameMenu="KoinDeposito"
          link={location.pathname}
        />
        <div className=" w-full">
          <div className=" bg-white p-6 shadow-lg min-h-screen">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
