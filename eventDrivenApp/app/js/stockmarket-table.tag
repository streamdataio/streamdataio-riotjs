<stockmarket-table>
    <h3>{opts.title}</h3>
    <table class="table table-striped table-bordered table-hover table-condensed" style="width: 70%;">
        <thead>
        <tr>
            <th>Title</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr each={stocks}>
            <td>{title}</td>
            <td>{price}</td>
        </tr>
        </tbody>
    </table>
    <script type="es6">
        var self = this;
        self.stocks = opts.stocks;

        opts.bus.on('newStocksEvent', function (param) {
            self.stocks = param.stocks;
            self.update();
        });
    </script>
</stockmarket-table>