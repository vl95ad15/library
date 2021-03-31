import './App.css';
import Header from "./components/layout/header/Header";
import Content from "./components/layout/content/Content";
import State from "./context/state"

function App() {
  return (
      <State>
        <div className="App">
          <Header/>
          <Content/>
        </div>
      </State>
  );
}

export default App;
