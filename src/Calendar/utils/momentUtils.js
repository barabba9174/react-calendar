import moment from 'moment';

export const setDate = date => (moment(date).toDate());
export const getDiff = (a, b, type) => (moment(a).diff(moment(b), type));
export const setLocale = locale => (moment.locale(locale));
export const getFormattedDate = (date, format) => (moment(date).format(format));
export const getFirstOfWeek = weekDays => (Number(moment().startOf('week').isoWeekday()) % weekDays);
export const startOf = date => (moment(date).startOf('day').toDate());
export const endOf = date => (moment(date).endOf('day').toDate());
export const getMonthDays = date => (moment(date).daysInMonth());
export const goToNextMonth = date => (moment(date).add(1, 'months').toDate());
export const goToNextYear = date => (moment(date).add(1, 'year').toDate());
export const goToPrevMonth = date => (moment(date).subtract(1, 'day').toDate());
export const goToPrevYear = date => (
  moment(
    moment(
      moment(date).subtract(1, 'year').toDate()
    ).add(1, 'months').toDate()
  ).subtract(1, 'day').toDate());
export const goToDay = (date, change) => {
    if (change > 0) {
        return moment(date).add(change, 'day').toDate();
    }
    return moment(date).subtract(Math.abs(change), 'day').toDate();
};
export const goToYear = (date, change) => {
    if (change > 0) {
        return moment(date).add(change, 'year').toDate();
    }
    return moment(date).subtract(Math.abs(change), 'year').toDate();
};
