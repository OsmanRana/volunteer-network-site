import React from 'react';
import './Event.css'

const Event = (props) => {
    console.log(props)
    const { title, image } = props.event
    console.log(image)
    return (
        <div>
            <img className="img-fluid m-0 p-0" src={image} alt="" />
            <div className="title text-center fw-bold mb-0 d-flex align-items-center justify-content-center"><p className="m-0">{title}</p></div>
        </div>
    );
};

export default Event;