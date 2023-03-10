import { useState } from 'react'

export default function Counter()
{
    console.log('useState - ', useState)

    return (
        <div className="Counter">
            <span>Current Count: 0</span>
            <section className="row">
                <button className="col">+</button>
                <button className="col">-</button>
            </section>
        </div>
    )
}
