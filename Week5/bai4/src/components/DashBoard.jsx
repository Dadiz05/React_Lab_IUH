import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function DashBoard() {
    return (
        <div>
            <h1>DashBoard</h1>

            <nav>
                <Link to="profile">Profile</Link>
                <Link to="order">Order</Link>
                <Link to="setting">Setting</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}
