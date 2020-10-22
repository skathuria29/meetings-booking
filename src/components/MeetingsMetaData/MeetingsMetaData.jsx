import React from 'react';

const MeetingsMetaData = ({ fetchMeetingsRunningToday, fetchMeetingsRunningNow }) => {
    const total =fetchMeetingsRunningToday();
    const getMeetingsRunningNow = fetchMeetingsRunningNow();

    return (
        <div>
            <h1>Meetings</h1>
            <div> 
                <span> Total  { total && total.length } today</span>
            </div>
            <div>
                <span>  Total { getMeetingsRunningNow && getMeetingsRunningNow.length } going on now</span>
            </div>
        </div>
    )
};

export default MeetingsMetaData;