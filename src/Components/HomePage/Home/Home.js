import React from 'react';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import GettingStart from '../GettingStart/GettingStart';
import './Home.css';

const Home = () => {
    return (



        <div className='homepageDiv'>
            <MenuBar />
            <GettingStart />
        </div>

    );
};

export default Home;