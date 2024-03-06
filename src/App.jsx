// App.jsx
import  { useEffect, useState, createContext } from 'react';
import Pizzas from './views/Pizzas'
import Home from './views/Home'
import Carrito from './views/Carrito'
import Error from './views/Error'
import {Route, Routes} from 'react-router'
import Navbar from './components/Navbar';
export const ContextApp = createContext()

const App = () => {
  const [carritoPizzas, setCarritoPizzas] = useState([])
  const [dataPizzas, setDataPizzas] = useState([])

  const fetchPizzas = async () =>  {
     const data = await fetch("/pizzas.json")
     const res = await data.json()
     setDataPizzas(res)
  } 

  useEffect (() => {
fetchPizzas()
  }, [])
  return (
<ContextApp.Provider value={{dataPizzas, setDataPizzas, carritoPizzas, setCarritoPizzas}}>
  <Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/pizzas" element={<Pizzas data={dataPizzas}/>}/>
  <Route path="/carrito" element={<Carrito/>}/>
  <Route path="*" element={<Error/>}/>
</Routes>
</ContextApp.Provider>
  );
};

export default App;
