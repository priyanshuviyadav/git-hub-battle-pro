import "./App.css";
import Navigation from "./component/Navigation";
import Popular from "./component/Popular";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
      </div>
      <div>
        <Popular />
      </div>
    </>
  );
}

export default App;
