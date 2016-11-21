'use strict';

class StockMarketService {
    constructor(bus) {
        this.bus = bus;
        this.url = "http://stockmarket.streamdata.io/prices";
    }

    fetchJson() {
        var self = this;
        var xhr = new XMLHttpRequest();

        xhr.onload = function () {
            var status = xhr.status;

            if (xhr.readyState == 4 && status == 200) {
                var stocks = JSON.parse(xhr.responseText);
                self.bus.trigger('newStocksEvent', {stocks: stocks}, true);

            } else {
                console.error(status);
                self.bus.trigger('errorStocksEvent', status);

            }
        };

        xhr.open("GET", self.url, true);
        xhr.send();
    }
}