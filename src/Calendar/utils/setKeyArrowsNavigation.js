import checkDayInRange from './checkInRange';
import {goToNextMonth, goToDay, goToYear, getMonthDays, startOf} from './momentUtils';

const setKeyArrowsNavigation = ({date, daysOnTheWeek, minDate, maxDate, firstDayOfTheWeek}) => {
    const setDate = change => goToDay(date, change);
    const setYear = change => goToYear(date, change);
    const daysInMonth = getMonthDays(date);
    const upDaysInMonth = getMonthDays(goToNextMonth(date));
    const compensationDay = (date.getDay() === 0) ? date.getDay() : date.getDay();
    const firstThisWeek = -(compensationDay);
    // - firstDayOfTheWeek
    const lastThisWeek = daysOnTheWeek + firstThisWeek - 1;
    const checkAndReturn = (checkDate, alt) => {
        let check = checkDayInRange({date: checkDate, minDate, maxDate}) ? checkDate : false;
        if (!check && alt) {
            check = checkDayInRange({date: startOf(alt), minDate, maxDate}) ? startOf(alt) : false;
        }
        return check || true;
    };

    return {
        33: checkAndReturn(setDate(upDaysInMonth), maxDate),
        34: checkAndReturn(setDate(-daysInMonth), minDate),
        35: checkAndReturn(setDate(lastThisWeek), maxDate),
        36: checkAndReturn(setDate(firstThisWeek), minDate),
        37: checkAndReturn(setDate(-1)),
        38: checkAndReturn(setDate(-daysOnTheWeek), setDate(-1)),
        39: checkAndReturn(setDate(1)),
        40: checkAndReturn(setDate(daysOnTheWeek), setDate(1)),
        alt33: checkAndReturn(setYear(1), maxDate),
        alt34: checkAndReturn(setYear(-1), minDate)

    };
};

export default setKeyArrowsNavigation;
