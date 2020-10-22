import React from 'react';

const RoomsMetaData = ({ data, fetchFreeRoomsNow }) => {
    const total = (data &&  data.length) || 0;
    const getFreeRooms = fetchFreeRoomsNow();

    return (
        <div>
            <h1>Rooms</h1>
            <div> 
                <span> Total  { total }</span>
            </div>
            <div>
                <span> Free rooms { getFreeRooms }</span>
            </div>
        </div>
    )
};

export default RoomsMetaData;