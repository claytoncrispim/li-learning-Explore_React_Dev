import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "quattro formaggi pizza", 
  "hot roll sushi", 
  "smoked salmon",
  "meat balls",
  "cheesecake"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}))

// console.log(dishObjects);

function Main ({ dishes }){
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: "none" , color: "orange"}}>
          {dish.title}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects}/>
    </div>
  );
}

export default App;
