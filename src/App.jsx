// App.jsx
import  { useEffect, useState, createContext } from 'react';
import Pizzas from './views/Pizzas'
import Home from './views/Home'
import Carrito from './views/Carrito'
import Error from './views/Error'
import {Route, Routes} from 'react-router'
import Navbar from './components/Navbar';
import { NavLink } from 'react-router-dom';
export const ContextApp = createContext()

const App = () => {
  
  const [dataPizzas, setDataPizzas] = useState([])

  const fetchPizzas = async () =>  {
     const data = await fetch("/pizzas.json")
     const res = await data.json()
     const adaptedPizzas = []
     res.forEach(pizza => {
      adaptedPizzas.push({...pizza, count: 0})
     })
     setDataPizzas(adaptedPizzas)
  } 

  useEffect (() => {
fetchPizzas()
  }, [])

  useEffect(() => {
  }), [dataPizzas]

  return (
<ContextApp.Provider value={{dataPizzas, setDataPizzas}}>
  <Navbar/>
<Routes>
  <Route path="/" element={<Home><Pizzas data={dataPizzas} from="home"/><NavLink to="/pizzas">Ver todas las Pizzas</NavLink></Home>}/>
  <Route path="/pizzas" element={<Pizzas data={dataPizzas}/>}/>
  <Route path="/pizzas/:selectedPizza" element={<Pizzas data={dataPizzas}/>}/>
  <Route path="/carrito" element={<Carrito/>}/>
  <Route path="*" element={<Error/>}/>
</Routes>

</ContextApp.Provider>
  );
};

export default App;
