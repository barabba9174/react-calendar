import {startOf} from './momentUtils';

const getStyle = (date, isPrev, isNext, tempSelected = [], type) => {
    const {length} = tempSelected;
    const isInRange = (length === 2 && (type === 'range')) ? (date.getTime() > tempSelected[0] && date.getTime() < tempSelected[1]) : false;

    let className = 'dayButton';
    if (isPrev || isNext) {
        className += ' otherMonth';
    }
    if (date.getTime() === startOf().getTime()) {
        className += ' today';
    }
    if (tempSelected.includes(date.getTime())) {
        className += ' tempSelected';
    }
    if (tempSelected[0] && tempSelected[0] === date.getTime()) {
        className += ' startRange';
        if (tempSelected.length === 1) {
            className += ' endRange';
        }
    }
    if (tempSelected[1] && tempSelected[1] === date.getTime()) {
        className += ' endRange';
    }
    if (isInRange) {
        className += ' inRange';
    }
    return className.trim();
};

export default getStyle;
