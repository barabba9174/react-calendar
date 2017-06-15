import React, {PropTypes} from 'react';
import WeekDay from './WeekDay';

const WeekRow = ({weekDays}) => {
    const getWeeksLine = (value, i) => (<WeekDay key={i} day={value} />);
    const weekToAdd = weekDays.map((value, i) => getWeeksLine(value, i));
    return (
        <tr role="presentation">{weekToAdd}</tr>
    );
};
WeekRow.propTypes = {
    weekDays: PropTypes.arrayOf(PropTypes.shape({}))
};

export default WeekRow;
