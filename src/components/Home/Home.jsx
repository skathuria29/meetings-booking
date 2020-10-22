import React from 'react';
import PropTypes from 'prop-types';

import RoomsMetaData from '../RoomsMetaData/RoomsMetaData';
import BuildingsMetaData from '../BuildingsMetaData/BuildingsMetaData';
import MeetingsMetaData from '../MeetingsMetaData/MeetingsMetaData';
import Button from '../Button/Button';
// import AddMeetingForm from './components/AddMeetingForm/AddMeetingForm';
import { 
  fetchFreeRoomsNow,
  fetchMeetingsRunningToday,
  getMeetingsRunningNow
} from '../../helper/utils';

import { Link } from 'react-router-dom';

const Home = ({ buildings, meetings, rooms}) => {
    return (
        <div className="container">
            <BuildingsMetaData data={ buildings } className="container__item"/>
            <RoomsMetaData 
                data={ rooms } 
                fetchFreeRoomsNow={ fetchFreeRoomsNow(rooms, meetings) }
            />
            <MeetingsMetaData
                data = { meetings }
                fetchMeetingsRunningToday={ fetchMeetingsRunningToday(meetings) } 
                fetchMeetingsRunningNow={ getMeetingsRunningNow(meetings) } 
            />

            <Button>
                <Link to="/addMeetings">Add meeting </Link>
            </Button>
        </div>
    )
}

Home.propTypes = {
    buildings: PropTypes.array,
    meetings: PropTypes.array,
    rooms: PropTypes.array
}

Home.defaultProps =  {
    buildings: [],
    meetings: [],
    rooms: []
}

export default Home;
