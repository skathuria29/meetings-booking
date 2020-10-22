import React from 'react';
import { getFreeRooms } from '../../helper/utils';
import Button from '../Button/Button';

const SelectFreeRoomsFlow = ({ rooms, meetings, startTime, endTime }) => {
    const freeRooms = getFreeRooms(rooms, meetings, startTime, endTime);

    return(
        <div className="freeRoomContainer">
            {
                freeRooms
                ? <div>
                    {
                        freeRooms.map(room => (
                            <div className="freeRoom">
                                <div>Name { room.name }</div>
                                <div> Floor { room.floor }</div>
                                <div>Building { room.building.name }</div>
                            </div>
                        ))
                    }
                    <Button>Save</Button>
                </div>
                : <div> no free rooms available </div>
            }

        </div>
    
    )
}

export default SelectFreeRoomsFlow;