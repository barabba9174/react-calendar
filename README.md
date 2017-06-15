# Accessible React Datepicker Component

## Usage

1. `npm install react-calendar`
2. `import Calendar from 'react-calendar'`

## Parameters (all the parameters are optional)

* **selectedDates**: default selected dates *(array of numbers, of strings or date objects)*        
* **minDate**: minumum date for starting the calendar *(number, string or date object)*      
* **maxDate**: maximum date for ending the calendar *(number, string or date object)*    
* **type**: it transforms the datepicker in a dates range datepicker use null or 'range' *(string)*
* **defaultFocus**: default day focus *(date object)*  
* **callBack**: function for receiving back the selected values *(function - argument object [1])*  
* **hideYears**: if it is true, the year navigation arrows are hidden *(boolean)*  
* **lineNumbers**: if it is setted it changes default rows number of the timepicker, otherwise it's automatic *(number)*  
* **locale**: locale for the calendar (as moment.js) *(string)*  
* **monthFormat**: format for the month (as moment.js)  *(string)*  
* **weekFormat**: format for the week days (as moment.js)  *(string)*  
* **longFormat**: format for long result (as moment.js)  *(string)*  
* **shortFormat**: format for short result (as moment.js)  *(string)*  
* **rangeSeparator**: format for the range separator result *(string)*  
* **minRange**: minumum allowed range *(number)*  
* **maxRange**: maximum allowed range *(number)*  
* **disable**: function for disabling the date *(function - argument date)*  
* **labels**: label for accessibility *(object [2])*  


## CallBack Object [1]
```
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
```
## Labels for accessibility object [2]
```
{
  "title": "Datepicker",
  "prevMonth": "Previous Month",
  "nextMonth": "Next Month",
  "selected": "Selected",
  "firstSelected": "Start date selected, now select the end date",
  "description": "Press the arrow keys to navigate by day, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year, Home and End to jump to the beginning or end of the current week, Escape to cancel or select a date range"
}
```
## keyboard navigation features
* Press the **arrow keys** to navigate by day,  
* **PageUp** and **PageDown** to navigate by month,  
* **Alt+PageUp** and **Alt+PageDown** to navigate by year,  
* **Home** and **End** to jump to the beginning or end of the current week,  
* **Escape** to cancel


## License

MIT
