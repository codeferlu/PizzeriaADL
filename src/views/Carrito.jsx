
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ContextApp } from '../App';

const Carrito = (props) => {
  const c = useContext(ContextApp)
  const [productsCarrito, setProductsCarrito] = useState([])

  const calculatePizzas = () => {

  }

  useEffect (() => {
    const pizzas = []
    c.dataPizzas.forEach(pizza =>{
      pizzas.push({...pizza, count: 0})
    })
    setProductsCarrito(pizzas)
  }, [])

  useEffect(() => {
const newPizzas = []
c.carritoPizzas.forEach((pz) => {
  productsCarrito.forEach((pPz) => {
    if (pPz.name == pz){
      newPizzas.push({...pPz, count: pPz.count +1 })
    }
  })
}, [c.carritoPizzas])
  return (
    <div>
      <h2>Este es un componente simple de carrito</h2>
      <ul>
      {
        c.carritoPizzas.map((pizzas) => <li>{pizzas} ${price}</li>)
      }
      </ul>
    </div>
  );
},

export default Carrito
