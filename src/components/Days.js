import React from 'react';

export default (props) => {

    //calculating the blank sports in calendar
    let blanks = [];
    for (let i = 0; i < props.firstDayOfMonth(); i++) {
        blanks.push(<td key={i * Math.random()} className="empty-slot">{""}</td>)
    }

    console.log("blanks",blanks);

    //calculating days that are left in the month after blank spots in the week row
    let daysInMonth = [];
    for (let d = 1; d <= props.daysInMonth(); d++) {
        let className = (d == parseInt(props.currentDay()) ? "day current-day": "day");
        //let selectedClass = (d === this.props.selectedDay ? " selected-day " : "");
        daysInMonth.push(
            <td key={d} className={className} >
                <span>{d}</span>
            </td>
        );
    }

    console.log("days: ", daysInMonth);

    // totalSlots are just blank sports and remained days combined together
    let totalSlots = [...blanks, ...daysInMonth, ...blanks];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells.slice());
            cells = [];
            cells.push(row);
        }
        if ( i === totalSlots.length - 1){
            rows.push(cells.slice());
        }
    });

    return rows.map((row, i) => {
        return (
            <tr key={i * Math.random()}>{row}</tr>
        )
    })
}