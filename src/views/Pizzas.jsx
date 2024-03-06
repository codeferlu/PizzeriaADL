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
      />
  )
    }
    </ul>
    </>

  );
};
export default Pizzas;
