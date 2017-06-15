import React, {PropTypes} from 'react';
import Lines from './Lines';

const DaysContainer = ({onHover, focusedElement, onReset, onArrowNavigation, onSelect, calendarDays}) => {
    const getDaysLine = (value, key) => (<Lines
      onHover={onHover}
      focusedElement={focusedElement}
      key={key}
      days={value}
      onReset={onReset}
      onArrowNavigation={onArrowNavigation}
      onSelect={onSelect}
    />);
    const linesToAdd = Array.from(calendarDays.values()).map((value, key) => getDaysLine(value, key));
    return (
        <tbody>{linesToAdd}</tbody>
    );
};

DaysContainer.propTypes = {
    calendarDays: PropTypes.shape({}),
    focusedElement: PropTypes.shape({}),
    onHover: PropTypes.func,
    onReset: PropTypes.func,
    onArrowNavigation: PropTypes.func,
    onSelect: PropTypes.func
};

export default DaysContainer;
