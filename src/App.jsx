// App.jsx
import  { useEffect, useState } from 'react';
import Pizzas from './views/Pizzas'
import Home from './views/Home'
import Carrito from './views/Carrito'
import Error from './views/Error'
import {Route, Routes} from 'react-router'

const App = () => {
  const [selectedPizzas, setSelectedPizzas] = useState("napolitana")
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
<>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/pizzas/:selectedPizzas" element={<Pizzas data={dataPizzas}/>}/>
  <Route path="/carrito" element={<Carrito/>}/>
  <Route path="*" element={<Error/>}/>
</Routes>
</>
  );
};

export default App;
