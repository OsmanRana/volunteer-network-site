import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="container my-5">
            <Link to='/home'><img className="img-fluid mx-auto d-block w-25" src="/Group 1329.png" alt="" /></Link>
            <div className=" shadow my-5 text-center p-5 login-box border rounded-3">
                <h3 className="m-5">Login with</h3>
                <span className="p-3 m-3 border rounded-pill d-block"><img className="img-fluid" src="./google.png" alt=""/>Continue with Google</span>
                <p  className="m-5">Don't have an account? <Link to='/register'>Create an account</Link></p>
            </div>
            
        </div>
    );
};

export default Login;