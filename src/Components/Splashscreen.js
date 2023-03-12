import React from 'react';
import SplashLogo from '../images/SplashLogo.png';
import '../App.css';
import Button from 'react-bootstrap/Button';
const Splashscreen = () => {
    return <div className='sp'>
      <img  src={SplashLogo}  alt="SplashLogo"/>
      <h1 className='splash'>Saylani Welfare</h1>
      <h3 className='splash1'>Online Market Place</h3>
      <Button  className="btn1" >Success</Button>{' '}
    </div>;
}



export default Splashscreen;