import React from 'react';

import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';

const AddMeetingForm = ({ buildings, 
    onNextClick, 
    onChange,
    onDateChange, 
    title, 
    date,
    startTime,
    endTime
 }) => (
    <div className="addMeetingsFormContainer">
    <div>
        <span> Title</span>
        <input type="text" onChange={ onChange } value={ title } name="title" />
    </div>
    <div>
        <span> Date</span>
        <input type="date" onChange={ onDateChange } value={ date } placeholder="DD/MM/YYYY"/>
    </div>
    <div>
        <span> Start Time</span>
        <input type="text" onChange={ onChange } value={ startTime } name="startTime" />
    </div>
    <div>
        <span> End Time</span>
        <input type="text"  onChange={ onChange } value={ endTime } name="endTime" />
    </div>

    <div>
        <Dropdown
            placeholder='Select Building'
            fluid
            selection
            options={buildings}
        />
    </div>

    <Button 
        onClick= { onNextClick }
    >
        Next
    </Button>
</div>
);

export default AddMeetingForm;