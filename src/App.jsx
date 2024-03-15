import { useState } from 'react'
import './App.css'
import Cart from './component/Cart'
import Header from './component/Header'
import Product from './component/Product'

function App() {
    
  const [carts , setCarts]=useState([])
  const cartsdata = (cd,id) =>{
      const newCarts = [...carts, cd]
      if(carts.filter(c => c.id !== id)){
        setCarts(newCarts)
      }
  }
  // console.log(carts.id);
  return (
   <div className='container mx-auto mt-10 bg-gray-100 '>
    <Header></Header>
    <div className="flex justify-between gap-10 mt-10"> 
                <Product cartsdata={cartsdata}></Product>
                <Cart carts={carts}></Cart>                
            </div>
   </div>
  )
}

export default App
