
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
    <h1>Carrito</h1>
    <ul>
      {
        c.dataPizzas.map((pizza) => <li>{pizza.name} ${pizza.count} x ${pizza.price}</li>)
      }
    </ul>
    <p>Total: ${ getTotal() }</p>
    </>
  )
}


export default Carrito;