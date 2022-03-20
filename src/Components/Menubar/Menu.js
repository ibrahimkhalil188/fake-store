import React from 'react';
import './Menu.css'
const Menu = (props) => {
    return (
        <div className='mb-5'>
            <div className="row menubar">
                <div className="col-4 logo">Lo<span>Go</span></div>
                <div className="col-8 menu">
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Cart <sup>{props.count}</sup></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;