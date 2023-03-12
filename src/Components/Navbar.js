import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = () => {
    return (<header>
        <div className='display-menu'></div>
        <Link className='menu' to={"/Splashscreen"}>Splashscreen</Link>
        <Link className='menu' to={"/Category"}>Category</Link>
        <Link className='menu' to={"/Login"}>Login</Link>
        <Link className='menu' to={"/Signup"}>Signup</Link>
      
        </header>
)}



export default Navbar;