export const checkIsMin = ({date, minDate}) => ((minDate) ? date.getTime() >= minDate : true);

export const checkIsMax = ({date, maxDate}) => ((maxDate) ? date.getTime() < maxDate : true);

const checkDayInRange = ({minDate, maxDate, date}) => {
    const checkMin = checkIsMin({date, minDate});
    const checkMax = checkIsMax({date, maxDate});
    return checkMin && checkMax;
};

export const sortSelected = selected => (selected.sort((a, b) => (new Date(a).getTime() - new Date(b).getTime())));

export default checkDayInRange;
