const { $ } = require('@wdio/globals');
const dayjs = require('dayjs');

const Page = require('./page.js');
const InputOrigin = require('./components/inputorigin.component');
const InputDestination = require('./components/inputdestination.component');
const DatePicker = require('./components/datepicker.component');
const GuestPicker = require('./components/guestpicker.component');

const utils = require('../utils/common.utils')
const { TIMEOUTS } = require('../utils/constants.js')
const testData = require('../testdata/flights.js');

/**
 * sub page containing Skyscanner Home page selector to select a Flight
 */
class HomeFlights extends Page {

    get inputOrigin () {
        return new InputOrigin();
    }

    get inputDestination () {
        return new InputDestination();
    }

    get datepicker () {
        return new DatePicker();
    }

    get guestPicker () {
        return new GuestPicker();
    }

    get searchBtn () {
        return $('button[data-testid="desktop-cta"]');
    }

    async #setInputValue (inputElement, cityName) {
        if (await inputElement.isDisplayed()) {
            await utils.clearValue(inputElement)
            await inputElement.setValue(cityName);
        } else {
            throw new Error(`Input is not visible`);
        }
    }

    async #clickFirstMenuItem (menuItems) {
        if (menuItems.length > 0 && await menuItems[0].isDisplayed()) {
            await menuItems[0].waitForClickable({ timeout: TIMEOUTS.SHORT });
            await menuItems[0].click();
        } else {
            throw new Error('Suggestions menu is not visible or has no items');
        }
    }

    async typeCityOrigin (cityFrom) {
        await this.#setInputValue(await this.inputOrigin.inputElement, cityFrom);
        await this.inputOrigin.suggestionMenu.waitForDisplayed({ timeout: TIMEOUTS.SHORT });
        await this.#clickFirstMenuItem(await this.inputOrigin.suggestionMenuItems); 
    }

    async typeCityDestination (cityTo) {
        await this.#setInputValue(await this.inputDestination.inputElement, cityTo);
        await this.inputDestination.suggestionMenu.waitForDisplayed({ timeout: TIMEOUTS.SHORT });
        await this.#clickFirstMenuItem(await this.inputDestination.suggestionMenuItems);
    }

    async selectDates (dateFrom, dateTo) {
        const originDatepicker = await this.datepicker.parentInputElement[0];
        await originDatepicker.click();
        await this.datepicker.popUp.waitForDisplayed({ timeout: TIMEOUTS.SHORT });

        //const selectedDay = await this.datepicker.defaultDay.getText();
        const originDayNumber = dayjs(dateFrom).date();
        const originDayElement = await this.datepicker.dayButton(originDayNumber);
        await originDayElement.waitForClickable({ timeout: TIMEOUTS.SHORT });
        await originDayElement.click();
        

        const newDayNumber = dayjs(dateTo).date();
        const destinationDayElement = await this.datepicker.dayButton(newDayNumber);
        await destinationDayElement.waitForClickable({ timeout: TIMEOUTS.SHORT });
        await destinationDayElement.click();
        
        await this.datepicker.search.waitForClickable({ timeout: TIMEOUTS.SHORT });
        await this.datepicker.search.click();
    }

    async typeGuests (guests) {
        await this.guestPicker.parentInputElement.click();
        await this.guestPicker.popUp.waitForDisplayed({ timeout: TIMEOUTS.SHORT });

        await this.guestPicker.adultsInput.clearValue();
        await this.guestPicker.adultsInput.setValue(guests);

        await this.guestPicker.requestBtn.scrollIntoView();
        await this.guestPicker.requestBtn.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * this method search for a flight selecting all components
     */
    async searchAFlight (flightData) {
        await this.typeCityOrigin(flightData.city_from);
        await this.typeCityDestination(flightData.city_to);
        await this.selectDates(flightData.date_from, flightData.date_to);
        await this.typeGuests(flightData.guests);

        await this.searchBtn.waitForClickable({ timeout: TIMEOUTS.SHORT });
        await this.searchBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomeFlights(testData);
