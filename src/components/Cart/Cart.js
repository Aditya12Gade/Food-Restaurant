import React from 'react'
import './Cart.css'

export default function Cart({data, onClose, setDoCheckout}) {

    const getTotal = ()=>{
        let t = 0;

        data.map((item)=>{
            t = t + item.quantity*item.price
        })

        return t
    }

  return (
    <div className='cartRoot'>
        <div className='cartBox' >
            <p>Order Summary</p>

            {data.map((item, index)=>{
                if(item.quantity>0){
                    return <div key={index} className='itemCart' >
                        <p>{`${item.name}:`}</p>
                        <p className='itemQuantity'>{`${item.quantity}`}</p>
                    </div>
                }
            })}

            <p>{`Total (INR): ${getTotal()}`}</p>

            <div
                className='savebuttonroot'
            >
                <div
                className='saveButton'
                onClick={()=>{
                    setDoCheckout(true);
                    onClose();
                }}
                >
                <p className='saveText'>SAVE AND CHECKOUT</p>
                </div>
                <div
                onClick={()=>{
                    onClose();
                }}
                >
                <p className='cancelText'>CANCEL</p>
                </div>
            </div>
        </div>
    </div>
  )
}
