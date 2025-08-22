import "./App.css";

let language = "React";
let moon = "🌙";

function App() {
  return (
    <h1>
      Hello {language.toLocaleUpperCase()} {moon}!!
    </h1>
  );
}

export default App;
