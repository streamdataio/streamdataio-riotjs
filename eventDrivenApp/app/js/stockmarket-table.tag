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
            <tr each={opts.stocks}>
                <td>{title}</td>
                <td>{price}</td>
            </tr>
        </tbody>
    </table>
</stockmarket-table>