import logo from "./logo.svg";
import "./App.css";
import Todo from "./Component/todo";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
