const { expect } = require('@wdio/globals');
const allureReporter = require('@wdio/allure-reporter').default;

const HomeFlights = require('../pageobjects/homeflights.page');
const Tickets = require('../pageobjects/tickets.page');

const { TIMEOUTS } = require('../utils/constants.js');
const testData = require('../testdata/flights.js');

describe('Search for tickets', async () => {

    beforeEach(async () => {
        await HomeFlights.open();
        //await Tickets.open();
    });

    testData.forEach(async (data) => {
        it(`Flight codename: ${data.testcase_name}`, async () => {
            allureReporter.addFeature('Search Flight');
            allureReporter.addSeverity('critical');

            // Search flight
            allureReporter.addStep('Search for a flight!', {}, 'broken');
            await HomeFlights.searchAFlight(data);
    
            allureReporter.addStep('Checking results!', {}, 'broken');
            // Log the number of results
            await Tickets.resultsCount.waitForDisplayed({ timeout: TIMEOUTS.LONG });
            if (await Tickets.isResultsCountDisplayed()) {
                const results = await Tickets.resultsCount.getText();
                console.log(`Results are: ${results}`);

                await expect(parseInt(results, 10)).toBeGreaterThan(0);
            }  else {
                throw new Error('Results summary is not visible');
            }
        });
    });
})

