<hello-world>
    <h3>{opts.title}</h3>
</hello-world>

<todo>
    <ul>
        <li each={items} class={completed: done}>
            <input type="checkbox" checked={ done }> { title }
        </li>
    </ul>

    <div if={has_items}>
        This div is inserted when 'has_items' is true.
    </div>

    <div show={has_items}>
        This div is shown when 'has_items' is true.
    </div>

    this.items = [
        { title: 'First item', done: true },
        { title: 'Second item' },
        { title: 'Third item' }
    ]

    this.has_items = this.items.length > 0
</todo>
