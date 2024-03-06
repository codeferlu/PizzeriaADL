import PizzaCard from "../components/PizzaCard";
import { useParams } from "react-router-dom";
const Pizzas = (props) => {
let {selectedPizza} = useParams()

  return (

    <>
    <h2>{props.from == "home" ? "Pizzas destacadas": "Nuestro Catalogo"}</h2>
    <ul>
    {
      props.data.map((pizza, index) =>{
        if (
          selectedPizza != undefined && selectedPizza != ""
        ) {
          if (pizza.name.split(" ").join("") == selectedPizza){
            return <PizzaCard 
            name={pizza.name}
            img={pizza.img}
            desc={pizza.desc}
            ingredients={pizza.ingredients}
            price={pizza.price}
            />
          }
          else {
            return null
          }
        }
        else if (props.from == "home" && index < 3) {
          return <PizzaCard 
          name={pizza.name}
          img={pizza.img}
          desc={pizza.desc}
          ingredients={pizza.ingredients}
          price={pizza.price}
          />
        } else if (props.from !== "home") {
          return <PizzaCard 
          name={pizza.name}
          img={pizza.img}
          desc={pizza.desc}
          ingredients={pizza.ingredients}
          price={pizza.price}
          />
        }
      })
    }
    </ul>
    </>

  );
};
export default Pizzas;

