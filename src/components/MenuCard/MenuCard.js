import React from 'react'
import './MenuCard.css'
import { FaPlus, FaMinus } from "react-icons/fa6";


export default function MenuCard({ name, imageUrl, onAdd, onSub, price, quantity, id }) {
    return (
        <div
            className='box'
        >
            <img className='img' src={imageUrl} alt={name} />
            <p className='name'>
                {name}
            </p>

            <p
                className='price'
            >
                {`Price: ${price}`}
            </p>

            {quantity > 0 ? <>
                <p className='price'> {`Total: ${quantity}`} </p>
                <p className='price'> {`Cost (INR): ${quantity * price}`} </p>
            </> : <></>}

            <div
                className='plusminus'
            >
                <div className='plus' onClick={() => {
                    onAdd(id);
                }}>
                    <FaPlus />
                </div>

                <div className='minus' onClick={() => {
                    if (quantity > 0) {
                        onSub(id);
                    }
                }}>
                    <FaMinus />
                </div>
            </div>

        </div>
    )
}