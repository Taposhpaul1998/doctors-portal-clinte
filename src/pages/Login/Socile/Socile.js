import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Socile = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>

            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full max-w-xs">Continue with google</button>
        </div>
    );
};

export default Socile;