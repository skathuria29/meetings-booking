import React from 'react';
import PropTypes from 'prop-types';

import AddMeetingForm from '../AddMeetingForm/AddMeetingForm';
import SelectFreeRoomsFlow from '../SelectFreeRoomsFlow/SelectFreeRoomsFlow';
// import meetings from '../../data/meetings';


class AddMeetingFlow extends React.Component{

    static propTypes = {
        buildings: PropTypes.array,
        rooms: PropTypes.array,
        meetings: PropTypes.array
    }

    static defaultProps = {
        buildings: [],
        rooms: [],
        meetings: []
    }

    constructor(props){
        super(props);

        this.state= {
            activeStep: 0,
            title: '',
            date: '',
            startTime: '',
            endTime: '',
            meetingRoom: {}
        }
    }

    formatDate = date => {} //todo

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const data = {};
        data[name] = value;

        this.setState(data);
    }

    onDateChange = (e) => {
        const data = e.target.value;

       if(data){
            this.setState({ date : data });
       }
    }

    onNextClick = () => {
        this.setState({ activeStep: 1 });
    }

    render() {
        const { activeStep, title, date, startTime, endTime } = this.state;
        const { buildings, rooms, meetings } = this.props;

        return (
            <React.Fragment>
                {
                    activeStep === 1
                    ? <SelectFreeRoomsFlow 
                        rooms={ rooms }
                        meetings={ meetings } 
                        startTime={ startTime } 
                        endTime ={ endTime }/>
                    : <AddMeetingForm 
                        buildings={ buildings } 
                        onNextClick={ this.onNextClick }
                        title={ title }
                        onDateChange={ this.onDateChange }
                        date={ date }
                        onChange={ this.onChange }
                        startTime={ startTime }
                        endTime={ endTime }
                    /> 
                }
            </React.Fragment>
        )
    }
};

export default AddMeetingFlow;