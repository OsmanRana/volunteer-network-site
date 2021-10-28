import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Register = () => {
    
    const {id} = useParams()
    // getting single event data
    const [event, setEvent] = useState();
    useEffect(()=>{
        const url = `http://localhost:5000/events/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setEvent(data))
    },[])

    // sending user data to the database
    const { register, handleSubmit , reset} = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId)
            alert('User added successfully');
            reset();
        })
        console.log(data);
    }
    return (
        <div className="container my-5">
            <Link to='/home'><img className="img-fluid mx-auto d-block w-25" src="/Group 1329.png" alt="" /></Link>
            {/* {id} */}
            <div className=" shadow my-5  p-5 login-box border rounded-3">
                <h3 className="ms-5">Register as a Volunteer</h3>
                <form className="ms-5 d-flex flex-column my-3" onSubmit={handleSubmit(onSubmit)}>
                    <input className="my-3 py-3 border-0 border-bottom" placeholder="Full Name" {...register("name", { required: true })} />
                    <input className="my-3 py-3 border-0 border-bottom" placeholder="Email" {...register("email", { required: true })} />
                    <input className="my-3 py-3 border-0 border-bottom" placeholder="Date" type="date" {...register("date", { required: true })} />
                    <input className="my-3 py-3 border-0 border-bottom" placeholder="Description" {...register("description", { required: true })} />
                    <input className="my-3 py-3 border-0 border-bottom" placeholder="Event" defaultValue={event?.title} {...register("event", { required: true })} />
                    <input className="btn btn-primary py-3" type="submit" value="Register" />
                </form>
                <p className="ms-5">Already registered? <Link to='/login'>Sign In here</Link></p>
            </div>

        </div>
    );
};

export default Register;