const Floating = require("./floating.interface");

/*
* Interface to define Datepicker methods
*/
class DatePicker extends Floating{

    dayButton(daytext) {
      throw new Error('Method "dayButton" must be implemented');
    }
  
    search() {
      throw new Error('Method "search" must be implemented');
    }

}
  
module.exports = DatePicker;