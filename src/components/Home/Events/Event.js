import React from 'react';
import { useHistory } from 'react-router';
import './Event.css'

const Event = (props) => {
    const history = useHistory();
    const { title, image, _id } = props.event;
    const color2 = { red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255) };
    const handleClick = id =>{
        history.push('/login')
        console.log('clicked', id)
    } 

    return (
        <div className="box" onClick={()=>handleClick(_id)}>
            <img className="img-fluid m-0 p-0" src={image} alt="" />
            <div style = {{ backgroundColor: "rgb(" + color2.red + "," + color2.green + "," + color2.blue + ")" }} className="title text-center fw-bold mb-0 d-flex align-items-center justify-content-center"><p className="m-0">{title}</p></div>
        </div>
    );
};

export default Event;