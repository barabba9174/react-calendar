import checkDayInRange, {checkIsMax} from './checkInRange';
import setKeyArrowsNavigation from './setKeyArrowsNavigation';
import {getFormattedDate, getDiff} from './momentUtils';
import getStyle from './getStyle';

const getDays = ({
  daysOnTheWeek,
  month,
  lineNumbers,
  selectedDates,
  tempSelected,
  type,
  minDate,
  maxDate,
  date,
  firstDayOfTheWeek,
  minRange,
  maxRange,
  disabledWeekDays,
  disable
}) => {
    const isPrev = date.getMonth() < month;
    const isNext = date.getMonth() > month;
    const disabled = !checkDayInRange({date, minDate, maxDate});
    let setHover = null;
    let disableDay = false;
    if (type === 'range' && selectedDates.length === 1) {
        const checkMinRange = (minRange) ? Math.abs(getDiff(date, selectedDates[0], 'days')) < Number(minRange) : false;
        const checkMaxRange = (maxRange) ? Math.abs(getDiff(date, selectedDates[0], 'days')) > Number(maxRange) : false;
        disableDay = checkMinRange || checkMaxRange;
        const closestLimit = (!checkIsMax({date, maxDate})) ? maxDate : minDate;
        setHover = (!disabled) ? date : new Date(closestLimit);
    }

    if (disable) {
        disableDay = disableDay || disable(date);
    }
    const thisDay = {
        date: (!lineNumbers && (isPrev || isNext)) ? null : date,
        isSelected: selectedDates.includes(date.getTime()),
        classes: getStyle(date, isPrev, isNext, tempSelected, type),
        isThisMonth: !isPrev && !isNext,
        disabled,
        label: getFormattedDate(date, 'D, dddd MMMM YYYY'),
        keyArrowsNav: setKeyArrowsNavigation({date, daysOnTheWeek, minDate, maxDate, firstDayOfTheWeek}),
        hoverDate: setHover,
        disableDay
    };
    return (!lineNumbers && (thisDay.isPrev || thisDay.isNext)) ? {} : thisDay;
};

export default getDays;
