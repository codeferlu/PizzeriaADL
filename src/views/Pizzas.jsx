import PizzaCard from "../components/PizzaCard";
const Pizzas = (props) => {


  return (

    <>
    <h1>soy Pizza</h1>
    <ul>
    {
      props.data.map((pizza) =>

      <PizzaCard 
      name={pizza.name}
      img={pizza.img}
      desc={pizza.desc}
      ingredients={pizza.ingredients}
      price={pizza.price}
      />
  )
    }
    </ul>
    </>

  );
};
export default Pizzas;

