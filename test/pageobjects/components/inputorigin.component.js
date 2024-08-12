const { $ } = require('@wdio/globals');
const SuggestionInteface = require('./suggestioninput.interface');

/*
* Component to encapsulate the input component to select origin date
*/
class InputOrigin extends SuggestionInteface {

    get inputElement () {
        return $('#originInput-input');
    }

    get suggestionMenu () {
        return $('#originInput-menu');
    }

    get suggestionMenuItems () {
        return $$('#originInput-menu li');
    }

}

module.exports = InputOrigin;