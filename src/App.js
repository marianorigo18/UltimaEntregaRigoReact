import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import Checkout from './components/Checkout/Checkout';
import CartProvider from './context/CartContext';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <CartProvider>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/articulo/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={<Checkout/>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
