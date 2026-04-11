import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
    return (
        <div>
            <h2>List Products</h2>

            <ul>
                <li>
                    <Link to='/products/1'>Iphone</Link>
                    <Link to='/products/2'>Samsung</Link>
                    <Link to='/products/3'>Laptop</Link>
                </li>

            </ul>

        </div>
    )
}
