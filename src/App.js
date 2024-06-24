import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import NoPage from './pages/NoPage/NoPage';
import Checkout from './pages/Checkout/Checkout';

import { PiForkKnifeFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { data as raw } from './data';
import { useState } from 'react';
import { Modal } from '@mui/material';
import Cart from './components/Cart/Cart';

function App() {
  const [data, setData] = useState(raw);
  const [openCart, setOpenCart] = useState(false);
  const [doCheckout,setDoCheckout] = useState(false);

  const getQuantity = ()=>{
    let q = 0;

    data.map((item)=>{
      q = q + item.quantity
    })

    return q;
  }

  return (

    
    <div>
      <div className='headerRoot'>
      <div
       className='header'
      >
      <PiForkKnifeFill size={45} color='white' />
        <p className='headtext'>Food's Restaurant</p>
      </div>

      {getQuantity() > 0?<div
        className='cartContainer'
        onClick={()=>{setOpenCart(true)}}
      >
      <FaShoppingCart size={40} color='#1D2553' />
      <p className='cartQuantity' >{getQuantity()}</p>
      </div>:<></>}

      </div>

 <Modal
        open={openCart}
        onClose={()=>{
          setOpenCart(false)
        }}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Cart data={data} onClose={()=>{
          setOpenCart(false)
        }}
        setDoCheckout={setDoCheckout}
        />
      </Modal>


    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="menu" element={<Menu data = {data} setData={setData} doCheckout={doCheckout} />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>

    </div>
  )

}

export default App;
