import React from 'react';
import useAuth from '../Shared/Hooks/useAuth';

const LogIn = () => {
    const { handleGoogleSignIn } = useAuth();
    return (
        <div>
            <h1>This is log in</h1>
            <button onClick={handleGoogleSignIn} className='btn btn-primary'>Login</button>
        </div>
    );
};

export default LogIn;