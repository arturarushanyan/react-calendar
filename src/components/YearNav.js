import React from 'react';

export default (props) => {
    return (
        props.showYearNav ?
            <input
                defaultValue={props.year}
                className="editor-year"
                ref={(yearInput) => {this.yearInput = yearInput}}
                onKeyUp={(e) => props.onKeyUpYear(e)}
                onChange={(e) => {props.onYearChange(e)}}
                type="number"
                placeholder="Year"
            />
            :
            <span
                className="label-year"
                onDoubleClick={(e) => {props.showYearEditor()}}
            >
                {props.year()}
            </span>

    )
};