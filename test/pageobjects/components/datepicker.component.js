const { $ } = require('@wdio/globals');
const DatePickerInterface = require('./datepicker.interface');

/*
* Component that implements DatePicker interface and encapsulates getters and methods to interact with
* the DatePicker element
*/
class DatePicker extends DatePickerInterface {

    get parentInputElement () {
        return $$('div[data-testid="dates-container"] div[class*="SearchControlButton"]');
    }

    get popUp () {
        return $('div[class*="DatePickerDesktop_form"]');
    }

    get defaultDay () {
        return $('button[class*="CustomCalendar_today"], button[class*="CustomCalendar_selectedDay"]');
    }

    dayButton(dayText) {
        return $(`//button[contains(@class, "CustomCalendar_day") and text()="${dayText}"]`);
    }
    
    get search () {
        return $('button[data-testid="CalendarSearchButton"]');
    }

}

module.exports = DatePicker;