import { useContext } from "react";
import { ContextApp } from "../App";


const PizzaCard = (props) => {
    const c = useContext(ContextApp)

const handlePizza = (name, mode) => {
    const updatedPizzas = []
    c.dataPizzas.forEach((pizza) => {
        if (pizza.name == name){
            const operate = mode == "add" ? pizza.count + 1 : pizza.count - 1
            updatedPizzas.push(
                {...pizza, count: operate}
            )
        } else {
            updatedPizzas.push(pizza)
        }
    })
c.setDataPizzas(updatedPizzas)
}

    return (
  
<li>
  <h2>{props.name}</h2>
  <img src={props.img} alt={props.name}/>
  <h2>{props.desc}</h2>
  <h2>${props.price}</h2>
  <ul>
    {props.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ))}
  </ul>
  <span>Llevas en el carrito: {props.count}</span>
  <button disabled={props.count == 0 ? true : false} onClick={() => handlePizza(props.name, 'remove')}>Quitar del carrito</button>
  <button onClick={() => handlePizza(props.name, 'add')}>Agregar al Carrito</button> 
</li>

    );
  };
  export default PizzaCard;
  