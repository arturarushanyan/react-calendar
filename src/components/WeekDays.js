import React from 'react';

export default (props) => {
    //getting the weekdays from weekdays array provided by moment library
    const weekDays = props.weekdaysShort.map((day) => {
        return (
            <td key={day} className="week-day">{day}</td>
        )
    });
    return weekDays;
}