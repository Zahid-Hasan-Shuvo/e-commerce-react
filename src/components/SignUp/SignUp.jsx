import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form >
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="confirm" required />
            </div>
            <input  className='btn-submit' type="submit" value="SignUp Now" />
        </form>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
    </div>
    );
};

export default SignUp;