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
  
        <li className="li">
        <ul className="ulcard">
            <Card border="light" className="bg-dark text-white box" style={{ width: '13rem', margin: '0.2rem' } }>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <ul>
                        {props.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                            ))}
                    </ul>
                            <Card.Text>${props.price}</Card.Text>
                    <button onClick={() => handlePizza(props.name, 'add')}>Agregar al Carrito</button> 
                    <button disabled={props.count == 0 ? true : false} onClick={() => handlePizza(props.name, 'remove')}>Quitar del carrito</button>
                    <Card.Text>Llevas en el carrito: {props.count}</Card.Text>
                </Card.Body>
            </Card>
        </ul>
    </li>
   

    );
  };
  export default PizzaCard;
  

