import './App.css';

// let credits = "Blue Savannah by Erasure";

function Header({ name, year }) {
  // console.log(props);
  return (
    <header>
      <h1>{name}, Home is where the heart is!</h1>
      <p>Copyright {year}</p>
    </header>
  );

}

function App() {
  return (
    <div>
      <Header name="Sam" year= {new Date().getFullYear()} />
      <main>
        <h1>Sweet to surrender</h1>
        {/* <h2>{credits}</h2> */}
      </main>
    </div>
  );
}

export default App
