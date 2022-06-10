import React from 'react';
import './GettingStart.css';
import { Link } from 'react-router-dom';


const GettingStart = () => {
    return (
        <div className='start-div' >

            <h1>ECO RESORT</h1>
            <h5>Luxury in nature</h5>
            <Link to='/rooms'><button className='btn btn-primary btn-lg'>
                Get started
            </button></Link>


        </div>
    );
};

export default GettingStart;