import React from 'react';
import useAuth from '../Shared/Hooks/useAuth';
import bg from '.././../image/loginBg-removebg-preview.png';
import family from '../../image/cartoon-art-removebg-preview.png'
import './LogIn.css'
import MenuBar from '../Shared/MenuBar/MenuBar';
import SecurityUpdateWarningIcon from '@mui/icons-material/SecurityUpdateWarning';


const LogIn = () => {
    const { handleGoogleSignIn } = useAuth();
    return (
        <div>
            <MenuBar />
            <div className='login-page'>
                <div>
                    <img src={family} alt="" />
                </div>

                <div className='test-div'>
                    <div>
                        <h1 className='text-warning'> <SecurityUpdateWarningIcon sx={{fontSize:'50px'}}/> Please log in first ...!</h1><br />
                        <button onClick={handleGoogleSignIn} className='btn btn-primary'>Log in using G-mail</button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default LogIn;