// App.jsx
import React from 'react';
import { PizzaProvider } from './context/PizzaContext';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Pizzas from './views/Pizzas'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Carrito from './views/Carrito'
const App = () => {
  return (
    <PizzaProvider>
      <Navbar/>
        <BrowserRouter>
          <Routes>
          <Route path='/home'>
<Home/>
           </Route>
            <Route path='/pizzas'>
<Pizzas/>
           </Route>
           <Route path='/carrito'>
<Carrito/>
           </Route>
        </Routes>
      </BrowserRouter>
     
  

    </PizzaProvider>
  );
};

export default App;
