import React from 'react';
import Grocery from '../images/Grocery.png';
import grains from '../images/grains.png';
import fruit from '../images/fruit.png';
import veg from '../images/veg.png';
import mong from '../images/mong.png';
import oil from '../images/oil.png';
import pulses from '../images/pulses.png';
import chicken from '../images/chicken.png';
import mutton from '../images/mutton.png';


const Category = () => {
    return <div className='category'>
        <h1 className='splash'>Saylani Welfare</h1>
        <h3 className='splash1'>Online Market Place</h3>
        <img  src={Grocery}  alt="Grocery"/>
        <h5>Shop by Category</h5>
        <div className='img_div'>
        <img  src={grains}  alt="grains"/>
        <img  src={fruit}  alt="fruit"/>
        <img  src={veg}  alt="veg"/>


        </div>
        <h4> Popular Items</h4>
        
        <div className='img_div'>
        <img  src={mong}  alt="mong"/>
        <img  src={oil}  alt="oil"/>
        <img  src={chicken}  alt="chicken"/>
        <img  src={mutton}  alt="mutton"/>
        <img  src={pulses}  alt="pulses"/>

    
        </div>
    </div>;
}



export default Category;