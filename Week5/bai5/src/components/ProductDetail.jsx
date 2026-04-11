import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductDetail() {
    const navigate = useNavigate()
    const handleBuy = () => {
        navigate("/checkout");
    }
    return (
        <div>
            <h1>Chi tiet san pham</h1>
            <button onClick={handleBuy}>Mua hang</button>

        </div>
    )
}
