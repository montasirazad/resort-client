import initializeAuthentication from "../../Firebase/initializeAuthentication";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";

initializeAuthentication();

const useFirebase = () => {

    const [signedInUser, setSignedInUser] = useState({});

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setSignedInUser()
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    }

    const handleGoogleLogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setSignedInUser({})
        }).catch((error) => {
             
        });
    }

    
    return {
        signedInUser,
        handleGoogleSignIn,
        handleGoogleLogOut
    }
}

export default useFirebase;