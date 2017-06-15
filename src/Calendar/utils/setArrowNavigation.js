import checkDayInRange from './checkInRange';
import {goToNextMonth, goToNextYear, goToPrevMonth, goToPrevYear} from './momentUtils';

const setArrowsNavigation = ({date, minDate, maxDate, hideYears = false}) => {
    const prevYear = goToPrevYear(date);
    const prevMonth = goToPrevMonth(date);
    const nextMonth = goToNextMonth(date);
    const nextYear = goToNextYear(date);
    const arrowsSetup = {
        prevYear: {
            date: checkDayInRange({date: prevYear, minDate}) ? prevYear : null,
            hide: hideYears
        },
        prevMonth: {
            date: checkDayInRange({date: prevMonth, minDate}) ? prevMonth : null
        },
        nextMonth: {
            date: checkDayInRange({date: nextMonth, maxDate}) ? nextMonth : null
        },
        nextYear: {
            date: checkDayInRange({date: nextYear, maxDate}) ? nextYear : null,
            hide: hideYears
        }
    };
    return arrowsSetup;
};


export default setArrowsNavigation;
