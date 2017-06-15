import React, {PropTypes} from 'react';

const Day = ({dayInfo = {}, onSelect, onArrowNavigation, focusedElement, onHover, onReset}) => {
    const {date, disabled, isSelected, keyArrowsNav = {}, classes, label, isThisMonth, hoverDate, disableDay} = dayInfo;
    const arrowNavigation = (event) => {
        const checkEvent = `${event.ctrlKey ? 'ctrl' : ''}${event.altKey ? 'alt' : ''}${event.keyCode}`;
        if (keyArrowsNav[checkEvent]) {
            event.preventDefault();
            if (keyArrowsNav[checkEvent] instanceof Date) onArrowNavigation(keyArrowsNav[checkEvent], true);
        }
        if (event.keyCode === 27) {
            onReset();
        }
    };
    const tabFocus = (event) => {
        onArrowNavigation(date, isThisMonth);
    };
    const onHoverNavigation = () => {
        onHover(hoverDate);
    };
    const setFocus = (element) => {
        if (element && focusedElement && (focusedElement.getTime() === date.getTime()) && isThisMonth) {
            element.focus();
        }
    };
    return (
        <td className="day">
            {date ? <button
              onKeyDown={arrowNavigation}
              onFocus={tabFocus}
              onMouseOver={onHoverNavigation}
              aria-label={label}
              onClick={(!disableDay && !disabled) ? () => onSelect(date, isThisMonth) : null}
              className={classes}
              aria-pressed={isSelected}
              aria-disabled={disableDay}
              disabled={disabled}
              aria-describedby="descriptionCalendar"
              ref={element => setFocus(element)}
            >
                <span aria-hidden>{date.getDate()}</span>
            </button> : null}
        </td>
    );
};
Day.propTypes = {
    dayInfo: PropTypes.shape({}),
    onSelect: PropTypes.func,
    onArrowNavigation: PropTypes.func,
    focusedElement: PropTypes.shape({}),
    onReset: PropTypes.func,
    onHover: PropTypes.func
};

export default Day;
