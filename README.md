# React Calendar component with ES2015



## Usage

1. `npm install react-calendar`
2. `import Calendar from 'react-calendar'`

## Parameters (all the parameters are optional)

selectedDates: default selected dates (array of numbers, of strings or date objects)________
minDate: minumum date for starting the calendar (number, string or date object)______
maxDate: maximum date for ending the calendar (number, string or date object)____
type: string, type of picking, the default is normal, if it is "range" the datepicker becames a range datepicker__
defaultFocus: default day focus (if it is not in mimunim-maximum range the default is the first date of selectedDates or the minumum date)__
callBack: function for receiving back the selected values (function, argument object)__
hideYears: if it is true, the year navigation arrows are hidden (boolean)__
lineNumbers: if it is setted it changes default rows number of the timepicker, otherwise it's automatic (number)__
locale: locale for the calendar (as moment.js) (string)__
monthFormat: format for the month (as moment.js)  (string)__
weekFormat: format for the week days (as moment.js)  (string)__
longFormat: format for long result (as moment.js)  (string)__
shortFormat: format for short result (as moment.js)  (string)__
rangeSeparator: format for the range separator result (string)__
minRange: minumum allowed range (number)__
maxRange: maximum allowed range (number)__
disable: function for disabling the date (function, argument date)__
labels: label for accessibility (object)__


## callBack Object
{
  "selected": [
    {
      "date": "2017-06-04T23:00:00.000Z",
      "time": 1496617200000,
      "short": "06-05-2017",
      "long": "05 June 2017"
    },
    {
      "date": "2017-06-12T23:00:00.000Z",
      "time": 1497308400000,
      "short": "06-13-2017",
      "long": "13 June 2017"
    }
  ],
  "labels": {
    "long": "05 June 2017 - 13 June 2017",
    "short": "06-05-2017 - 06-13-2017"
  }
}

## labels for accessibility object

{
  "title": "Datepicker",
  "prevMonth": "Previous Month",
  "nextMonth": "Next Month",
  "selected": "Selected",
  "firstSelected": "Start date selected, now select the end date",
  "description": "Press the arrow keys to navigate by day, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year, Home and End to jump to the beginning or end of the current week, Escape to cancel or select a date range"
}

## keyboard navigation features
Press the arrow keys to navigate by day,__
PageUp and PageDown to navigate by month,__
Alt+PageUp and Alt+PageDown to navigate by year,__
Home and End to jump to the beginning or end of the current week,__
Escape to cancel


## License

MIT
