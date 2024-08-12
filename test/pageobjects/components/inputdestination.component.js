const { $ } = require('@wdio/globals');
const SuggestionInteface = require('./suggestioninput.interface');

class InputDestination extends SuggestionInteface {

    get inputElement () {
        return $('#destinationInput-input');
    }

    get suggestionMenu () {
        return $('#destinationInput-menu');
    }

    get suggestionMenuItems () {
        return $$('#destinationInput-menu li');
    }

}

module.exports = InputDestination;