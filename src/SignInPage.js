import React, { useState } from 'react';
import HamburgerMenu from './Hamburgermenu';
import app from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const SignInPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        const auth = getAuth(app); // Use the initialized app
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Sign in successful!');
            navigate('/controller');
        } catch (error) {
            setError(error.message); // Display error message
        }
    };

    return (
        <div className="sign-in-container">
            <HamburgerMenu/>
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignInPage;