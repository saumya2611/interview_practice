import { Provider } from "react-redux";
import "./App.css";
import TodoData from "./Component/todoData";
import { store } from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoData />
      </Provider>
    </>
  );
}

export default App;
