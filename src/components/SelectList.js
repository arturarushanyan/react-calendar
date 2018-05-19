import React from 'react';

export default (props) => {
    let popup = props.data.map((data) => {
        return (
            <div key={data}>
                <a href="#"
                   onClick={(e) => {props.onSelectChange(e, data)}}>{data}</a>
            </div>
        )
    });

    return (
        <div className="month-popup">
            {popup}
        </div>
    )
}