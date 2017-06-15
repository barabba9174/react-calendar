import React, {Component, PropTypes} from 'react';
import stateDefualt from './utils/stateConfig';
import calendarConfig from './utils/calendarConfig';
import getMonth from './utils/getMonth';
import {sortSelected} from './utils/checkInRange';
import setOutputObject from './utils/setOutputObject';
import MonthsNav from './MonthsNav';
import DaysContainer from './DaysContainer';
import WeekRow from './WeekRow';

import './calendar.css';

export default class Calendar extends Component {

    static propTypes = {
        minDate: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({}), PropTypes.string]),
        maxDate: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({}), PropTypes.string]),
        selectedDates: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})])),
        type: PropTypes.string,
        focusedElement: PropTypes.shape({}),
        defaultFocus: PropTypes.shape({}),
        callBack: PropTypes.func,
        hideYears: PropTypes.bool,
        labels: PropTypes.shape({}),
        // lineNumbers: PropTypes.number,
        // locale: PropTypes.string,
        // monthFormat: PropTypes.string,
        // weekFormat: PropTypes.string,
        // longFormat: PropTypes.string,
        // shortFormat: PropTypes.string,
        // rangeSeparator: PropTypes.string,
        // minRange: PropTypes.number,
        // maxRange: PropTypes.number,
        // disable: PropTypes.func
    };
    static defaultProps = {
        minDate: undefined,
        maxDate: undefined,
        selectedDates: [],
        type: undefined,
        focusedElement: null,
        defaultFocus: undefined,
        callBack: undefined,
        hideYears: undefined,
        lineNumbers: undefined,
        longFormat: 'DD MMMM YYYY',
        shortFormat: 'MM-DD-YYYY',
        locale: 'en',
        monthFormat: 'MMMM',
        weekFormat: 'dd',
        labels: {},
        rangeSeparator: '-',
        minRange: false,
        maxRange: false,
        disable: null
    }

    constructor(props) {
        super();
        const {minDate, maxDate, selectedDates, focusedElement, defaultFocus} = props;
        this.state = stateDefualt({minDate, maxDate, selectedDates, focusedElement, defaultFocus});
    }
    onArrowNavigation = (focusedElement, isThisMonth) => {
        this.setState({tempSelected: this.changeTempSelected(focusedElement), focusedElement: isThisMonth ? focusedElement : null});
    }
    onHover = (hoveredElement) => {
        const focusedElement = this.state.focusedElement;
        const tempSelected = this.changeTempSelected(hoveredElement);
        const checkIfChange = tempSelected.toString() !== this.state.tempSelected.toString();
        checkIfChange && this.setState({tempSelected, focusedElement});
    }
    onSelect = (value, isThisMonth) => {
        const {callBack, type} = this.props;
        const newSelected = this.sortSelected(value.getTime()) || [value.getTime()];
        const checkType = ((type === 'range' && newSelected.length === 2) || type !== 'range');
        this.setState({
            selectedDates: newSelected,
            tempSelected: newSelected,
            focusedElement: isThisMonth ? value : null,
            changedValues: true
        }, (callBack && checkType) ? callBack(setOutputObject({...this.props, selectedDates: newSelected})) : null);
    }
    onReset = () => {
        this.setState({selectedDates: [], tempSelected: [], focusedElement: null});
    }
    getResult = () => {
        const {type, labels: textLabels} = this.props;
        const {selected, firstSelected} = textLabels;
        const {selectedDates = [], changedValues} = this.state;
        const {labels = {}} = setOutputObject({...this.props, selectedDates});
        const {long} = labels;
        const setSelected = (type === 'range' && selectedDates.length === 1) ? firstSelected : `${selected} ${long}`;
        return (changedValues) ? setSelected : '';
    }
    createCalendar = () => (getMonth(calendarConfig({ ...this.props, ...this.state })))
    monthYearNavigation = (date) => {
        const goTo = {
            currentMonth: date.getMonth(),
            currentYear: date.getFullYear(),
            focusedElement: null
        };
        this.setState(goTo);
    }
    changeTempSelected = (valueToCheck) => {
        const {tempSelected = []} = this.state;
        const newTempSelected = (valueToCheck) ? this.sortSelected(valueToCheck.getTime()) : null;
        return newTempSelected || tempSelected;
    }
    sortSelected = (secondValue) => {
        const {type} = this.props;
        const {selectedDates = []} = this.state;
        return (selectedDates.length === 1 && type === 'range') ? sortSelected([...selectedDates, secondValue]) : undefined;
    }
    render() {
        const { hideYears, labels } = this.props;
        const visibleMonth = this.createCalendar();
        const { calendarDays, weekDays, month: longMonth, year, arrowNavigation, focusedElement } = visibleMonth;
        const textResult = this.getResult();
        return (
            <div className="calendarComp" role="application" aria-label={labels.title}>
                <span className="hiddenWaiText" aria-hidden id="descriptionCalendar">
                    {labels.description}
                </span>
                <table>
                    <caption aria-live="polite" className="hiddenWaiText">
                        {textResult}
                    </caption>
                    <thead>
                        <MonthsNav
                          monthYearNavigation={this.monthYearNavigation}
                          arrowNavigation={arrowNavigation}
                          longMonth={longMonth}
                          hideYears={hideYears}
                          year={year}
                          labels={labels}
                        />
                        <WeekRow weekDays={weekDays} />
                    </thead>
                    <DaysContainer
                      calendarDays={calendarDays}
                      focusedElement={focusedElement}
                      onHover={this.onHover}
                      onReset={this.onReset}
                      onArrowNavigation={this.onArrowNavigation}
                      onSelect={this.onSelect}
                    />
                </table>
            </div>);
    }
}
