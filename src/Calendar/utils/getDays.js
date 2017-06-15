import setKeyArrowsNavigation from './setKeyArrowsNavigation';
import {getFormattedDate} from './momentUtils';
import checkDayIfDisable from './checkDayIfDisable';
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
    const {hoverDate, disableDay, disabled} = checkDayIfDisable({type, selectedDates, minRange, maxRange, date, maxDate, minDate, disable});

    const thisDay = {
        date: (!lineNumbers && (isPrev || isNext)) ? null : date,
        isSelected: selectedDates.includes(date.getTime()),
        classes: getStyle(date, isPrev, isNext, tempSelected, type),
        isThisMonth: !isPrev && !isNext,
        label: getFormattedDate(date, 'D, dddd MMMM YYYY'),
        keyArrowsNav: setKeyArrowsNavigation({date, daysOnTheWeek, minDate, maxDate, firstDayOfTheWeek}),
        disabled,
        hoverDate,
        disableDay
    };
    return (!lineNumbers && (thisDay.isPrev || thisDay.isNext)) ? {} : thisDay;
};

export default getDays;
