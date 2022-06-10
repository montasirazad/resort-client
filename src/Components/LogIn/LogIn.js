import React from 'react';
import useAuth from '../Shared/Hooks/useAuth';
import bg from '.././../image/loginBg-removebg-preview.png';
import family from '../../image/cartoon-art-removebg-preview.png'
import './LogIn.css'

const LogIn = () => {
    const { handleGoogleSignIn } = useAuth();
    return (
        <div className='login-page'>
            <div>
            <img src={family} alt="" />
            </div>

            <div className='test-div'>
                <h1>This is log in</h1>
                <button onClick={handleGoogleSignIn} className='btn btn-primary'>Login</button>
               
            </div>


        </div>
    );
};

export default LogIn;