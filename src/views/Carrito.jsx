
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ContextApp } from '../App';

const Carrito = () => {
  const c = useContext(ContextApp)
  const getTotal = () => {
    let total = 0
    c.dataPizzas.forEach((pizza) => {
      total = total + (pizza.price * pizza.count)
    })
    return total
  }
  return (
    <>
    <div className='cajacarrito'>
    <h1>Carrito</h1>
    <ul className='ulcarrito'>
      {
        c.dataPizzas.map((pizza) => <li>{pizza.name} Cantidad:{pizza.count} x ${pizza.price}</li>)
      }
    </ul>
    <p>Total: ${ getTotal() }</p>
    </div>
    </>
  )
}


export default Carrito;