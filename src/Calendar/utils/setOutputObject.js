import {getFormattedDate, setDate} from './momentUtils';

const setOutputObject = ({
    longFormat = 'D MMMM YYYY',
    shortFormat = 'MM-DD-YYYY',
    rangeSeparator = '-',
    selectedDates = []
  }) => {
    const selected = selectedDates.map(el => ({
        date: setDate(el),
        time: el,
        short: getFormattedDate(el, shortFormat),
        long: getFormattedDate(el, longFormat)
    }));
    const labels = {
        long: selected.map(el => (el.long)).join(rangeSeparator),
        short: selected.map(el => (el.short)).join(rangeSeparator)
    };
    return ({selected, labels});
};

export default setOutputObject;
