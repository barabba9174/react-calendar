import setArrowsNavigation from './setArrowNavigation';
import {getFirstOfWeek, getFormattedDate, setLocale, setDate, startOf, goToDay} from './momentUtils';
import getDays from './getDays';
import {setCalendarArray} from './calendarConfig';

const getMonth = ({
    month,
    year,
    lineNumbers,
    minDate,
    maxDate,
    type,
    tempSelected = [],
    locale = 'en',
    monthFormat = 'MMMM',
    weekFormat = 'dd',
    selectedDates = [],
    focusedElement,
    hideYears = false,
    minRange = null,
    maxRange = null,
    disable = null
  }) => {
    // currentMonth,
    // currentYear,
    // tempSelected,
    // selectedDates,
    // type,
    // lineNumbers,
    // minDate,
    // maxDate,
    // locale,
    // monthFormat,
    // weekFormat,
    // focusedElement,
    // hideYears
    // minRange
    // maxRange
    // disable
    setLocale(locale);
    const firstOfMonth = startOf(setDate({year, month, day: 1}));
    const daysOnTheWeek = 7;
    const firstDayOfTheWeek = getFirstOfWeek(daysOnTheWeek);
    const visibleMonth = {
        calendarDays: new Map(),
        weekDays: [],
        month: getFormattedDate(firstOfMonth, monthFormat),
        year,
        arrowNavigation: setArrowsNavigation({date: firstOfMonth, minDate, maxDate, hideYears}),
        focusedElement
    };
    const {calendarDays} = visibleMonth;
    const calendarConf = setCalendarArray({firstOfMonth, firstDayOfTheWeek, daysOnTheWeek, lineNumbers});
    const {startingValue, allDays} = calendarConf;
    allDays.map((index) => {
        const date = startOf(goToDay(firstOfMonth, index));
        const lineNumber = Math.floor((index - startingValue) / daysOnTheWeek);
        if ((index - startingValue) < daysOnTheWeek) {
            visibleMonth.weekDays.push({short: getFormattedDate(date, weekFormat), long: getFormattedDate(date, 'dddd')});
        }
        const finalDay = getDays({
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
            disable
        });
        if (calendarDays.has(lineNumber)) {
            return calendarDays.set(lineNumber, [...calendarDays.get(lineNumber), finalDay]);
        }
        return calendarDays.set(lineNumber, [finalDay]);
    });
    return visibleMonth;
};


export default getMonth;
