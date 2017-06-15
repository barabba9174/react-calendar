import {getDiff} from './momentUtils';
import checkDayInRange, {closestEnable, checkIsDisabledOnRange} from './checkInRange';

const checkDayIfDisable = ({type, selectedDates, minRange, maxRange, date, maxDate, minDate, disable}) => {
    const disabled = !checkDayInRange({date, minDate, maxDate});
    const isDisableByFunction = (disable) ? disable(date) : false;
    const isFirstOfRange = type === 'range' && selectedDates.length === 1;
    return (isFirstOfRange) ? {
        disableDay: checkIsDisabledOnRange({minRange, maxRange, date, selectedDates}) || isDisableByFunction,
        hoverDate: (!disabled) ? date : closestEnable({date, maxDate, minDate}),
        disabled
    } : {
        disableDay: isDisableByFunction,
        hoverDate: null,
        disabled
    };
};

export default checkDayIfDisable;
