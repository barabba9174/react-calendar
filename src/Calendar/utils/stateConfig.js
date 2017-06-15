import {sortSelected} from './checkInRange';
import {startOf, setDate} from './momentUtils';
import {checkSelectedAlternative, setFirstFocus} from './calendarConfig';

const stateDefualt = ({minDate, maxDate, selectedDates = [], focusedElement = null, defaultFocus}) => {
    const today = startOf();
    const finalSelected = sortSelected(selectedDates).map(el => startOf(el).getTime());
    const date = checkSelectedAlternative({minDate: setDate(minDate), maxDate: setDate(maxDate), date: today, finalSelected});
    const finalFocus = setFirstFocus({minDate: setDate(minDate), maxDate: setDate(maxDate), date, focusedElement, defaultFocus, finalSelected});
    return {
        currentMonth: date.getMonth(),
        currentYear: date.getFullYear(),
        selectedDates: finalSelected,
        tempSelected: finalSelected,
        focusedElement: finalFocus,
        changedValues: false
    };
};


export default stateDefualt;
