import React, {PropTypes} from 'react';
import Day from './Day';

const Lines = ({days, onSelect, onArrowNavigation, focusedElement, onHover, onReset}) => {
    const daysComp = days.map((el, i) => (<Day
      onHover={onHover}
      focusedElement={focusedElement}
      onArrowNavigation={onArrowNavigation}
      dayInfo={el}
      key={i}
      onSelect={onSelect}
      onReset={onReset}
    />));
    return (
        <tr>{daysComp}</tr>
    );
};
Lines.propTypes = {
    days: PropTypes.arrayOf(PropTypes.shape({})),
    onSelect: PropTypes.func,
    onArrowNavigation: PropTypes.func,
    focusedElement: PropTypes.shape({}),
    onHover: PropTypes.func,
    onReset: PropTypes.func
};

export default Lines;
