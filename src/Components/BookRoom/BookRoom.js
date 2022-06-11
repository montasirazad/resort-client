import React from 'react';
import { useParams } from 'react-router-dom';


const BookRoom = ( ) => {
     

    const { type } = useParams();

    return (
        <div>
            <h1>Booking</h1>
            <h3>Choose : {type}</h3>
             
        </div>
    );
};

export default BookRoom;