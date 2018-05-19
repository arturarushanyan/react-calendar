import React, {Component} from 'react';
import moment from 'moment';
import WeekDays from '../WeekDays';
import Days from '../Days';
import './calendar.css';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
        this.state.width = this.width;
    }

    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
    };

    weekdays = moment.weekdays();
    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    };
    month = () => {
        return this.state.dateContext.format("MMMM");
    };
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    };
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    };
    currentDay = () => {
        return this.state.dateContext.format("D");
    };

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        return moment(dateContext).startOf('month').format('d');
    };

    render() {
        return (
            <div className="calendar-container">
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <WeekDays weekdaysShort={this.weekdaysShort}/>
                        </tr>
                        <Days
                            firstDayOfMonth={this.firstDayOfMonth}
                            daysInMonth={this.daysInMonth}
                            currentDay={this.currentDay}
                            // selectedDay={this.state.selectedDay}
                        />
                    </tbody>
                </table>
            </div>
        )
    }
}