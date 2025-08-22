import './App.css';

let credits = "Blue Savannah by Erasure";

function Header() {
  return (
    <header>
      <h1>Home is where the heart is</h1>
    </header>
  );

}

function App() {

  return (
    <div>
      <Header />
      <main>
        <h1>Sweet to surrender</h1>
        <h2>{credits}</h2>
      </main>
    </div>
  );
}

export default App
