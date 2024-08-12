const { $ } = require('@wdio/globals');

const Page = require('./page.js');

class Tickets extends Page {

    get ticketsScreen () {
        return $('div[class*="FlightsDayView_screen"]');
    }

    get ticketsView () {
        return $$('div[class*="FlightsResults_dayViewItems"] div');
    }

    get resultsCount () {
        return $('div[class*="ResultsSummary_summaryContainer"] span');
    }

    async isResultsCountDisplayed () {
        return await this.resultsCount.isDisplayed();
    }

    open () {
        return super.open('transporte/vuelos/nyca/syd/240812/240819/?adultsv2=3&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false');
    }
}

module.exports = new Tickets();
