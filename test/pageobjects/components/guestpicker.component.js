const { $ } = require('@wdio/globals');
const Floating = require('./floating.interface');

/*
* Component Page to encapsulate the Guest POicker component in SkyScanner home page
*/
class GuestPicker extends Floating {

    get parentInputElement () {
        return $('div[class*="CabinClassTravellerSearchControlGroup_travellerContainer"] button[class*="SearchControlButton_searchControlBtn"]');
    }

    get popUp () {
        return $('div[class*="SearchControlSelectorPopOver_container"]');
    }

    get adultsInput () {
        return $('#adult-nudger');
    }
    
    get requestBtn () {
        return $('div[class*="CabinClassTravellerSearchControlGroup_cabinTravellerSelector"] button[class*="doneButton"]');
    }

}

module.exports = GuestPicker;