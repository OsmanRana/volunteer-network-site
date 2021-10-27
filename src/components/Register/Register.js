import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container my-5">
            <Link to='/home'><img className="img-fluid mx-auto d-block w-25" src="/Group 1329.png" alt="" /></Link>
            <div className=" shadow my-5  p-5 login-box border rounded-3">
                <h3 className="ms-5">Register as a Volunteer</h3>
                <form className="ms-5 d-flex flex-column my-3" onSubmit={handleSubmit(onSubmit)}>
                    <input className="my-3 py-3 border-0 border-bottom" placeholder="Full Name" {...register("name", { required: true })} />
                    <input className="my-3 py-3 border-0 border-bottom" placeholder="Email" {...register("email", { required: true })} />
                    <input className="my-3 py-3 border-0 border-bottom" placeholder="Date" type="date" {...register("date", { required: true })} />
                    <input className="my-3 py-3 border-0 border-bottom" placeholder="Description" {...register("description", { required: true })} />
                    <input className="my-3 py-3 border-0 border-bottom" placeholder="Event" {...register("event", { required: true })} />
                    <input className="btn btn-primary" type="submit" value="Register" />
                </form>
                <p className="ms-5">Already registered? <Link to='/login'>Sign In here</Link></p>
            </div>

        </div>
    );
};

export default Register;