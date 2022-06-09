import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div className='main-div'>

           <div className='title-div'>
           <h1>Eco Resort</h1>
           </div>

            <nav >
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/package'>PACKAGE</Link></li>
                    <li><Link to='/room'>ROOM</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/login'>LOG IN</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default MenuBar; <h1>Menu</h1>