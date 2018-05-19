import React from 'react';
import SelectList from './SelectList';

export default (props) => {
    return (
            <span className="label-month"
              onClick={(e) => {props.onChangeMonth(e, props.month())}}>
                {props.month()}
            {props.showMonthPopup &&
            <SelectList
                data={props.months}
                onSelectChange={props.onSelectChange}
            />}
            </span>
    )
}