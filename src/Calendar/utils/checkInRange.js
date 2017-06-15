import {setDate, getDiff} from './momentUtils';

export const checkIsMin = ({date, minDate}) => ((minDate) ? date.getTime() >= minDate : true);

export const checkIsMax = ({date, maxDate}) => ((maxDate) ? date.getTime() < maxDate : true);

const checkDayInRange = ({minDate, maxDate, date}) => (checkIsMin({date, minDate}) && checkIsMax({date, maxDate}));

export const sortSelected = selected => (selected.sort((a, b) => (new Date(a).getTime() - new Date(b).getTime())));

export const closestEnable = ({date, maxDate, minDate}) => (setDate((!checkIsMax({date, maxDate})) ? maxDate : minDate));

export const checkIsDisabledOnRange = ({minRange, maxRange, date, selectedDates = []}) => {
    const checkMinRange = (minRange) ? Math.abs(getDiff(date, selectedDates[0], 'days')) < Number(minRange) : false;
    const checkMaxRange = (maxRange) ? Math.abs(getDiff(date, selectedDates[0], 'days')) > Number(maxRange) : false;
    return checkMinRange || checkMaxRange;
};

export default checkDayInRange;
