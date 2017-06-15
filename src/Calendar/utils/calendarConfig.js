import {goToNextMonth, getMonthDays, startOf, setDate, endOf} from './momentUtils';
import checkDayInRange from './checkInRange';

/**
 * overwrite the default props-state with the focusElement month and year
 set the minumum date to the time 0:00:00
 set the maximum date to the time  23:59:59
 */

const calendarConfig = props => ({
    ...props,
    month: props.focusedElement ? props.focusedElement.getMonth() : props.currentMonth,
    year: props.focusedElement ? props.focusedElement.getFullYear() : props.currentYear,
    minDate: (props.minDate) && startOf(setDate(props.minDate)),
    maxDate: (props.maxDate) && endOf(setDate(props.maxDate))
});

export const setCalendarArray = ({firstOfMonth, firstDayOfTheWeek, daysOnTheWeek, lineNumbers}) => {
    const getCellsBefore = -firstOfMonth.getDay() + firstDayOfTheWeek;
    const startingValue = (getCellsBefore <= 0) ? getCellsBefore : firstDayOfTheWeek - daysOnTheWeek;
    const daysInMonth = getMonthDays(goToNextMonth(firstOfMonth));
    const finalLineNumbers = lineNumbers || Math.ceil((daysInMonth - startingValue) / daysOnTheWeek);
    const lastDate = (daysOnTheWeek * finalLineNumbers) + startingValue;
    const allDays = Array.from(new Array(lastDate - startingValue), (val, index) => index + startingValue);
    return {
        startingValue,
        allDays
    };
};


export const setFirstFocus = ({minDate, maxDate, date, focusedElement, defaultFocus, finalSelected}) => {
    const defaultInRange = checkDayInRange({minDate, maxDate, date: startOf(defaultFocus)});
    const setDefaultFocus = defaultInRange ? startOf(defaultFocus) : date;
    return (defaultFocus) ? setDefaultFocus : focusedElement;
};

export const checkSelectedAlternative = ({minDate, maxDate, date, finalSelected}) => {
    const todayInRange = checkDayInRange({minDate, maxDate, date});
    const setAlternativeSelectedBased = (
      finalSelected[0] && checkDayInRange({minDate, maxDate, date: setDate(finalSelected[0])})
    ) ? startOf(setDate(finalSelected[0])) : startOf(minDate);
    return (todayInRange) ? date : setAlternativeSelectedBased;
};


export default calendarConfig;
