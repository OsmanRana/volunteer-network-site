import React from 'react';
import useEvents from '../../../hook/useEvents';
import Event from './Event'

const Events = () => {
    const {events} = useEvents();
    
    return (
        <div className="container row row-cols-1 row-cols-sm-2 row-cols-md-4 m-0 p-0">
            {
                events?.map(event=><Event
                key={event._id}
                event={event}
                ></Event>)
            }
        </div>
    );
};

export default Events;