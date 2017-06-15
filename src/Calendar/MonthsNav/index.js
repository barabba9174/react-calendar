import React, {PropTypes} from 'react';
import ArrowButton from './ArrowButton';

const MonthsNav = ({longMonth, year, hideYears, labels = {}, arrowNavigation = {}, monthYearNavigation}) => (
    <tr role="presentation">
        <ArrowButton button={arrowNavigation.prevYear} labels={labels} label={'prevYear'} monthYearNavigation={monthYearNavigation} />
        <ArrowButton button={arrowNavigation.prevMonth} labels={labels} label={'prevMonth'} monthYearNavigation={monthYearNavigation} />
        <td className="monthYear" colSpan={(hideYears) ? 5 : 3}>
            <div aria-live="polite">
                <span className="month">{longMonth}</span>
                <span className="year">{year}</span>
            </div>
        </td>
        <ArrowButton button={arrowNavigation.nextMonth} labels={labels} label={'nextMonth'} monthYearNavigation={monthYearNavigation} />
        <ArrowButton button={arrowNavigation.nextYear} labels={labels} label={'nextYear'} monthYearNavigation={monthYearNavigation} />
    </tr>
);
MonthsNav.propTypes = {
    monthYearNavigation: PropTypes.func,
    longMonth: PropTypes.string,
    year: PropTypes.number,
    hideYears: PropTypes.bool,
    labels: PropTypes.shape({}),
    arrowNavigation: PropTypes.shape({})
};

export default MonthsNav;
