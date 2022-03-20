import React from 'react';

const Menu = () => {
    return (
        <div>
            <div className="row">
                <div className="col-4">Logo</div>
                <div className="col-8">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Cart</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;