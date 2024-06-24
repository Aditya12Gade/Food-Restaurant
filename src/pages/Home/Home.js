import React from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();

  return (
      <div>
      
      <div className='content'>
        <p>Welcome to the Food's </p>
        <p> Kitchen </p>      
      </div>
      
      <div className='buttonContainer'>
        <button onClick={()=>{
            navigate('/menu')
        }} className='button' ><p className='buttontext'>GO TO MENU</p></button>
        </div>
            
    </div>
  )
}
