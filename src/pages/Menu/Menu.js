import React, { useEffect, useState } from 'react'
import { data as raw} from '../../data';
import MenuCard from '../../components/MenuCard/MenuCard';
import './Menu.css'
import { useNavigate } from 'react-router-dom';

export default function Menu({data, setData, doCheckout}) {

  const navigate = useNavigate();

  useEffect(()=>{
    if(doCheckout){
      navigate('/checkout');
    }
  },[doCheckout])

  const addQuantity = (id)=>{
    let temp = []

    data.map((item)=>{
      if(item.id!==id){
        temp.push(item);
      }else{
        let newItem = {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity + 1,
          imageUrl: item.imageUrl
        }

        temp.push(newItem)
      }
    });

    setData(temp);
  }
  
  const subQuantity = (id)=>{
    let temp = []

    data.map((item)=>{
      if(item.id!==id){
        temp.push(item);
      }else{
        let newItem = {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity - 1,
          imageUrl: item.imageUrl
        }

        temp.push(newItem)
      }
    });

    setData(temp);
  }

  return (
    <div
      className='screen'
    >
      {data.map((item, index)=>{
        return <MenuCard key={index} id={item.id} name={item.name} imageUrl={item.imageUrl}  price = {item.price} quantity={item.quantity} onAdd = {addQuantity} onSub={subQuantity} />
      })}
    </div>
  )
}
