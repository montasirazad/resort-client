import React from 'react';
import Room from '../Room/Room';
import MenuBar from '../Shared/MenuBar/MenuBar';
import './Rooms.css';

const rooms = [
    {
        name: 'Suite',
        area: '68m',
        size: '2 double or king',
        person: '2 adults',
        image: 'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f65416994_3xl.jpg?impolicy=Card',
        description: 'For an extended stay or for extra space,choose one of our Suites featuring a separate living area'


    },
    {
        name: 'Superior Room',
        area: '28m',
        size: '2 double or king',
        person: '2 adults',
        image: 'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guestroom/16256-113891-f65416992_3xl.jpg?impolicy=Card',
        description: 'Unwind with plush bedding,free Wi-Fi, and a smart TV in this standard'


    },
    {
        name: 'Deluxe Room',
        area: '36m',
        size: '2 double or king',
        person: '2 adults',
        image: 'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guestroom/16256-113891-f65416900_3xl.jpg?impolicy=Card',
        description: 'For more space,choose this deluxe room with free Wi-Fi and an in-room work desk.'


    },
    {
        name: 'Business Class Room',
        area: '36m',
        size: '2 double or king',
        person: '2 adults',
        image: 'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guestroom/16256-113891-f65416904_3xl.jpg?impolicy=Card',
        description: `Traveling for work ? You'll love this upgraded room with complimentary breakfast and airport transport `


    }
]

const Rooms = () => {

    return (


        <div>
            <MenuBar />
            <div className='all-room'>
                {
                    rooms.map(room => <Room key={room.name} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;

// &#xb2; square