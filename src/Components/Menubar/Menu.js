import React from 'react';
import './Menu.css'
const Menu = () => {
    return (
        <div>
            <div className="row menubar">
                <div className="col-4 logo">Lo<span>Go</span></div>
                <div className="col-8 menu">
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;