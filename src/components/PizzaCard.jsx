import { useContext } from "react";
import { ContextApp } from "../App";


const PizzaCard = (props) => {
    const c = useContext(ContextApp)

const handlePizza = (name) => {
c.setCarritoPizzas([...c.carritoPizzas, name])
}

    return (
  
<li>
  <h2>{props.name}</h2>
  <img src={props.img} alt={props.name}/>
  <h2>{props.desc}</h2>
  <h2>{props.price}</h2>
  <ul>
    {props.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ))}
  </ul>
  <button onClick={() => handlePizza(props.name)}>Agregar al Carrito</button> 
</li>

    );
  };
  export default PizzaCard;
  