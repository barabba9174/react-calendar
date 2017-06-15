import React, {PropTypes} from 'react';

const WeekDay = ({day}) => {
    const {short, long} = day;
    return (
        <th title={long} className="weekday">{short}</th>
    );
};
WeekDay.propTypes = {
    day: PropTypes.shape({})
};

export default WeekDay;
