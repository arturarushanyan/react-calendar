import React, {Component} from 'react';
import moment from 'moment';
import WeekDays from '../WeekDays';
import Days from '../Days';
import './calendar.css';
import MonthNav from '../MonthNav';
import YearNav from '../YearNav';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        showYearNav: false
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

    onChangeMonth = () => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        })
    };
    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let newDateContext = moment(Object.assign({}, this.state.dateContext)).set('month', monthNo);
        this.setState({
            dateContext: newDateContext
        })
    } ;

    nextMonth = () => {
        let newDateContext = moment(Object.assign({}, this.state.dateContext)).add(1, "month");
        this.setState({
            dateContext: newDateContext
        });
    };

    prevMonth = () => {
        let newDateContext = moment(Object.assign({}, this.state.dateContext)).subtract(1, "month");
        this.setState({
            dateContext: newDateContext
        });
    };

    onSelectChange = (e, data) => {
        this.setMonth(data);
    };

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        })
    };

    setYear = (year) => {
        let newDateContext = moment(Object.assign({}, this.state.dateContext)).set("year", year);
        this.setState({
            dateContext: newDateContext
        })
    };

    onYearChange =  (e) => {
        this.setYear(e.target.value);
    };

    onKeyUpYear = (e) => {
        //exiting from edit mode if enter or esc keys are pressed
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    };

    render() {
        return (
            <div className="calendar-container">
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                            <td>
                                <MonthNav
                                    onChangeMonth={this.onChangeMonth}
                                    month={this.month}
                                    months={this.months}
                                    onSelectChange={this.onSelectChange}
                                    showMonthPopup={this.state.showMonthPopup}
                                />
                            </td>
                            <td colSpan="4">
                                <YearNav
                                    year={this.year}
                                    onKeyUpYear={this.onKeyUpYear}
                                    onYearChange={this.onYearChange}
                                    showYearEditor={this.showYearEditor}
                                    showYearNav={this.state.showYearNav}
                                />
                            </td>
                            <td colSpan="2" className="nav-month">
                                <i className="prev fa fa-fw fa-chevron-left"
                                   onClick={(e)=> {this.prevMonth()}}>
                                </i>
                                <i className="prev fa fa-fw fa-chevron-right"
                                   onClick={(e)=> {this.nextMonth()}}>
                                </i>
                            </td>
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