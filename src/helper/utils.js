import buildings from '../data/buildings';
import meetings from '../data/meetings';
import meetingRooms from '../data/meetingRooms';

const fetchBuildingsData = () => buildings;

const fetchMeetingRooms = () => meetingRooms;

const fetchMeetingsData = () => meetings;

const formatDate = data => {
    const date = data.getDate();
    const month = data.getMonth() + 1;
    const year = data.getFullYear();

    return `${date}/${month}/${year}`;
}

const timeOverlap = (startTime, endTime, now, extra) => {
    const startDate = new Date();
    startDate.setHours(startTime.split(":")[0]);
    startDate.setMinutes(startTime.split(":")[1]);
    startDate.setSeconds('00');


    const endDate = new Date();
    endDate.setHours(endTime.split(":")[0]);
    endDate.setMinutes(endTime.split(":")[1]);
    endDate.setSeconds('00');

    if(extra){
        const meetingStartDate = new Date();
        meetingStartDate.setHours(now.split(":")[0]);
        meetingStartDate.setMinutes(now.split(":")[1]);
        meetingStartDate.setSeconds('00');

        const meetingEndDate = new Date();
        meetingEndDate.setHours(extra.split(":")[0]);
        meetingEndDate.setMinutes(extra.split(":")[1]);
        meetingEndDate.setSeconds('00');


        return (meetingStartDate < startDate && startDate < meetingEndDate) 
            || (meetingStartDate < endDate &&  endDate <  meetingEndDate ); //overlaped time

    }
    else {
        return startDate < now && endDate > now; //overlapped time
    }
}


const fetchMeetingsRunningToday = meetings => () => {
    const now = new Date();
    const formattedDate = formatDate(now);

    return meetings.filter(meeting => {
        return meeting.date === formattedDate;
    });
}

/* fetch meetings running today
**  filter the meetings which overlap with the current time
*/
const getMeetingsRunningNow = meetings => () => {
    const now = new Date();
    return fetchMeetingsRunningToday(meetings)().filter(filteredRoom => {
        return timeOverlap(filteredRoom.startTime, filteredRoom.endTime, now); 
    });
}

const getDistinctRooms = data => {
    const rooms = [];
    for(let i=0; i< data.length; i++){
        const roomName = data[i].meetingRoom &&  data[i].meetingRoom.name;
        if(rooms.indexOf(roomName) < 0){
            rooms.push(roomName);
        }
    }

    return rooms;
}


const getFreeRooms = (rooms, meetings, startTime, endTime) => {

    const result = fetchMeetingsRunningToday(meetings)().filter(filteredMeetings => {
        return timeOverlap(startTime, endTime, filteredMeetings.startTime, filteredMeetings.endTime);
    })

    const getDistinctRoomsWithMeetingRunning = getDistinctRooms(result);

    console.log("engaged rooms", result);

    return rooms.filter(room => getDistinctRoomsWithMeetingRunning.indexOf(room.name) < 0 );
}
 

const fetchFreeRoomsNow = (rooms, meetings) => () => {
    const roomsWithMeetingsRunningNow = getMeetingsRunningNow(meetings)();

    return rooms.length - roomsWithMeetingsRunningNow.length;
}

const fetchMeetingsRunningNow = () => getMeetingsRunningNow();

export {
    fetchBuildingsData,
    fetchMeetingRooms,
    fetchFreeRoomsNow,
    fetchMeetingsData,
    fetchMeetingsRunningNow,
    getMeetingsRunningNow,
    fetchMeetingsRunningToday,
    getFreeRooms
}