import { useContext } from "react";
import { ContextApp } from "../App";
import Card from 'react-bootstrap/Card';

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
  <div className="cajaCarta">
<li className="li">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
<Card.Title>{props.name}</Card.Title>
  <Card.Text>{props.desc}</Card.Text>
  <Card.Text>${props.price}</Card.Text>
  <ul>
    {props.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ))}
  </ul>
  <button onClick={() => handlePizza(props.name, 'add')}>Agregar al Carrito</button> 
  <button disabled={props.count == 0 ? true : false} onClick={() => handlePizza(props.name, 'remove')}>Quitar del carrito</button>
  </Card.Body>
  </Card>
  <span>Llevas en el carrito: {props.count}</span>
</li>
</div>
    );
  };
  export default PizzaCard;
  

