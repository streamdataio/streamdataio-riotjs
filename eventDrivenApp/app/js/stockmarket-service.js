'use strict';

class StockMarketService {
    constructor(appToken, bus) {
        var self = this;
        var url = "http://stockmarket.streamdata.io/prices";

        this.bus = bus;
        var streamdata =
            streamdataio.createEventSource(url, appToken, [], null);

        self.data = [];

        streamdata.onData(function (data) {
            self.data = data;
            self.bus.trigger('newStocksEvent', {stocks: self.data}, true);

        }).onPatch(function (patches) {
            jsonpatch.apply(self.data, patches);
            self.bus.trigger('newStocksEvent', {stocks: self.data}, true);

        }).onError(function (error) {
            console.error(error);
            self.bus.trigger('errorStocksEvent', error);
            self.streamdata.close();
        });

        streamdata.open();
    }
}