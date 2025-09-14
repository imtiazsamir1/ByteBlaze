import React from 'react';

import Navber from "../component/Navber"
import Footer from "../component/Footer"

import { Outlet } from 'react-router';
const MainLayout = () => {
    return (
       <div>
            <div className="h16">
                <Navber/>
 </div>
               
            <div className='min-h-[calc{100vh-116px}]'>
            
             <Outlet/>
               </div>
           <Footer/>
           
            
        </div>
    );
};

export default MainLayout;